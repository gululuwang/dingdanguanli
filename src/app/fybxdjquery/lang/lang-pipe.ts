
import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';
import { DomSanitizer} from '@angular/platform-browser';
export function createTranslateLoader(http: HttpClient,version:string) {
  let versionSuffix = "";
  if (version) {
    versionSuffix = "?v=" + version;
  }
  return new TranslateHttpLoader(http, '/apps/fssp/fssc/web/bo-robxdjchenshjfront/fybxdjquery/i18n/', '.json'+ versionSuffix);
}

export let lang = {"zh-CHS":{"button-add":"新增","button-edit":"编辑","button-view":"查看","button-delete":"删除","root-component":"","root-layout":"","query-scheme-section":"","Section/query-scheme-section/mainTitle":"","Section/query-scheme-section/subTitle":"","query-scheme-1":"默认筛选方案","QueryScheme/query-scheme-1/e32e9a6a-840b-4496-9154-0ea2b9e496f2":"ID","QueryScheme/query-scheme-1/e32e9a6a-840b-4496-9154-0ea2b9e496f2/placeHolder":"","QueryScheme/query-scheme-1/7fc48a21-7368-41e6-9395-c08da6925fdd":"组织","QueryScheme/query-scheme-1/7fc48a21-7368-41e6-9395-c08da6925fdd/placeHolder":"","QueryScheme/query-scheme-1/7fc48a21-7368-41e6-9395-c08da6925fdd/control/help/dialogTitle":"","QueryScheme/query-scheme-1/47dac0eb-8364-4f6e-b6be-758d7191ff22":"人员","QueryScheme/query-scheme-1/47dac0eb-8364-4f6e-b6be-758d7191ff22/placeHolder":"","QueryScheme/query-scheme-1/47dac0eb-8364-4f6e-b6be-758d7191ff22/control/help/dialogTitle":"","QueryScheme/query-scheme-1/f5f93ce3-344c-4fdc-be2a-8d63d1e201b8":"报销总额","QueryScheme/query-scheme-1/f5f93ce3-344c-4fdc-be2a-8d63d1e201b8/placeHolder":"","QueryScheme/query-scheme-1/5733ee90-fc45-49c1-868c-947498cd0cf7":"报销限额","QueryScheme/query-scheme-1/5733ee90-fc45-49c1-868c-947498cd0cf7/placeHolder":"","page-header":"","header-nav":"","header-title-container":"","page-header-title":"","page-header-toolbar":"","page-main":"","data-grid-component-ref":"","data-grid-component":"","data-grid-section":"","Section/data-grid-section/mainTitle":"","Section/data-grid-section/subTitle":"","dataGrid":"","DataGrid/dataGrid/lineNumberTitle":"","DataGrid/dataGrid/OperateEditButton":"编辑","DataGrid/dataGrid/OperateDeleteButton":"删除","DataGrid/dataGrid/OperateColumn":"操作","organization_7fc48a21_ugdf":"组织","employee_47dac0eb_eab3":"人员","totalMoney_f5f93ce3_ig1x":"报销总额","limitMoney_5733ee90_m790":"报销限额"}};

@Pipe({ name: 'lang' })
export class LangPipe implements PipeTransform {
  constructor(private translate: TranslateService, private http: HttpClient) { }
  transform(key: string, langCode: string, defaultValue?: string) {
      
    const translateValue = this.translate.instant(key);
    if (translateValue == "JitI18nDefaultValue") {
      return defaultValue ? defaultValue : "";
    }

    return translateValue;
  }
}
@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    if (!url) {
      url = "";
    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
@Injectable()
export class LangService {
  constructor(private translate: TranslateService) { }
  transform(key: string, langCode: string, defaultValue?: string) {
    
    const translateValue = this.translate.instant(key);
    if (translateValue == "JitI18nDefaultValue") {
      return defaultValue ? defaultValue : "";
    }

    return translateValue;
  }

  getCurrentLanguage() {
    return this.translate.currentLang;
  }

}

@Injectable()
export class TranslateResolveService implements Resolve<any>{

  constructor(private translate: TranslateService, private http: HttpClient) {
    translate.defaultLang = 'zh-CHS';
    translate.setTranslation('zh-CHS', lang['zh-CHS']);
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    let langCode = localStorage.getItem('languageCode');
    if (!langCode) {
      langCode = "zh-CHS";
    }
    if (langCode == "zh-CHS" || (this.translate.defaultLang === langCode && this.translate.currentLoader == createTranslateLoader(this.http,null))) {
      this.translate.setTranslation('zh-CHS', lang['zh-CHS']);
      return of(this.translate[langCode]);
    } else {
      const httpOb = this.http.get("/apps/fssp/fssc/web/bo-robxdjchenshjfront/version.json?v=" + new Date().getTime()).pipe(switchMap((data)=>{
        let currentVersion = null;
        if (data instanceof Array) {
          const versionKey = "fybxdjquery/" + langCode + ".json";
          data.forEach((item) => {
            if (item.category == "i18n" && item.key == versionKey) {
              currentVersion = item.value;
            }
          });
        }

        this.translate.defaultLang = langCode;
        this.translate.currentLang = langCode;
        this.translate.currentLoader = createTranslateLoader(this.http, currentVersion);

    let tran = this.translate.getTranslation(langCode).pipe(catchError(err => {
      console.error("read resource file failed,please check!!! "+ err);
      return of(err);
    }));
    return tran;
      }));
      return httpOb;
    }
  }
}
