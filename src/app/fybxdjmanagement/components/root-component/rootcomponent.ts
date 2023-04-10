
import { Component, OnInit, Injector, AfterViewInit, OnDestroy, ViewChild, HostBinding, TemplateRef, ElementRef, ViewContainerRef, NgModuleFactory, Input, ComponentRef} from '@angular/core';
import { BehaviorSubject, of, Subject } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import { Form, FrameEvent, FrameEventBus, FrameComponent, FARRIS_DEVKIT_FRAME_PROVIDERS, ViewModel, COMMAND_HANDLERS_TOKEN, FRAME_ID, StateMachine, BindingData, Repository, UIState, NgSubscription, Declaration, EXCEPTION_HANDLER, NAMESPACE } from '@farris/devkit';
import { FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS, ComponentManagerService } from '@farris/command-services';
import { KeybindingService } from '@farris/command-services';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FrmI18nSettingService } from '@gsp-sys/rtf-common';
import { DomSanitizer } from '@angular/platform-browser';
import { ExceptionHandler } from '@farris/command-services';
import { FrameworkSessionService, UriService } from '@farris/bef';
import { FrameworkService } from '@gsp-sys/rtf-common';
import { ApplicationParamService } from '@farris/command-services';
import { EventDeclaration } from '../../events/event';
import { FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS, FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS} from '@farris/devkit';
import { WFSubmiteService } from '@gsp-wf/rtdevkit';
import { CloudprintService } from '@gsp-svc/cloudprint';
import { WFFlowchartService } from '@gsp-wf/ui-flowchart';

import { TranslateToken, FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS } from '@farris/devkit';
import { VerifyDetailService } from '@farris/ui-verify-detail';
import { AppContext, FORM_ID,  PARAM_TYPE_TRANSFORM_TOKEN } from '@farris/devkit';
import { BE_SESSION_HANDLING_STRATEGY_TOKEN } from '@farris/bef';
import { BACK_END_MESSAGE_HANDLER_TOKEN } from '@farris/devkit';
import { BackEndMessageHandler } from '@farris/command-services';
import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService, FarrisPageDetailComponent } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
import { __decorate, __metadata } from 'tslib';

import { QDP_COMMAND_SERVICE_PROVIDERS } from '@qdp/command-services';
import { ConditionDialogComponent, QueryFrameworkLayoutComponent } from '@qdp/query-framework';
import { QdpViewComponent } from '@qdp/spread';
import { RootViewmodel } from '../../viewmodels/rootviewmodel';
import { FYBXDRepository } from '../../models/fybxdrepository';
import { LangService } from '../../lang/lang-pipe';

import { RootViewmodelForm } from '../../viewmodels/form/rootviewmodelform';
import { RootViewmodelStateMachine } from '../../viewmodels/statemachine/rootviewmodelstatemachine';
import { RootViewmodelUIState } from '../../viewmodels/uistate/rootviewmodeluistate';
import { Load1Handler } from '../../viewmodels/handlers/load1handler';
import { Search1Handler } from '../../viewmodels/handlers/search1handler';
import { RemoveRows1Handler } from '../../viewmodels/handlers/removerows1handler';
import { Add1Handler } from '../../viewmodels/handlers/add1handler';
import { View1Handler } from '../../viewmodels/handlers/view1handler';
import { Edit1Handler } from '../../viewmodels/handlers/edit1handler';
import { Remove1Handler } from '../../viewmodels/handlers/remove1handler';
import { Filter1Handler } from '../../viewmodels/handlers/filter1handler';
import { FYBXDProxy } from '../../models/fybxdproxy';

