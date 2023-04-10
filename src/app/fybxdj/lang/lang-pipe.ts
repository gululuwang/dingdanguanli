
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
  return new TranslateHttpLoader(http, '/apps/fssp/fssc/web/bo-robxdjchenshjfront/fybxdj/i18n/', '.json'+ versionSuffix);
}

export let lang = {"zh-CHS":{"projectManager_ProjectManager_Name_7b02e6b5_19sc":"名称","TextBox/projectManager_ProjectManager_Name_7b02e6b5_19sc/placeHolder":"","employee_Employee_Name_065687c8_n23l":"报销人","TextBox/employee_Employee_Name_065687c8_n23l/placeHolder":"","department_Department_name_eb93a0ec_wkgj":"所属部门","TextBox/department_Department_name_eb93a0ec_wkgj/placeHolder":"","root-component":"","root-layout":"","page-header":"","header-nav":"","header-title-container":"","page-header-title":"","page-header-toolbar":"","button-add":"新增","button-edit":"编辑","button-save":"保存","button-cancel":"取消","toolBarItem_4769":"提交审批","toolBarItem_6556":"取消提交","main-container":"","scrollspy":"","Scrollspy/scrollspy/items/basic-form-section":"基本信息","Scrollspy/scrollspy/items/section-fybxdmx":"报销单明细","Scrollspy/scrollspy/items/section-fxbxdfj":"报销单附件","scrollspy-container":"","like-card-container":"","basic-form-component-ref":"","FYBXD-c5mp-component-ref":"","detail-container-fybxdmx":"","section-fybxdmx":"","Section/section-fybxdmx/mainTitle":"报销单明细","Section/section-fybxdmx/subTitle":"","fybxdmx-component-ref":"","detail-container-fxbxdfj":"","section-fxbxdfj":"","Section/section-fxbxdfj/mainTitle":"报销单附件","Section/section-fxbxdfj/subTitle":"","fxbxdfj-component-ref":"","basic-form-component":"","basic-form-section":"","Section/basic-form-section/mainTitle":"基本信息","Section/basic-form-section/subTitle":"","basic-form-layout":"","code_cca98cc9_86mj":"单据编号","TextBox/code_cca98cc9_86mj/placeHolder":"","billType_b12fdc9f_vf76":"报销类型","EnumField/billType_b12fdc9f_vf76/placeHolder":"","EnumField/billType_b12fdc9f_vf76/enumData/CL":"差旅费","EnumField/billType_b12fdc9f_vf76/enumData/SJ":"手机费","EnumField/billType_b12fdc9f_vf76/enumData/JT":"交通费","employee_Employee_Name_065687c8_7lwk":"报销人","LookupEdit/employee_Employee_Name_065687c8_7lwk/placeHolder":"","LookupEdit/employee_Employee_Name_065687c8_7lwk/dialogTitle":"","department_Department_name_eb93a0ec_iwwg":"所属部门","LookupEdit/department_Department_name_eb93a0ec_iwwg/placeHolder":"","LookupEdit/department_Department_name_eb93a0ec_iwwg/dialogTitle":"","totalSum_747db547_pilq":"报帐金额","NumberSpinner/totalSum_747db547_pilq/placeHolder":"","subject_42e600ac_aum0":"报销项目","LanguageTextBox/subject_42e600ac_aum0/placeHolder":"","fybxdmx-component":"","fybxdmx-component-layout":"","dataGrid_fybxdmx":"","DataGrid/dataGrid_fybxdmx/lineNumberTitle":"","DataGrid/dataGrid_fybxdmx/OperateEditButton":"编辑","DataGrid/dataGrid_fybxdmx/OperateDeleteButton":"删除","DataGrid/dataGrid_fybxdmx/OperateColumn":"操作","detailDate_eedd91e4_udbb":"费用日期","GridField/detailDate_eedd91e4_udbb/editor/detailDate_eedd91e4_od1q":"日期选择","GridField/detailDate_eedd91e4_udbb/editor/DateBox/detailDate_eedd91e4_od1q/placeHolder":"","amount_39d389fe_li64":"报销金额","GridField/amount_39d389fe_li64/editor/amount_39d389fe_3quf":"数值框","GridField/amount_39d389fe_li64/editor/NumberSpinner/amount_39d389fe_3quf/placeHolder":"","invoiceNumer_7de3f793_a171":"发票号码","GridField/invoiceNumer_7de3f793_a171/editor/invoiceNumer_7de3f793_au9a":"文本","GridField/invoiceNumer_7de3f793_a171/editor/TextBox/invoiceNumer_7de3f793_au9a/placeHolder":"","note_0b71525a_vzq3":"费用说明","GridField/note_0b71525a_vzq3/editor/note_0b71525a_w8dj":"多行文本框","GridField/note_0b71525a_vzq3/editor/MultiTextBox/note_0b71525a_w8dj/placeHolder":"","fxbxdfj-component":"","fxbxdfj-component-layout":"","dataGrid_fxbxdfj":"","DataGrid/dataGrid_fxbxdfj/lineNumberTitle":"","DataGrid/dataGrid_fxbxdfj/OperateEditButton":"编辑","DataGrid/dataGrid_fxbxdfj/OperateDeleteButton":"删除","DataGrid/dataGrid_fxbxdfj/OperateColumn":"操作","fileInfo_FileName_6a3f58ad_4ew4":"附件名称","GridField/fileInfo_FileName_6a3f58ad_4ew4/editor/fileInfo_FileName_6a3f58ad_wp42":"文本","GridField/fileInfo_FileName_6a3f58ad_4ew4/editor/TextBox/fileInfo_FileName_6a3f58ad_wp42/placeHolder":"","fileInfo_FileSize_6a3f58ad_e1mp":"附件大小","GridField/fileInfo_FileSize_6a3f58ad_e1mp/editor/fileInfo_FileSize_6a3f58ad_9xyd":"数值框","GridField/fileInfo_FileSize_6a3f58ad_e1mp/editor/NumberSpinner/fileInfo_FileSize_6a3f58ad_9xyd/placeHolder":"","fileInfo_FileCreateTime_6a3f58ad_t7rs":"附件上传时间","GridField/fileInfo_FileCreateTime_6a3f58ad_t7rs/editor/fileInfo_FileCreateTime_6a3f58ad_axeg":"日期选择","GridField/fileInfo_FileCreateTime_6a3f58ad_t7rs/editor/DateBox/fileInfo_FileCreateTime_6a3f58ad_axeg/placeHolder":"","FYBXD-c5mp-component":"","FYBXD-c5mp-form-section":"","Section/FYBXD-c5mp-form-section/mainTitle":"高级信息","Section/FYBXD-c5mp-form-section/subTitle":"","FYBXD-c5mp-form-layout":"","project_Project_ProjectName_63900e43_q03x":"所属项目","LookupEdit/project_Project_ProjectName_63900e43_q03x/placeHolder":"","LookupEdit/project_Project_ProjectName_63900e43_q03x/dialogTitle":"","auditStatus_a5886f12_rupv":"稽核状态","EnumField/auditStatus_a5886f12_rupv/placeHolder":"","EnumField/auditStatus_a5886f12_rupv/enumData/None":"未稽核","EnumField/auditStatus_a5886f12_rupv/enumData/Passed":"通过","EnumField/auditStatus_a5886f12_rupv/enumData/Reject":"未通过","createDate_2e6b26a0_xsyf":"制单日期","DateBox/createDate_2e6b26a0_xsyf/placeHolder":"","billState_BillState_f7985202_man1":"单据状态","EnumField/billState_BillState_f7985202_man1/placeHolder":"","EnumField/billState_BillState_f7985202_man1/enumData/Billing":"制单","EnumField/billState_BillState_f7985202_man1/enumData/SubmitApproval":"提交审批","EnumField/billState_BillState_f7985202_man1/enumData/Approved":"审批通过","EnumField/billState_BillState_f7985202_man1/enumData/ApprovalNotPassed":"审批不通过","note_efee4f8c_klrk":"报销说明","RichTextBox/note_efee4f8c_klrk/placeHolder":""}};

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
          const versionKey = "fybxdj/" + langCode + ".json";
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
