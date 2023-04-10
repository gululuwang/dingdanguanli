
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
  return new TranslateHttpLoader(http, '/apps/fssp/fssc/web/bo-robxdjchenshjfront/fybxdjmanagement/i18n/', '.json'+ versionSuffix);
}

export let lang = {"zh-CHS":{"note_6d513e12_emt1":"报销说明","root-component":"","root-layout":"","query-scheme-section":"","Section/query-scheme-section/mainTitle":"主标题","Section/query-scheme-section/subTitle":"","query-scheme-1":"默认筛选方案","QueryScheme/query-scheme-1/729c8ec9-b18d-4970-80fa-225efc7e7116":"单据编号","QueryScheme/query-scheme-1/729c8ec9-b18d-4970-80fa-225efc7e7116/placeHolder":"","QueryScheme/query-scheme-1/48d8bb5b-d53e-4d61-8853-6a1c17edbea8":"报销人员","QueryScheme/query-scheme-1/48d8bb5b-d53e-4d61-8853-6a1c17edbea8/placeHolder":"","QueryScheme/query-scheme-1/48d8bb5b-d53e-4d61-8853-6a1c17edbea8/control/help/dialogTitle":"","QueryScheme/query-scheme-1/72adb561-affc-4cfe-91d2-db4e78a09819":"编号","QueryScheme/query-scheme-1/72adb561-affc-4cfe-91d2-db4e78a09819/placeHolder":"","QueryScheme/query-scheme-1/24534726-88fd-4182-a3b0-165637d4d066":"名称","QueryScheme/query-scheme-1/24534726-88fd-4182-a3b0-165637d4d066/placeHolder":"","QueryScheme/query-scheme-1/b980b7f7-efc1-48eb-90bc-f88475935445":"所属部门","QueryScheme/query-scheme-1/b980b7f7-efc1-48eb-90bc-f88475935445/placeHolder":"","QueryScheme/query-scheme-1/cfbb333b-dfac-4ab1-8e61-49c47b83acc1":"编号","QueryScheme/query-scheme-1/cfbb333b-dfac-4ab1-8e61-49c47b83acc1/placeHolder":"","QueryScheme/query-scheme-1/8e551f99-3b7a-4b63-863b-0feb364bd22c":"名称","QueryScheme/query-scheme-1/8e551f99-3b7a-4b63-863b-0feb364bd22c/placeHolder":"","QueryScheme/query-scheme-1/25592d80-9d9a-4f54-bb1a-6a94bee1a6a6":"报帐金额","QueryScheme/query-scheme-1/25592d80-9d9a-4f54-bb1a-6a94bee1a6a6/placeHolder":"","QueryScheme/query-scheme-1/0ac6dd9f-1544-43d8-beb9-0e27d3e78ea4":"报销类型","QueryScheme/query-scheme-1/0ac6dd9f-1544-43d8-beb9-0e27d3e78ea4/placeHolder":"","QueryScheme/query-scheme-1/0ac6dd9f-1544-43d8-beb9-0e27d3e78ea4/control/enumValues/CL":"差旅费","QueryScheme/query-scheme-1/0ac6dd9f-1544-43d8-beb9-0e27d3e78ea4/control/enumValues/SJ":"手机费","QueryScheme/query-scheme-1/0ac6dd9f-1544-43d8-beb9-0e27d3e78ea4/control/enumValues/JT":"交通费","QueryScheme/query-scheme-1/1d6a1018-8aac-431e-87f6-2e84d1c92548":"所属项目","QueryScheme/query-scheme-1/1d6a1018-8aac-431e-87f6-2e84d1c92548/placeHolder":"","QueryScheme/query-scheme-1/6dc017d8-aacf-442a-829e-dab87eefca0c":"项目编号","QueryScheme/query-scheme-1/6dc017d8-aacf-442a-829e-dab87eefca0c/placeHolder":"","QueryScheme/query-scheme-1/efa19a8a-4d09-4eff-aa16-7036571f9dda":"项目名称","QueryScheme/query-scheme-1/efa19a8a-4d09-4eff-aa16-7036571f9dda/placeHolder":"","QueryScheme/query-scheme-1/4516aec1-26a7-478e-b97a-5e78e2475286":"项目经理","QueryScheme/query-scheme-1/4516aec1-26a7-478e-b97a-5e78e2475286/placeHolder":"","QueryScheme/query-scheme-1/d54c23f9-55b6-43f5-9506-fd84687549de":"编号","QueryScheme/query-scheme-1/d54c23f9-55b6-43f5-9506-fd84687549de/placeHolder":"","QueryScheme/query-scheme-1/de11e903-0f33-4cdb-bff6-102ec50e5a97":"名称","QueryScheme/query-scheme-1/de11e903-0f33-4cdb-bff6-102ec50e5a97/placeHolder":"","QueryScheme/query-scheme-1/5aeb26bc-ddd8-41ca-a1f2-73c783ddf89e":"稽核状态","QueryScheme/query-scheme-1/5aeb26bc-ddd8-41ca-a1f2-73c783ddf89e/placeHolder":"","QueryScheme/query-scheme-1/5aeb26bc-ddd8-41ca-a1f2-73c783ddf89e/control/enumValues/None":"未稽核","QueryScheme/query-scheme-1/5aeb26bc-ddd8-41ca-a1f2-73c783ddf89e/control/enumValues/Passed":"通过","QueryScheme/query-scheme-1/5aeb26bc-ddd8-41ca-a1f2-73c783ddf89e/control/enumValues/Reject":"未通过","QueryScheme/query-scheme-1/ac6fab1f-b4ee-48fe-86bd-5b69433281a4":"制单日期","QueryScheme/query-scheme-1/ac6fab1f-b4ee-48fe-86bd-5b69433281a4/placeHolder":"","QueryScheme/query-scheme-1/e77749d1-0101-468f-ae3f-40c76c0f06b0":"单据状态","QueryScheme/query-scheme-1/e77749d1-0101-468f-ae3f-40c76c0f06b0/placeHolder":"","QueryScheme/query-scheme-1/e77749d1-0101-468f-ae3f-40c76c0f06b0/control/enumValues/Billing":"制单","QueryScheme/query-scheme-1/e77749d1-0101-468f-ae3f-40c76c0f06b0/control/enumValues/SubmitApproval":"提交审批","QueryScheme/query-scheme-1/e77749d1-0101-468f-ae3f-40c76c0f06b0/control/enumValues/Approved":"审批通过","QueryScheme/query-scheme-1/e77749d1-0101-468f-ae3f-40c76c0f06b0/control/enumValues/ApprovalNotPassed":"审批不通过","page-header":"","header-nav":"","header-title-container":"","page-header-title":"","page-header-toolbar":"","button-add":"新增","button-edit":"编辑","button-view":"查看","button-delete":"删除","toolBarItem_6575":"稽核通过","toolBarItem_8063":"稽核不通过","button-view-changeLog":"查看业务变更日志","button-print":"打印","page-main":"","data-grid-component-ref":"","data-grid-component":"","data-grid-section":"","Section/data-grid-section/mainTitle":"","Section/data-grid-section/subTitle":"","dataGrid":"","DataGrid/dataGrid/lineNumberTitle":"","DataGrid/dataGrid/OperateEditButton":"编辑","DataGrid/dataGrid/OperateDeleteButton":"删除","DataGrid/dataGrid/OperateColumn":"操作","billType_0ac6dd9f_rsnc":"报销类型","GridField/billType_0ac6dd9f_rsnc/enumData/CL":"差旅费","GridField/billType_0ac6dd9f_rsnc/enumData/SJ":"手机费","GridField/billType_0ac6dd9f_rsnc/enumData/JT":"交通费","employee_Employee_Name_24534726_vdxd":"报销人","code_729c8ec9_ukae":"单据编号","department_Department_name_8e551f99_w82g":"所属部门","totalSum_25592d80_8whb":"报帐金额","billState_BillState_e77749d1_2qzj":"单据状态","GridField/billState_BillState_e77749d1_2qzj/enumData/Billing":"制单","GridField/billState_BillState_e77749d1_2qzj/enumData/SubmitApproval":"提交审批","GridField/billState_BillState_e77749d1_2qzj/enumData/Approved":"审批通过","GridField/billState_BillState_e77749d1_2qzj/enumData/ApprovalNotPassed":"审批不通过","createDate_ac6fab1f_45bs":"制单日期","auditStatus_5aeb26bc_5jnn":"稽核状态","GridField/auditStatus_5aeb26bc_5jnn/enumData/None":"未稽核","GridField/auditStatus_5aeb26bc_5jnn/enumData/Passed":"通过","GridField/auditStatus_5aeb26bc_5jnn/enumData/Reject":"未通过"}};

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
          const versionKey = "fybxdjmanagement/" + langCode + ".json";
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
