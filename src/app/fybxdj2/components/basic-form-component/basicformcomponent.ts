
import { Component, OnInit, Injector, AfterViewInit, ViewChild, HostBinding, TemplateRef, ElementRef, ViewContainerRef, NgModuleFactory, Input, ComponentRef} from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { Form, FrameEvent, FrameEventBus, FrameComponent, FARRIS_DEVKIT_FRAME_PROVIDERS, ViewModel, COMMAND_HANDLERS_TOKEN, FRAME_ID, StateMachine, BindingData, Repository, UIState, NgSubscription, Declaration, EXCEPTION_HANDLER, NAMESPACE } from '@farris/devkit';
import { FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS, ComponentManagerService } from '@farris/command-services';
import { KeybindingService } from '@farris/command-services';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FrmI18nSettingService } from '@gsp-sys/rtf-common';
import { DomSanitizer } from '@angular/platform-browser';
import { FocusInvalidService } from '@farris/command-services';

import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService, FarrisPageDetailComponent } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
import { __decorate, __metadata } from 'tslib';

import { QDP_COMMAND_SERVICE_PROVIDERS } from '@qdp/command-services';
import { ConditionDialogComponent, QueryFrameworkLayoutComponent } from '@qdp/query-framework';
import { QdpViewComponent } from '@qdp/spread';
import { BasicFormViewmodel } from '../../viewmodels/basicformviewmodel';
import { FYBXDRepository } from '../../models/fybxdrepository';
import { LangService } from '../../lang/lang-pipe';

import { BasicFormViewmodelForm } from '../../viewmodels/form/basicformviewmodelform';
import { BasicFormViewmodelUIState } from '../../viewmodels/uistate/basicformviewmodeluistate';