@Component({
    selector: 'app-rootcomponent',
    templateUrl: './rootcomponent.html',
    styleUrls: ['./rootcomponent.css'],
    providers: [
        FARRIS_DEVKIT_FRAME_PROVIDERS,
        FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
        { provide: FRAME_ID, useValue: 'root-component' },
        { provide: BindingData, useClass: BindingData },
        { provide: Repository, useExisting: FYBXDRepository },
        LangService,
        { provide: NAMESPACE, useValue: '' },
    
        QDP_COMMAND_SERVICE_PROVIDERS,
        { provide: ServerSideToken, useClass: BefLookupRestService },
        { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
        { provide: Form, useClass: RootViewmodelForm },
        { provide: StateMachine, useClass: RootViewmodelStateMachine },
        { provide: UIState, useClass: RootViewmodelUIState },
        FrameworkSessionService,
        UriService,
        FYBXDProxy,
        FYBXDRepository,
        { provide: ViewModel, useClass: RootViewmodel },
        { provide: Declaration, useClass: EventDeclaration },
        { provide: TranslateToken, useExisting: LangService },
        VerifyDetailService,
        { provide: WFSubmiteService, useClass: WFSubmiteService },
        { provide: CloudprintService, useClass: CloudprintService },
        { provide: WFFlowchartService, useClass: WFFlowchartService },
        FARRIS_DEVKIT_EXPRESSION_LISTENER_PROVIDERS,
        FARRIS_DEVKIT_EXPRESSION_EFFECTOR_PROVIDERS,
        FARRIS_DEVKIT_EXPRESSION_ROOT_FRAME_PROVIDERS,

        AppContext,
        ComponentManagerService,
        { provide: PARAM_TYPE_TRANSFORM_TOKEN, useValue: false },
        { provide: FORM_ID, useValue: "a013afaa-ccb8-49a9-9654-9b01c822fc25" },
        { provide: BE_SESSION_HANDLING_STRATEGY_TOKEN, useValue: "SeparatedSession" },
        { provide: EXCEPTION_HANDLER, useClass: ExceptionHandler },
        { provide: BACK_END_MESSAGE_HANDLER_TOKEN, useClass: BackEndMessageHandler },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Load1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Search1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: RemoveRows1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Add1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: View1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Edit1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Remove1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Filter1Handler, multi: true },
]
})
export class RootComponent extends FrameComponent implements OnInit, AfterViewInit, OnDestroy {

