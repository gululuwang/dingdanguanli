
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
  return new TranslateHttpLoader(http, '/apps/fssp/fssc/web/bo-robxdjchenshjfront/fybxdj2/i18n/', '.json'+ versionSuffix);
}

export const lang = {"zh-CHS":{"root-component":"","root-layout":"","page-header":"","header-nav":"","header-title-container":"","page-header-title":"","page-header-toolbar":"","button-add":"新增","button-edit":"编辑","button-save":"保存","button-cancel":"取消","button-approve":"提交审批","button-cancel-approve":"取消提交审批","main-container":"","like-card-container":"","basic-form-component-ref":"","detail-container":"","detail-section":"","Section/detail-section/mainTitle":"","Section/detail-section/subTitle":"","detail-tab":"","fybxdmx-tab-page":"报销单明细","fybxdmx-component-ref":"","fybxdmx-tab-toolbar":"","fybxdmxAddButton":"新增","fybxdmxRemoveButton":"删除","fxbxdfj-tab-page":"报销单附件","fxbxdfj-component-ref":"","fxbxdfj-tab-toolbar":"","fxbxdfjAddButton":"新增","fxbxdfjRemoveButton":"删除","basic-form-component":"","basic-form-section":"","Section/basic-form-section/mainTitle":"基本信息","Section/basic-form-section/subTitle":"","basic-form-layout":"","code_c11e2af8_37wx":"单据编号","TextBox/code_c11e2af8_37wx/placeHolder":"","employee_Employee_Name_96dfd988_jcua":"名称","TextBox/employee_Employee_Name_96dfd988_jcua/placeHolder":"","department_Department_name_6eada154_skbb":"名称","TextBox/department_Department_name_6eada154_skbb/placeHolder":"","totalSum_a71c0bd6_yt9i":"报帐金额","NumberSpinner/totalSum_a71c0bd6_yt9i/placeHolder":"","billType_56c69c6e_nmuw":"报销类型","EnumField/billType_56c69c6e_nmuw/placeHolder":"","EnumField/billType_56c69c6e_nmuw/enumData/CL":"差旅费","EnumField/billType_56c69c6e_nmuw/enumData/SJ":"手机费","EnumField/billType_56c69c6e_nmuw/enumData/JT":"交通费","subject_3ad7c466_e0zi":"报销项目","TextBox/subject_3ad7c466_e0zi/placeHolder":"","note_5524a4ad_ovdg":"报销说明","MultiTextBox/note_5524a4ad_ovdg/placeHolder":"","billState_BillState_e46f4304_sb8o":"状态","EnumField/billState_BillState_e46f4304_sb8o/placeHolder":"","EnumField/billState_BillState_e46f4304_sb8o/enumData/Billing":"制单","EnumField/billState_BillState_e46f4304_sb8o/enumData/SubmitApproval":"提交审批","EnumField/billState_BillState_e46f4304_sb8o/enumData/Approved":"审批通过","EnumField/billState_BillState_e46f4304_sb8o/enumData/ApprovalNotPassed":"审批不通过","fybxdmx-component":"","fybxdmx-component-layout":"","dataGrid_fybxdmx":"","DataGrid/dataGrid_fybxdmx/lineNumberTitle":"","DataGrid/dataGrid_fybxdmx/OperateEditButton":"编辑","DataGrid/dataGrid_fybxdmx/OperateDeleteButton":"删除","DataGrid/dataGrid_fybxdmx/OperateColumn":"操作","detailDate_6f7d777b_0jwn":"费用日期","GridField/detailDate_6f7d777b_0jwn/editor/detailDate_6f7d777b_kela":"日期选择","GridField/detailDate_6f7d777b_0jwn/editor/DateBox/detailDate_6f7d777b_kela/placeHolder":"","amount_d5bd1403_qui3":"报销金额","GridField/amount_d5bd1403_qui3/editor/amount_d5bd1403_ksm6":"数值框","GridField/amount_d5bd1403_qui3/editor/NumberSpinner/amount_d5bd1403_ksm6/placeHolder":"","invoiceNumer_2972ead7_coko":"发票号码","GridField/invoiceNumer_2972ead7_coko/editor/invoiceNumer_2972ead7_3f24":"文本","GridField/invoiceNumer_2972ead7_coko/editor/TextBox/invoiceNumer_2972ead7_3f24/placeHolder":"","note_122eea01_jnep":"费用说明","GridField/note_122eea01_jnep/editor/note_122eea01_18l7":"多行文本框","GridField/note_122eea01_jnep/editor/MultiTextBox/note_122eea01_18l7/placeHolder":"","fxbxdfj-component":"","fxbxdfj-component-layout":"","dataGrid_fxbxdfj":"","DataGrid/dataGrid_fxbxdfj/lineNumberTitle":"","DataGrid/dataGrid_fxbxdfj/OperateEditButton":"编辑","DataGrid/dataGrid_fxbxdfj/OperateDeleteButton":"删除","DataGrid/dataGrid_fxbxdfj/OperateColumn":"操作","fileName_39d19ec2_t7qh":"文件名","GridField/fileName_39d19ec2_t7qh/editor/fileName_39d19ec2_a1mj":"多行文本框","GridField/fileName_39d19ec2_t7qh/editor/MultiTextBox/fileName_39d19ec2_a1mj/placeHolder":"","filePath_40ee3186_vf3k":"文件路径","GridField/filePath_40ee3186_vf3k/editor/filePath_40ee3186_760n":"多行文本框","GridField/filePath_40ee3186_vf3k/editor/MultiTextBox/filePath_40ee3186_760n/placeHolder":"","fileSize_efec9ebc_hzi1":"文件大小","GridField/fileSize_efec9ebc_hzi1/editor/fileSize_efec9ebc_zzs5":"数值框","GridField/fileSize_efec9ebc_hzi1/editor/NumberSpinner/fileSize_efec9ebc_zzs5/placeHolder":""}};

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
          const versionKey = "fybxdj2/" + langCode + ".json";
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
