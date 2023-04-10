
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
  return new TranslateHttpLoader(http, '/apps/fssp/fssc/web/bo-robxdjchenshjfront/robxdjchenshjform3/i18n/', '.json'+ versionSuffix);
}

export let lang = {"zh-CHS":{"root-component":"","root-layout":"","page-header":"","header-nav":"","header-title-container":"","page-header-title":"","page-header-toolbar":"","button-add":"新增","button-edit":"编辑","button-save":"保存","button-cancel":"取消","button-approve":"提交审批","button-cancel-approve":"取消提交审批","main-container":"","like-card-container":"","basic-form-component-ref":"","detail-container":"","detail-section":"","Section/detail-section/mainTitle":"","Section/detail-section/subTitle":"","detail-tab":"","fybxdmx-tab-page":"报销单明细","fybxdmx-component-ref":"","fybxdmx-tab-toolbar":"","fybxdmxAddButton":"新增","fybxdmxRemoveButton":"删除","fxbxdfj-tab-page":"报销单附件","fxbxdfj-component-ref":"","fxbxdfj-tab-toolbar":"","fxbxdfjAddButton":"新增","fxbxdfjRemoveButton":"删除","basic-form-component":"","basic-form-section":"","Section/basic-form-section/mainTitle":"基本信息","Section/basic-form-section/subTitle":"","basic-form-layout":"","code_9b3cfccc_673s":"单据编号","TextBox/code_9b3cfccc_673s/placeHolder":"","employee_Employee_Name_0e18e40e_p3rc":"名称","TextBox/employee_Employee_Name_0e18e40e_p3rc/placeHolder":"","department_Department_name_b9c6e9a5_uo07":"名称","TextBox/department_Department_name_b9c6e9a5_uo07/placeHolder":"","totalSum_45b2b624_cvzc":"报帐金额","NumberSpinner/totalSum_45b2b624_cvzc/placeHolder":"","billType_77cd12de_kg0h":"报销类型","EnumField/billType_77cd12de_kg0h/placeHolder":"","EnumField/billType_77cd12de_kg0h/enumData/CL":"差旅费","EnumField/billType_77cd12de_kg0h/enumData/SJ":"手机费","EnumField/billType_77cd12de_kg0h/enumData/JT":"交通费","fybxdmx-component":"","fybxdmx-component-layout":"","dataGrid_fybxdmx":"","DataGrid/dataGrid_fybxdmx/lineNumberTitle":"","DataGrid/dataGrid_fybxdmx/OperateEditButton":"编辑","DataGrid/dataGrid_fybxdmx/OperateDeleteButton":"删除","DataGrid/dataGrid_fybxdmx/OperateColumn":"操作","detailDate_180e9f5d_0sbj":"费用日期","GridField/detailDate_180e9f5d_0sbj/editor/detailDate_180e9f5d_920a":"日期选择","GridField/detailDate_180e9f5d_0sbj/editor/DateBox/detailDate_180e9f5d_920a/placeHolder":"","amount_3bab47be_ici2":"报销金额","GridField/amount_3bab47be_ici2/editor/amount_3bab47be_woby":"数值框","GridField/amount_3bab47be_ici2/editor/NumberSpinner/amount_3bab47be_woby/placeHolder":"","invoiceNumer_a3acac3d_x1ko":"发票号码","GridField/invoiceNumer_a3acac3d_x1ko/editor/invoiceNumer_a3acac3d_0tx9":"文本","GridField/invoiceNumer_a3acac3d_x1ko/editor/TextBox/invoiceNumer_a3acac3d_0tx9/placeHolder":"","note_888e10c3_yv9s":"费用说明","GridField/note_888e10c3_yv9s/editor/note_888e10c3_2slf":"多行文本框","GridField/note_888e10c3_yv9s/editor/MultiTextBox/note_888e10c3_2slf/placeHolder":"","fxbxdfj-component":"","fxbxdfj-component-layout":"","dataGrid_fxbxdfj":"","DataGrid/dataGrid_fxbxdfj/lineNumberTitle":"","DataGrid/dataGrid_fxbxdfj/OperateEditButton":"编辑","DataGrid/dataGrid_fxbxdfj/OperateDeleteButton":"删除","DataGrid/dataGrid_fxbxdfj/OperateColumn":"操作","fileName_bf12f155_vj53":"文件名","GridField/fileName_bf12f155_vj53/editor/fileName_bf12f155_uxch":"多行文本框","GridField/fileName_bf12f155_vj53/editor/MultiTextBox/fileName_bf12f155_uxch/placeHolder":"","filePath_96ab041a_gbcz":"文件路径","GridField/filePath_96ab041a_gbcz/editor/filePath_96ab041a_n5kh":"多行文本框","GridField/filePath_96ab041a_gbcz/editor/MultiTextBox/filePath_96ab041a_n5kh/placeHolder":"","fileSize_587bc7c4_yb8b":"文件大小","GridField/fileSize_587bc7c4_yb8b/editor/fileSize_587bc7c4_mxx2":"数值框","GridField/fileSize_587bc7c4_yb8b/editor/NumberSpinner/fileSize_587bc7c4_mxx2/placeHolder":""}};

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
          const versionKey = "robxdjchenshjform3/" + langCode + ".json";
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
