
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
  return new TranslateHttpLoader(http, '/apps/fssp/fssc/web/bo-robxdjchenshjfront/fybxdjcx/i18n/', '.json'+ versionSuffix);
}

export let lang = {"zh-CHS":{"root-component":"","root-layout":"","query-scheme-section":"","Section/query-scheme-section/mainTitle":"主标题","Section/query-scheme-section/subTitle":"","query-scheme-1":"默认筛选方案","QueryScheme/query-scheme-1/dcd2a4e3-b24e-41f3-a46a-076d1888d320":"ID","QueryScheme/query-scheme-1/dcd2a4e3-b24e-41f3-a46a-076d1888d320/placeHolder":"","QueryScheme/query-scheme-1/57d52d3d-ad25-4722-aae0-220e7a687098":"报销人","QueryScheme/query-scheme-1/57d52d3d-ad25-4722-aae0-220e7a687098/placeHolder":"","QueryScheme/query-scheme-1/c9b3f223-a87e-4af1-9e60-a71c5ef9dad1":"所属部门","QueryScheme/query-scheme-1/c9b3f223-a87e-4af1-9e60-a71c5ef9dad1/placeHolder":"","QueryScheme/query-scheme-1/b394ceb5-9a1d-4bfd-a661-f03356a507b6":"等值","QueryScheme/query-scheme-1/b394ceb5-9a1d-4bfd-a661-f03356a507b6/placeHolder":"","QueryScheme/query-scheme-1/b394ceb5-0274-4ad1-9d3b-71ba10c4aa53":"起始","QueryScheme/query-scheme-1/b394ceb5-0274-4ad1-9d3b-71ba10c4aa53/placeHolder":"","QueryScheme/query-scheme-1/b394ceb5-b052-4279-bc32-7d2d72151177":"终止","QueryScheme/query-scheme-1/b394ceb5-b052-4279-bc32-7d2d72151177/placeHolder":"","qdp-framework-component":"报销单查询对象","spreadSheet1":""}};

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
          const versionKey = "fybxdjcx/" + langCode + ".json";
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
