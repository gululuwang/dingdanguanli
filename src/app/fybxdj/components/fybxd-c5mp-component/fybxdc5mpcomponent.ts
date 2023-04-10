
import { Component, OnInit, Injector, AfterViewInit, OnDestroy, ViewChild, HostBinding, TemplateRef, ElementRef, ViewContainerRef, NgModuleFactory, Input, ComponentRef} from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { Form, FrameEvent, FrameEventBus, FrameComponent, FARRIS_DEVKIT_FRAME_PROVIDERS, ViewModel, COMMAND_HANDLERS_TOKEN, FRAME_ID, StateMachine, BindingData, Repository, UIState, NgSubscription, Declaration, EXCEPTION_HANDLER, NAMESPACE } from '@farris/devkit';
import { FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS, ComponentManagerService } from '@farris/command-services';
import { KeybindingService } from '@farris/command-services';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FrmI18nSettingService } from '@gsp-sys/rtf-common';
import { DomSanitizer } from '@angular/platform-browser';
import { FocusInvalidService } from '@farris/command-services';

import { LookupGridComponent } from '@farris/ui-lookup';

import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService, FarrisPageDetailComponent } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
import { __decorate, __metadata } from 'tslib';

import { QDP_COMMAND_SERVICE_PROVIDERS } from '@qdp/command-services';
import { ConditionDialogComponent, QueryFrameworkLayoutComponent } from '@qdp/query-framework';
import { QdpViewComponent } from '@qdp/spread';
import { FYBXDC5mpViewmodel } from '../../viewmodels/fybxdc5mpviewmodel';
import { FYBXDRepository } from '../../models/fybxdrepository';
import { LangService } from '../../lang/lang-pipe';

import { FYBXDC5mpViewmodelForm } from '../../viewmodels/form/fybxdc5mpviewmodelform';
import { FYBXDC5mpViewmodelUIState } from '../../viewmodels/uistate/fybxdc5mpviewmodeluistate';

@Component({
    selector: 'app-fybxdc5mpcomponent',
    templateUrl: './fybxdc5mpcomponent.html',
    styleUrls: ['./fybxdc5mpcomponent.css'],
    providers: [
        FARRIS_DEVKIT_FRAME_PROVIDERS,
        FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
        { provide: FRAME_ID, useValue: 'FYBXD-c5mp-component' },
        { provide: BindingData, useClass: BindingData },
        { provide: Repository, useExisting: FYBXDRepository },
        LangService,
        { provide: NAMESPACE, useValue: '' },
    
        QDP_COMMAND_SERVICE_PROVIDERS,
        { provide: ServerSideToken, useClass: BefLookupRestService },
        { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
        { provide: Form, useClass: FYBXDC5mpViewmodelForm },
        { provide: UIState, useClass: FYBXDC5mpViewmodelUIState },
        { provide: ViewModel, useClass: FYBXDC5mpViewmodel },
        { provide: EXCEPTION_HANDLER, useValue: null },
]
})
export class FYBXDC5mpComponent extends FrameComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('project_Project_ProjectName_63900e43_q03x')
    project_Project_ProjectName_63900e43_q03x: LookupGridComponent;
            

    @HostBinding('class')
    cls = 'f-struct-wrapper ';
    public viewModel: FYBXDC5mpViewmodel;
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
        private componentManagerService: ComponentManagerService,
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
        this.componentManagerService.appendControl('project_Project_ProjectName_63900e43_q03x', this.project_Project_ProjectName_63900e43_q03x);
    }

    ngOnDestroy(): void {
        // 增加表单的自我销毁
        this.context.dispose && this.context.dispose();
        this.viewModel = null;
        this.context = null;
        this.subscription = null;
        this.declaration = null;
        this.wizardSer = null;
        this.keybindingService = null;
        this.langService = null;
        this.route = null;
        this.router = null;
        this.rootElement = null;
        this.localizationService = null;
        this.frmI18nSettingService = null;
        
        this.focusInvalidService = null;
        this.componentManagerService.clear();
        this.componentManagerService = null;
        this.sanitizer = null;
        this.injector = null;
        this.enabledLanguageList = [];

    }

    handleSizeChange(size: any) {
        this.size = size;
    } 

    public onFormLoad() {
    } 
    tabsToolbarStates = new BehaviorSubject({});
    tabsToolbarVisibleStates = new BehaviorSubject({});
    SectionFYBXDc5mpformsectionMainTitle = this.langService.transform('Section/FYBXD-c5mp-form-section/mainTitle', this.lang, "高级信息");
    SectionFYBXDc5mpformsectionSubTitle = this.langService.transform('Section/FYBXD-c5mp-form-section/subTitle', this.lang, "");
    LookupEditprojectProjectProjectName63900e43q03xDialogTitle = this.langService.transform('LookupEdit/project_Project_ProjectName_63900e43_q03x/dialogTitle', this.lang, "");
    project_Project_ProjectName_63900e43_q03x_PlaceHolder = this.langService.transform('LookupEdit/project_Project_ProjectName_63900e43_q03x/placeHolder', this.lang, "");
    createDate_2e6b26a0_xsyf_PlaceHolder = this.langService.transform('DateBox/createDate_2e6b26a0_xsyf/placeHolder', this.lang, "");
    auditStatus_a5886f12_rupvEnumData = [
        {
            "name": this.langService.transform('EnumField/auditStatus_a5886f12_rupv/enumData/None', this.lang, "未稽核"),
            "value": "None"
        },
        {
            "name": this.langService.transform('EnumField/auditStatus_a5886f12_rupv/enumData/Passed', this.lang, "通过"),
            "value": "Passed"
        },
        {
            "name": this.langService.transform('EnumField/auditStatus_a5886f12_rupv/enumData/Reject', this.lang, "未通过"),
            "value": "Reject"
        }
    ];
    auditStatus_a5886f12_rupv_PlaceHolder = this.langService.transform('EnumField/auditStatus_a5886f12_rupv/placeHolder', this.lang, "");
    billState_BillState_f7985202_man1EnumData = [
        {
            "name": this.langService.transform('EnumField/billState_BillState_f7985202_man1/enumData/Billing', this.lang, "制单"),
            "value": "Billing"
        },
        {
            "name": this.langService.transform('EnumField/billState_BillState_f7985202_man1/enumData/SubmitApproval', this.lang, "提交审批"),
            "value": "SubmitApproval"
        },
        {
            "name": this.langService.transform('EnumField/billState_BillState_f7985202_man1/enumData/Approved', this.lang, "审批通过"),
            "value": "Approved"
        },
        {
            "name": this.langService.transform('EnumField/billState_BillState_f7985202_man1/enumData/ApprovalNotPassed', this.lang, "审批不通过"),
            "value": "ApprovalNotPassed"
        }
    ];
    billState_BillState_f7985202_man1_PlaceHolder = this.langService.transform('EnumField/billState_BillState_f7985202_man1/placeHolder', this.lang, "");
}