@Component({
    selector: 'app-basicformcomponent',
    templateUrl: './basicformcomponent.html',
    styleUrls: ['./basicformcomponent.css'],
    providers: [
        FARRIS_DEVKIT_FRAME_PROVIDERS,
        FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
        { provide: FRAME_ID, useValue: 'basic-form-component' },
        { provide: BindingData, useClass: BindingData },
        { provide: Repository, useExisting: FYBXDRepository },
        LangService,
        { provide: NAMESPACE, useValue: '' },
    
        QDP_COMMAND_SERVICE_PROVIDERS,
        { provide: ServerSideToken, useClass: BefLookupRestService },
        { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
        { provide: Form, useClass: BasicFormViewmodelForm },
        { provide: UIState, useClass: BasicFormViewmodelUIState },
        { provide: ViewModel, useClass: BasicFormViewmodel },
        { provide: EXCEPTION_HANDLER, useValue: null },
]
})
export class BasicFormComponent extends FrameComponent implements OnInit, AfterViewInit {

    @HostBinding('class')
    cls = 'f-struct-wrapper ';
    public viewModel: BasicFormViewmodel;
    lang: string ="";
    size: any = {};
    enabledLanguageList: any[] = [];
    @ViewChild(ConditionDialogComponent) conditionDialog: ConditionDialogComponent;
    @ViewChild(QdpViewComponent) qdpViewComponent: QdpViewComponent;
    @ViewChild(QueryFrameworkLayoutComponent) queryFrameworkLayoutComponent: QueryFrameworkLayoutComponent;
    constructor(
        private wizardSer: WizardService,
        private keybindingService: KeybindingService,
        private langService: LangService,
        private route: ActivatedRoute,
        private router: Router,
        private rootElement: ElementRef,
        private localizationService: LocalizationService,
        private frmI18nSettingService: FrmI18nSettingService,
        private focusInvalidService: FocusInvalidService,
        private sanitizer: DomSanitizer,
        public injector: Injector
    ) {
        super(injector);
        this.lang = localStorage.getItem('languageCode') || "zh-CHS";
        this.viewModel.verifycationChanged.subscribe((verifyInformations: any) => {
            this.focusInvalidService.focusInvalidInput(verifyInformations, this.rootElement);
        });

        if (this.frmI18nSettingService) {
            const i18nSetting = this.frmI18nSettingService.getSetting();
            if (i18nSetting && i18nSetting.languages && i18nSetting.languages.length > 0) {
                i18nSetting.languages.forEach((item) => {
                    this.enabledLanguageList.push({
                        code: item.code,
                        name: item.name
                    });
                });
            } else {
                console.warn("get current enable languages is null. if this occurs,please ensure the form into the framework.");
                this.enabledLanguageList.push({ "code": "en", "name": "English" });
                this.enabledLanguageList.push({ "code": "zh-CHS", "name": "中文简体" });
            }
        }
    }
    ngOnInit() {
            
        if (this.keybindingService) {
            this.viewModel.keybindingMap.forEach((keyBinding, method) => {
                this.keybindingService.register(keyBinding, () => {
                    return this.viewModel[method]();
                });
            });
        }
        this.onFormLoad(); 
    }

    ngAfterViewInit(): void {
    }

    handleSizeChange(size: any) {
        this.size = size;
    } 

    public onFormLoad() {
    } 
    tabsToolbarStates = new BehaviorSubject({});
    tabsToolbarVisibleStates = new BehaviorSubject({});
    SectionbasicformsectionMainTitle = this.langService.transform('Section/basic-form-section/mainTitle', this.lang, "基本信息");
    SectionbasicformsectionSubTitle = this.langService.transform('Section/basic-form-section/subTitle', this.lang, "");

    totalSum_a71c0bd6_yt9i_PlaceHolder = this.langService.transform('NumericBox/totalSum_a71c0bd6_yt9i/placeHolder', this.lang, "");
    totalSumA71c0bd6Yt9iTextOptions = {
        "type": "number",
        "useThousands": true,
        "precision": 2,
    }
    billType_56c69c6e_nmuwEnumData = [
        {
            "name": this.langService.transform('EnumField/billType_56c69c6e_nmuw/enumData/CL', this.lang, "差旅费"),
            "value": "CL"
        },
        {
            "name": this.langService.transform('EnumField/billType_56c69c6e_nmuw/enumData/SJ', this.lang, "手机费"),
            "value": "SJ"
        },
        {
            "name": this.langService.transform('EnumField/billType_56c69c6e_nmuw/enumData/JT', this.lang, "交通费"),
            "value": "JT"
        }
    ];
    billType_56c69c6e_nmuw_PlaceHolder = this.langService.transform('EnumField/billType_56c69c6e_nmuw/placeHolder', this.lang, "");
    billState_BillState_e46f4304_sb8oEnumData = [
        {
            "name": this.langService.transform('EnumField/billState_BillState_e46f4304_sb8o/enumData/Billing', this.lang, "制单"),
            "value": "Billing"
        },
        {
            "name": this.langService.transform('EnumField/billState_BillState_e46f4304_sb8o/enumData/SubmitApproval', this.lang, "提交审批"),
            "value": "SubmitApproval"
        },
        {
            "name": this.langService.transform('EnumField/billState_BillState_e46f4304_sb8o/enumData/Approved', this.lang, "审批通过"),
            "value": "Approved"
        },
        {
            "name": this.langService.transform('EnumField/billState_BillState_e46f4304_sb8o/enumData/ApprovalNotPassed', this.lang, "审批不通过"),
            "value": "ApprovalNotPassed"
        }
    ];
    billState_BillState_e46f4304_sb8o_PlaceHolder = this.langService.transform('EnumField/billState_BillState_e46f4304_sb8o/placeHolder', this.lang, "");
    code_c11e2af8_37wx_PlaceHolder = this.langService.transform('TextBox/code_c11e2af8_37wx/placeHolder', this.lang, "");
    employee_Employee_Name_96dfd988_jcua_PlaceHolder = this.langService.transform('TextBox/employee_Employee_Name_96dfd988_jcua/placeHolder', this.lang, "");
    department_Department_name_6eada154_skbb_PlaceHolder = this.langService.transform('TextBox/department_Department_name_6eada154_skbb/placeHolder', this.lang, "");
    subject_3ad7c466_e0zi_PlaceHolder = this.langService.transform('TextBox/subject_3ad7c466_e0zi/placeHolder', this.lang, "");
}