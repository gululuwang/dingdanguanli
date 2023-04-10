
import { Component, OnInit, Injector, AfterViewInit, ViewChild, HostBinding, TemplateRef, ElementRef, ViewContainerRef, NgModuleFactory, Input, ComponentRef} from '@angular/core';
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
import { LoadAndAdd1Handler } from '../../viewmodels/handlers/loadandadd1handler';
import { LoadAndView1Handler } from '../../viewmodels/handlers/loadandview1handler';
import { LoadAndEdit1Handler } from '../../viewmodels/handlers/loadandedit1handler';
import { Add1Handler } from '../../viewmodels/handlers/add1handler';
import { Edit1Handler } from '../../viewmodels/handlers/edit1handler';
import { Save1Handler } from '../../viewmodels/handlers/save1handler';
import { Cancel1Handler } from '../../viewmodels/handlers/cancel1handler';
import { ChangeItem1Handler } from '../../viewmodels/handlers/changeitem1handler';
import { ChangeItem2Handler } from '../../viewmodels/handlers/changeitem2handler';
import { submitWithBizDefKey1Handler } from '../../viewmodels/handlers/submitwithbizdefkey1handler';
import { cancelSubmitWithDataId1Handler } from '../../viewmodels/handlers/cancelsubmitwithdataid1handler';
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
        { provide: FORM_ID, useValue: "e18b8f7e-f839-4a60-9090-3d53d8ba58fa" },
        { provide: BE_SESSION_HANDLING_STRATEGY_TOKEN, useValue: "SeparatedSession" },
        { provide: EXCEPTION_HANDLER, useClass: ExceptionHandler },
        { provide: BACK_END_MESSAGE_HANDLER_TOKEN, useClass: BackEndMessageHandler },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Load1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: LoadAndAdd1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: LoadAndView1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: LoadAndEdit1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Add1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Edit1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Save1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: Cancel1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: ChangeItem1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: ChangeItem2Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: submitWithBizDefKey1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: cancelSubmitWithDataId1Handler, multi: true },
]
})
export class RootComponent extends FrameComponent implements OnInit, AfterViewInit {

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
                'button-save': !this.viewModel.stateMachine['canSave'],
                'button-cancel': !this.viewModel.stateMachine['canCancel'],
                'button-approve': !this.viewModel.stateMachine['canApprove'],
                'button-cancel-approve': !this.viewModel.stateMachine['canCancelApprove'],
            }
        this.pageHeaderToolbarToolbarItemsStates.next(pageHeaderToolbarToolbarItemsstates);
        });
        
        this.stateMachine.stateChange.subscribe(() => {
            
            const pageHeaderToolbarToolbarItemsvisibleStates = {
            'button-add': true,
            'button-edit': true,
            'button-save': true,
            'button-cancel': true,
            'button-approve': true,
            'button-cancel-approve': true,
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
                
        this.stateMachine.stateChange.subscribe(() => {
    
        const states = {
                'fybxdmxAddButton': !this.viewModel.stateMachine['canAddDetail'],
                'fybxdmxRemoveButton': !this.viewModel.stateMachine['canRemoveDetail'],
                'fxbxdfjAddButton': !this.viewModel.stateMachine['canAddDetail'],
                'fxbxdfjRemoveButton': !this.viewModel.stateMachine['canRemoveDetail'],
        }; 
        this.tabsToolbarStates.next(states);
        });
        this.stateMachine.stateChange.subscribe(() => {
    
        const visibleStates = {
            'fybxdmxAddButton': true,
            'fybxdmxRemoveButton': true,
            'fxbxdfjAddButton': true,
            'fxbxdfjRemoveButton': true,
        };
        this.tabsToolbarVisibleStates.next(visibleStates);
        });
    }

    ngAfterViewInit(): void {
    }

    handleSizeChange(size: any) {
        this.size = size;
    } 

    public onFormLoad() {
        this.viewModel.Load1(); 
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
        "id": "button-save",
        "text": this.langService.transform('button-save', this.lang, "保存"),
        "resourceId": "button-save",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "button-cancel",
        "text": this.langService.transform('button-cancel', this.lang, "取消"),
        "resourceId": "button-cancel",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "button-approve",
        "text": this.langService.transform('button-approve', this.lang, "提交审批"),
        "resourceId": "button-approve",
        "isDP": false,
        "tipsEnable": false,
        "icon": "",
        "children": []
        },{
        "id": "button-cancel-approve",
        "text": this.langService.transform('button-cancel-approve', this.lang, "取消提交审批"),
        "resourceId": "button-cancel-approve",
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
            case 'button-save': 
                this.viewModel.Save1(args);
                break;
            case 'button-cancel': 
                this.viewModel.Cancel1(args);
                break;
            case 'button-approve': 
                this.viewModel.submitWithBizDefKey1(args);
                break;
            case 'button-cancel-approve': 
                this.viewModel.cancelSubmitWithDataId1(args);
                break;
        }
    }
    tabsToolbarStates = new BehaviorSubject({});
    tabsToolbarVisibleStates = new BehaviorSubject({});
    fybxdmxTabToolbar = {
        position: 'inHead',
        contents: [
            {
                id: 'fybxdmxAddButton',
                disable: !this.viewModel.stateMachine['canAddDetail'],
                visible: true,
                title: this.langService.transform('fybxdmxAddButton', this.lang, "新增"),
                click: () => { this.viewModel.fybxdmxComponentViewmodel.fybxdmxAddItem1(); },
                appearance: {
                    "class": "btn btn-secondary f-btn-ml"
                }
            },
            {
                id: 'fybxdmxRemoveButton',
                disable: !this.viewModel.stateMachine['canRemoveDetail'],
                visible: true,
                title: this.langService.transform('fybxdmxRemoveButton', this.lang, "删除"),
                click: () => { this.viewModel.fybxdmxComponentViewmodel.fybxdmxRemoveItem1(); },
                appearance: {
                    "class": "btn btn-secondary f-btn-ml"
                }
            }
        ]
    }
    fxbxdfjTabToolbar = {
        position: 'inHead',
        contents: [
            {
                id: 'fxbxdfjAddButton',
                disable: !this.viewModel.stateMachine['canAddDetail'],
                visible: true,
                title: this.langService.transform('fxbxdfjAddButton', this.lang, "新增"),
                click: () => { this.viewModel.fxbxdfjComponentViewmodel.fxbxdfjAddItem1(); },
                appearance: {
                    "class": "btn btn-secondary f-btn-ml"
                }
            },
            {
                id: 'fxbxdfjRemoveButton',
                disable: !this.viewModel.stateMachine['canRemoveDetail'],
                visible: true,
                title: this.langService.transform('fxbxdfjRemoveButton', this.lang, "删除"),
                click: () => { this.viewModel.fxbxdfjComponentViewmodel.fxbxdfjRemoveItem1(); },
                appearance: {
                    "class": "btn btn-secondary f-btn-ml"
                }
            }
        ]
    }
    fybxdmxtabpage = this.langService.transform('fybxdmx-tab-page', this.lang, "报销单明细");
    fxbxdfjtabpage = this.langService.transform('fxbxdfj-tab-page', this.lang, "报销单附件");
    sectionsToolbarStates = new BehaviorSubject({});
    sectionsToolbarVisibleStates = new BehaviorSubject({});
    detailSection = {
        position: 'inHead',
        contents: [
        ]
    }
    SectiondetailsectionMainTitle = this.langService.transform('Section/detail-section/mainTitle', this.lang, "");
    SectiondetailsectionSubTitle = this.langService.transform('Section/detail-section/subTitle', this.lang, "");
}