    @HostBinding('class')
    cls = 'f-page-root  ';
    public viewModel: RootViewmodel;
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
        private frameworkService: FrameworkService,
        private applicationParamsService: ApplicationParamService,
        private verifyService: VerifyDetailService,
        private stateMachine: StateMachine,
        private sanitizer: DomSanitizer,
        public injector: Injector
    ) {
        super(injector);
        this.lang = localStorage.getItem('languageCode') || "zh-CHS";
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
        this.viewModel.verifycationChanged.subscribe((verifyInformations) => {
            if (verifyInformations.length) {
                this.verifyService.createVerify({
                    'parent': this.rootElement,
                    'verifyList': verifyInformations,
                    'showType': 'all'
                });
            } else {
                this.verifyService.clear();
            }
        });
        this.stateMachine.stateChange.subscribe(() => {
            const pageHeaderToolbarToolbarItemsstates = {
                'button-add': !this.viewModel.stateMachine['canAdd'],
                'button-edit': !this.viewModel.stateMachine['canEdit'],
                'button-view': !this.viewModel.stateMachine['canView'],
                'button-delete': !this.viewModel.stateMachine['canRemove'],
                'toolBarItem_6575': !this.viewModel.stateMachine['canAudit'],
                'toolBarItem_8063': !this.viewModel.stateMachine['canAudit'],
                'button-view-changeLog': false,
                'button-print': false,
            }
        this.pageHeaderToolbarToolbarItemsStates.next(pageHeaderToolbarToolbarItemsstates);
        });
        
        this.stateMachine.stateChange.subscribe(() => {
            
            const pageHeaderToolbarToolbarItemsvisibleStates = {
            'button-add': true,
            'button-edit': true,
            'button-view': true,
            'button-delete': true,
            'toolBarItem_6575': true,
            'toolBarItem_8063': true,
            'button-view-changeLog': true,
            'button-print': true,
        }
            this.pageHeaderToolbarToolbarItemsVisibleStates.next(pageHeaderToolbarToolbarItemsvisibleStates);
    });

        this.pageHeaderToolbarToolbarItems.forEach((toolbarItem) => {
            
            const transformText = this.langService.transform(toolbarItem.resourceId, this.lang, toolbarItem.text);
            if (transformText) {
                toolbarItem.text = transformText;
            }
        });
        this.applicationParamsService.parseParams(this.route, this.frameworkService, this.viewModel, () => {
            this.onFormLoad();
        })
                
    }

    ngAfterViewInit(): void {
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
        
        this.frameworkService = null;
        this.applicationParamsService = null;
        this.verifyService.clear();
        this.verifyService = null;
        this.stateMachine = null;
        this.sanitizer = null;
        this.injector = null;
        this.enabledLanguageList = [];

    }

    handleSizeChange(size: any) {
        this.size = size;
    } 

    public onFormLoad() {
        this.viewModel.Filter1(); 
    } 
    pageHeaderToolbarToolbarItems = [{
        "id": "button-add",
        "text": this.langService.transform('button-add', this.lang, "新增"),
        "resourceId": "button-add",
        "isDP": false,
        "class": "btn-primary",
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "button-edit",
        "text": this.langService.transform('button-edit', this.lang, "编辑"),
        "resourceId": "button-edit",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "button-view",
        "text": this.langService.transform('button-view', this.lang, "查看"),
        "resourceId": "button-view",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "button-delete",
        "text": this.langService.transform('button-delete', this.lang, "删除"),
        "resourceId": "button-delete",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "toolBarItem_6575",
        "text": this.langService.transform('toolBarItem_6575', this.lang, "稽核通过"),
        "resourceId": "toolBarItem_6575",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "toolBarItem_8063",
        "text": this.langService.transform('toolBarItem_8063', this.lang, "稽核不通过"),
        "resourceId": "toolBarItem_8063",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "button-view-changeLog",
        "text": this.langService.transform('button-view-changeLog', this.lang, "查看业务变更日志"),
        "resourceId": "button-view-changeLog",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "button-print",
        "text": this.langService.transform('button-print', this.lang, "打印"),
        "resourceId": "button-print",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        }
    ]; 

    pageHeaderToolbarToolbarItemsStates = new BehaviorSubject({});
    pageHeaderToolbarToolbarItemsVisibleStates = new BehaviorSubject({});

    pageHeaderToolbarClickHandler (args) {
        
        switch (args.id) {

            case 'button-add': 
                this.viewModel.Add1(args);
                break;
            case 'button-edit': 
                this.viewModel.Edit1(args);
                break;
            case 'button-view': 
                this.viewModel.View1(args);
                break;
            case 'button-delete': 
                this.viewModel.Remove1(args);
                break;
            case 'toolBarItem_6575': 
                this.viewModel.dataGridComponentViewmodel.datagridcomponentviewmodelAudit1(args);
                break;
            case 'toolBarItem_8063': 
                this.viewModel.dataGridComponentViewmodel.datagridcomponentviewmodelAudit2(args);
                break;
            case 'button-view-changeLog': 
                this.viewModel.dataGridComponentViewmodel.datagridcomponentviewmodelviewChangeLog1(args);
                break;
            case 'button-print': 
                this.viewModel.dataGridComponentViewmodel.datagridcomponentviewmodelprintByIds1(args);
                break;
        }
    }
    tabsToolbarStates = new BehaviorSubject({});
    tabsToolbarVisibleStates = new BehaviorSubject({});
    sectionsToolbarStates = new BehaviorSubject({});
    sectionsToolbarVisibleStates = new BehaviorSubject({});
    querySchemeSection = {
        position: 'inHead',
        contents: [
        ]
    }
    SectionqueryschemesectionMainTitle = this.langService.transform('Section/query-scheme-section/mainTitle', this.lang, "主标题");
    SectionqueryschemesectionSubTitle = this.langService.transform('Section/query-scheme-section/subTitle', this.lang, "");
    QuerySolutionqueryscheme1 = this.langService.transform('query-scheme-1', this.lang, "默认筛选方案"); 
    fieldConfigsqueryscheme1 = [
        {
            "id": "729c8ec9-b18d-4970-80fa-225efc7e7116",
            "labelCode": "Code",
            "code": "Code",
            "name": this.langService.transform('QueryScheme/query-scheme-1/729c8ec9-b18d-4970-80fa-225efc7e7116', this.lang, "单据编号"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/729c8ec9-b18d-4970-80fa-225efc7e7116/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "48d8bb5b-d53e-4d61-8853-6a1c17edbea8",
            "labelCode": "Employee.Employee",
            "code": "Employee",
            "name": this.langService.transform('QueryScheme/query-scheme-1/48d8bb5b-d53e-4d61-8853-6a1c17edbea8', this.lang, "报销人员"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/48d8bb5b-d53e-4d61-8853-6a1c17edbea8/placeHolder', this.lang, ""),
            "control": {
                "controltype": "help",
                "require": false,
                "uri": "FYBXD.employee",
                "textField": "name",
                "valueField": "id",
                "idField": "id",
                "helpId": "915a0b20-975a-4df1-8cfd-888c3dda0009",
                "displayType": "List",
                "loadTreeDataType": 'default',
                "enableFullTree": false,
                "editable": false,
                "dialogTitle": this.langService.transform('QueryScheme/query-scheme-1/48d8bb5b-d53e-4d61-8853-6a1c17edbea8/control/help/dialogTitle', this.lang, ""),
                "displayFields": "code,name",
                "singleSelect": true,
                "enableCascade": false,
                "pageSize": 20,
                "pageList": "10,20,30,50,100",
                "nosearch": false,
                "expandLevel": -1,
                "context": {
                    "enableExtendLoadMethod": true
                }
            }
        },
        {
            "id": "72adb561-affc-4cfe-91d2-db4e78a09819",
            "labelCode": "Employee.Employee_Code",
            "code": "Code",
            "name": this.langService.transform('QueryScheme/query-scheme-1/72adb561-affc-4cfe-91d2-db4e78a09819', this.lang, "编号"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/72adb561-affc-4cfe-91d2-db4e78a09819/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "24534726-88fd-4182-a3b0-165637d4d066",
            "labelCode": "Employee.Employee_Name",
            "code": "Name",
            "name": this.langService.transform('QueryScheme/query-scheme-1/24534726-88fd-4182-a3b0-165637d4d066', this.lang, "名称"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/24534726-88fd-4182-a3b0-165637d4d066/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "b980b7f7-efc1-48eb-90bc-f88475935445",
            "labelCode": "Department.Department",
            "code": "Department",
            "name": this.langService.transform('QueryScheme/query-scheme-1/b980b7f7-efc1-48eb-90bc-f88475935445', this.lang, "所属部门"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/b980b7f7-efc1-48eb-90bc-f88475935445/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "cfbb333b-dfac-4ab1-8e61-49c47b83acc1",
            "labelCode": "Department.Department_code",
            "code": "code",
            "name": this.langService.transform('QueryScheme/query-scheme-1/cfbb333b-dfac-4ab1-8e61-49c47b83acc1', this.lang, "编号"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/cfbb333b-dfac-4ab1-8e61-49c47b83acc1/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "8e551f99-3b7a-4b63-863b-0feb364bd22c",
            "labelCode": "Department.Department_name",
            "code": "name",
            "name": this.langService.transform('QueryScheme/query-scheme-1/8e551f99-3b7a-4b63-863b-0feb364bd22c', this.lang, "名称"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/8e551f99-3b7a-4b63-863b-0feb364bd22c/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "25592d80-9d9a-4f54-bb1a-6a94bee1a6a6",
            "labelCode": "TotalSum",
            "code": "TotalSum",
            "name": this.langService.transform('QueryScheme/query-scheme-1/25592d80-9d9a-4f54-bb1a-6a94bee1a6a6', this.lang, "报帐金额"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/25592d80-9d9a-4f54-bb1a-6a94bee1a6a6/placeHolder', this.lang, ""),
            "control": {"controltype":"number","require":false,"className":"","textAlign":"left","precision":2,"isBigNumber":false}
        },
        {
            "id": "0ac6dd9f-1544-43d8-beb9-0e27d3e78ea4",
            "labelCode": "BillType",
            "code": "BillType",
            "name": this.langService.transform('QueryScheme/query-scheme-1/0ac6dd9f-1544-43d8-beb9-0e27d3e78ea4', this.lang, "报销类型"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/0ac6dd9f-1544-43d8-beb9-0e27d3e78ea4/placeHolder', this.lang, ""),
            "control": {
                "controltype": "dropdown",
                "require": false,
                "valueType": "1",
                "multiSelect": false,
                "enumValues": [
                    {
                        "value": "CL",
                        "name": this.langService.transform('QueryScheme/query-scheme-1/0ac6dd9f-1544-43d8-beb9-0e27d3e78ea4/control/enumValues/CL', this.lang, "差旅费")
                    },
                    {
                        "value": "SJ",
                        "name": this.langService.transform('QueryScheme/query-scheme-1/0ac6dd9f-1544-43d8-beb9-0e27d3e78ea4/control/enumValues/SJ', this.lang, "手机费")
                    },
                    {
                        "value": "JT",
                        "name": this.langService.transform('QueryScheme/query-scheme-1/0ac6dd9f-1544-43d8-beb9-0e27d3e78ea4/control/enumValues/JT', this.lang, "交通费")
                    }]
            }
        },
        {
            "id": "1d6a1018-8aac-431e-87f6-2e84d1c92548",
            "labelCode": "Project.Project",
            "code": "Project",
            "name": this.langService.transform('QueryScheme/query-scheme-1/1d6a1018-8aac-431e-87f6-2e84d1c92548', this.lang, "所属项目"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/1d6a1018-8aac-431e-87f6-2e84d1c92548/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "6dc017d8-aacf-442a-829e-dab87eefca0c",
            "labelCode": "Project.Project_ProjectCode",
            "code": "ProjectCode",
            "name": this.langService.transform('QueryScheme/query-scheme-1/6dc017d8-aacf-442a-829e-dab87eefca0c', this.lang, "项目编号"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/6dc017d8-aacf-442a-829e-dab87eefca0c/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "efa19a8a-4d09-4eff-aa16-7036571f9dda",
            "labelCode": "Project.Project_ProjectName",
            "code": "ProjectName",
            "name": this.langService.transform('QueryScheme/query-scheme-1/efa19a8a-4d09-4eff-aa16-7036571f9dda', this.lang, "项目名称"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/efa19a8a-4d09-4eff-aa16-7036571f9dda/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "4516aec1-26a7-478e-b97a-5e78e2475286",
            "labelCode": "ProjectManager.ProjectManager",
            "code": "ProjectManager",
            "name": this.langService.transform('QueryScheme/query-scheme-1/4516aec1-26a7-478e-b97a-5e78e2475286', this.lang, "项目经理"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/4516aec1-26a7-478e-b97a-5e78e2475286/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "d54c23f9-55b6-43f5-9506-fd84687549de",
            "labelCode": "ProjectManager.ProjectManager_Code",
            "code": "Code",
            "name": this.langService.transform('QueryScheme/query-scheme-1/d54c23f9-55b6-43f5-9506-fd84687549de', this.lang, "编号"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/d54c23f9-55b6-43f5-9506-fd84687549de/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "de11e903-0f33-4cdb-bff6-102ec50e5a97",
            "labelCode": "ProjectManager.ProjectManager_Name",
            "code": "Name",
            "name": this.langService.transform('QueryScheme/query-scheme-1/de11e903-0f33-4cdb-bff6-102ec50e5a97', this.lang, "名称"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/de11e903-0f33-4cdb-bff6-102ec50e5a97/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "5aeb26bc-ddd8-41ca-a1f2-73c783ddf89e",
            "labelCode": "AuditStatus",
            "code": "AuditStatus",
            "name": this.langService.transform('QueryScheme/query-scheme-1/5aeb26bc-ddd8-41ca-a1f2-73c783ddf89e', this.lang, "稽核状态"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/5aeb26bc-ddd8-41ca-a1f2-73c783ddf89e/placeHolder', this.lang, ""),
            "control": {
                "controltype": "dropdown",
                "require": false,
                "valueType": "1",
                "multiSelect": false,
                "enumValues": [
                    {
                        "value": "None",
                        "name": this.langService.transform('QueryScheme/query-scheme-1/5aeb26bc-ddd8-41ca-a1f2-73c783ddf89e/control/enumValues/None', this.lang, "未稽核")
                    },
                    {
                        "value": "Passed",
                        "name": this.langService.transform('QueryScheme/query-scheme-1/5aeb26bc-ddd8-41ca-a1f2-73c783ddf89e/control/enumValues/Passed', this.lang, "通过")
                    },
                    {
                        "value": "Reject",
                        "name": this.langService.transform('QueryScheme/query-scheme-1/5aeb26bc-ddd8-41ca-a1f2-73c783ddf89e/control/enumValues/Reject', this.lang, "未通过")
                    }]
            }
        },
        {
            "id": "ac6fab1f-b4ee-48fe-86bd-5b69433281a4",
            "labelCode": "CreateDate",
            "code": "CreateDate",
            "name": this.langService.transform('QueryScheme/query-scheme-1/ac6fab1f-b4ee-48fe-86bd-5b69433281a4', this.lang, "制单日期"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/ac6fab1f-b4ee-48fe-86bd-5b69433281a4/placeHolder', this.lang, ""),
            "control": {"controltype":"date","require":false,"format":"yyyy-MM-dd","className":"","weekSelect":false,"returnFormat":"yyyy-MM-dd"}
        },
        {
            "id": "e77749d1-0101-468f-ae3f-40c76c0f06b0",
            "labelCode": "BillState.BillState",
            "code": "BillState",
            "name": this.langService.transform('QueryScheme/query-scheme-1/e77749d1-0101-468f-ae3f-40c76c0f06b0', this.lang, "单据状态"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/e77749d1-0101-468f-ae3f-40c76c0f06b0/placeHolder', this.lang, ""),
            "control": {
                "controltype": "dropdown",
                "require": false,
                "valueType": "1",
                "multiSelect": false,
                "enumValues": [
                    {
                        "value": "Billing",
                        "name": this.langService.transform('QueryScheme/query-scheme-1/e77749d1-0101-468f-ae3f-40c76c0f06b0/control/enumValues/Billing', this.lang, "制单")
                    },
                    {
                        "value": "SubmitApproval",
                        "name": this.langService.transform('QueryScheme/query-scheme-1/e77749d1-0101-468f-ae3f-40c76c0f06b0/control/enumValues/SubmitApproval', this.lang, "提交审批")
                    },
                    {
                        "value": "Approved",
                        "name": this.langService.transform('QueryScheme/query-scheme-1/e77749d1-0101-468f-ae3f-40c76c0f06b0/control/enumValues/Approved', this.lang, "审批通过")
                    },
                    {
                        "value": "ApprovalNotPassed",
                        "name": this.langService.transform('QueryScheme/query-scheme-1/e77749d1-0101-468f-ae3f-40c76c0f06b0/control/enumValues/ApprovalNotPassed', this.lang, "审批不通过")
                    }]
            }
        }]
    presetFieldConfigsqueryscheme1 = [
        {
            "id": "48d8bb5b-d53e-4d61-8853-6a1c17edbea8",
            "labelCode": "Employee.Employee",
            "code": "Employee",
            "name": this.langService.transform('QueryScheme/query-scheme-1/48d8bb5b-d53e-4d61-8853-6a1c17edbea8', this.lang, "报销人员"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/48d8bb5b-d53e-4d61-8853-6a1c17edbea8/placeHolder', this.lang, ""),
            "control": {
                "controltype": "help",
                "require": false,
                "uri": "FYBXD.employee",
                "textField": "name",
                "valueField": "id",
                "idField": "id",
                "helpId": "915a0b20-975a-4df1-8cfd-888c3dda0009",
                "displayType": "List",
                "loadTreeDataType": 'default',
                "enableFullTree": false,
                "editable": false,
                "dialogTitle": this.langService.transform('QueryScheme/query-scheme-1/48d8bb5b-d53e-4d61-8853-6a1c17edbea8/control/help/dialogTitle', this.lang, ""),
                "displayFields": "code,name",
                "singleSelect": true,
                "enableCascade": false,
                "pageSize": 20,
                "pageList": "10,20,30,50,100",
                "nosearch": false,
                "expandLevel": -1,
                "context": {
                    "enableExtendLoadMethod": true
                }
            }
        },
        {
            "id": "729c8ec9-b18d-4970-80fa-225efc7e7116",
            "labelCode": "Code",
            "code": "Code",
            "name": this.langService.transform('QueryScheme/query-scheme-1/729c8ec9-b18d-4970-80fa-225efc7e7116', this.lang, "单据编号"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/729c8ec9-b18d-4970-80fa-225efc7e7116/placeHolder', this.lang, ""),
            "control": {"controltype":"text","require":false,"className":""}
        },
        {
            "id": "ac6fab1f-b4ee-48fe-86bd-5b69433281a4",
            "labelCode": "CreateDate",
            "code": "CreateDate",
            "name": this.langService.transform('QueryScheme/query-scheme-1/ac6fab1f-b4ee-48fe-86bd-5b69433281a4', this.lang, "制单日期"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/ac6fab1f-b4ee-48fe-86bd-5b69433281a4/placeHolder', this.lang, ""),
            "control": {"controltype":"date","require":false,"format":"yyyy-MM-dd","className":"","weekSelect":false,"returnFormat":"yyyy-MM-dd"}
        },
        {
            "id": "e77749d1-0101-468f-ae3f-40c76c0f06b0",
            "labelCode": "BillState.BillState",
            "code": "BillState",
            "name": this.langService.transform('QueryScheme/query-scheme-1/e77749d1-0101-468f-ae3f-40c76c0f06b0', this.lang, "单据状态"),
            "placeHolder": this.langService.transform('QueryScheme/query-scheme-1/e77749d1-0101-468f-ae3f-40c76c0f06b0/placeHolder', this.lang, ""),
            "control": {
                "controltype": "dropdown",
                "require": false,
                "valueType": "1",
                "multiSelect": false,
                "enumValues": [
                    {
                        "value": "Billing",
                        "name": this.langService.transform('QueryScheme/query-scheme-1/e77749d1-0101-468f-ae3f-40c76c0f06b0/control/enumValues/Billing', this.lang, "制单")
                    },
                    {
                        "value": "SubmitApproval",
                        "name": this.langService.transform('QueryScheme/query-scheme-1/e77749d1-0101-468f-ae3f-40c76c0f06b0/control/enumValues/SubmitApproval', this.lang, "提交审批")
                    },
                    {
                        "value": "Approved",
                        "name": this.langService.transform('QueryScheme/query-scheme-1/e77749d1-0101-468f-ae3f-40c76c0f06b0/control/enumValues/Approved', this.lang, "审批通过")
                    },
                    {
                        "value": "ApprovalNotPassed",
                        "name": this.langService.transform('QueryScheme/query-scheme-1/e77749d1-0101-468f-ae3f-40c76c0f06b0/control/enumValues/ApprovalNotPassed', this.lang, "审批不通过")
                    }]
            }
        }]
                
                
}