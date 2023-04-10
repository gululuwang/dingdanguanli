
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

import { EditorTypes } from '@farris/ui-datagrid-editors';
import { CalculationType, DatagridComponent, GRID_SETTINGS_HTTP } from '@farris/ui-datagrid';
import { CommonUtils } from '@farris/ui-common';

import { BefLookupRestService, DefaultComboHttpService } from '@farris/bef';
import { ServerSideToken } from '@farris/ui-lookup';
import { ComboServerSideToken } from '@farris/ui-combo-list';
import { WizardService, FarrisPageDetailComponent } from '@farris/ui-wizard';
import { LocalizationService } from "@farris/command-services";
import { __decorate, __metadata } from 'tslib';

import { QDP_COMMAND_SERVICE_PROVIDERS } from '@qdp/command-services';
import { ConditionDialogComponent, QueryFrameworkLayoutComponent } from '@qdp/query-framework';
import { QdpViewComponent } from '@qdp/spread';
import { DataGridComponentViewmodel } from '../../viewmodels/datagridcomponentviewmodel';
import { FYBXDRepository } from '../../models/fybxdrepository';
import { LangService } from '../../lang/lang-pipe';

import { DataGridComponentViewmodelForm } from '../../viewmodels/form/datagridcomponentviewmodelform';
import { DataGridComponentViewmodelUIState } from '../../viewmodels/uistate/datagridcomponentviewmodeluistate';
import { ChangePage1Handler } from '../../viewmodels/handlers/changepage1handler';
import { datagridcomponentviewmodelAudit1Handler } from '../../viewmodels/handlers/datagridcomponentviewmodelaudit1handler';
import { datagridcomponentviewmodelAudit2Handler } from '../../viewmodels/handlers/datagridcomponentviewmodelaudit2handler';
import { datagridcomponentviewmodelView1Handler } from '../../viewmodels/handlers/datagridcomponentviewmodelview1handler';
import { datagridcomponentviewmodelRemove1Handler } from '../../viewmodels/handlers/datagridcomponentviewmodelremove1handler';
import { datagridcomponentviewmodelEdit1Handler } from '../../viewmodels/handlers/datagridcomponentviewmodeledit1handler';
import { datagridcomponentviewmodelviewChangeLog1Handler } from '../../viewmodels/handlers/datagridcomponentviewmodelviewchangelog1handler';
import { datagridcomponentviewmodelprintByIds1Handler } from '../../viewmodels/handlers/datagridcomponentviewmodelprintbyids1handler';
import { FYBXDJManagementFrmAuditBillService as FYBXDJManagementFrmAuditBillService1 } from '../../services/fybxdjmanagement_frm_auditbill';
import { FYBXDJManagementFrmViewChangeLogService as FYBXDJManagementFrmViewChangeLogService1 } from '../../services/fybxdjmanagement_frm_viewchangelog';

@Component({
    selector: 'app-datagridcomponent',
    templateUrl: './datagridcomponent.html',
    styleUrls: ['./datagridcomponent.css'],
    providers: [
        FARRIS_DEVKIT_FRAME_PROVIDERS,
        FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
        { provide: FRAME_ID, useValue: 'data-grid-component' },
        { provide: BindingData, useClass: BindingData },
        { provide: Repository, useExisting: FYBXDRepository },
        LangService,
        { provide: NAMESPACE, useValue: '' },
    
        QDP_COMMAND_SERVICE_PROVIDERS,
        { provide: ServerSideToken, useClass: BefLookupRestService },
        { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
        { provide: GRID_SETTINGS_HTTP, useClass: BefLookupRestService },
        { provide: Form, useClass: DataGridComponentViewmodelForm },
        { provide: UIState, useClass: DataGridComponentViewmodelUIState },
        FYBXDJManagementFrmAuditBillService1,
        FYBXDJManagementFrmViewChangeLogService1,
        { provide: ViewModel, useClass: DataGridComponentViewmodel },
        { provide: EXCEPTION_HANDLER, useValue: null },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: ChangePage1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: datagridcomponentviewmodelAudit1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: datagridcomponentviewmodelAudit2Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: datagridcomponentviewmodelView1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: datagridcomponentviewmodelRemove1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: datagridcomponentviewmodelEdit1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: datagridcomponentviewmodelviewChangeLog1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: datagridcomponentviewmodelprintByIds1Handler, multi: true },
]
})
export class DataGridComponent extends FrameComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('dataGridDataGrid')
    dataGridDataGrid: DatagridComponent;
    dataGridColumns =[];
    @ViewChild('dataGridbillTypeTemplate') dataGridbillTypeTemplate: TemplateRef<any>;
    @ViewChild('dataGridcodeTemplate') dataGridcodeTemplate: TemplateRef<any>;
    @ViewChild('dataGridauditStatusTemplate') dataGridauditStatusTemplate: TemplateRef<any>;
    @ViewChild('dataGridmanageTemplate') dataGridmanageTemplate: TemplateRef<any>;

    @HostBinding('class')
    cls = 'f-struct-wrapper f-utils-fill-flex-column ';
    public viewModel: DataGridComponentViewmodel;
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
        private farrisGridUtils: CommonUtils,
        private sanitizer: DomSanitizer,
        public injector: Injector
    ) {
        super(injector);
        this.lang = localStorage.getItem('languageCode') || "zh-CHS";
        this.viewModel.verifycationChanged.subscribe((verifyInformations: any) => {
            this.focusInvalidService.focusGridCell(verifyInformations, this.dataGridDataGrid);
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
        this.dataGridColumns =[
            [
                {
                    id: 'billType_0ac6dd9f_rsnc',
                    field: 'billType',
                    width: 120,
                    title: this.langService.transform('billType_0ac6dd9f_rsnc', this.lang, "报销类型"),
                    dataType: 'enum',
                    template: this.dataGridbillTypeTemplate,
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: 
                    {
                        "type": "enum",
                        "options":
                        {
                            "valueField": "value",
                            "textField": "name",
                            "data": [
                                {
                                    "value": "CL",
                                    "name": this.langService.transform('GridField/billType_0ac6dd9f_rsnc/enumData/CL', this.lang, "差旅费")
                                },
                                {
                                    "value": "SJ",
                                    "name": this.langService.transform('GridField/billType_0ac6dd9f_rsnc/enumData/SJ', this.lang, "手机费")
                                },
                                {
                                    "value": "JT",
                                    "name": this.langService.transform('GridField/billType_0ac6dd9f_rsnc/enumData/JT', this.lang, "交通费")
                                }]
                        }
                    }
                },
                {
                    id: 'employee_Employee_Name_24534726_vdxd',
                    field: 'employee.employee_Name',
                    width: 120,
                    title: this.langService.transform('employee_Employee_Name_24534726_vdxd', this.lang, "报销人"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'code_729c8ec9_ukae',
                    field: 'code',
                    width: 120,
                    title: this.langService.transform('code_729c8ec9_ukae', this.lang, "单据编号"),
                    dataType: 'string',
                    template: this.dataGridcodeTemplate,
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'department_Department_name_8e551f99_w82g',
                    field: 'department.department_name',
                    width: 120,
                    title: this.langService.transform('department_Department_name_8e551f99_w82g', this.lang, "所属部门"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'totalSum_25592d80_8whb',
                    field: 'totalSum',
                    width: 120,
                    title: this.langService.transform('totalSum_25592d80_8whb', this.lang, "报帐金额"),
                    dataType: 'number',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        calculationType: CalculationType.max,
                        },
                    formatter: {"precision":0,"thousand":",","prefix":"","suffix":"元","decimal":".","type":"number"},
                    },
                    groupFooter: {
                
                        options: {
                    
                            calculationType: CalculationType.sum,
                        },
                        formatter: {"type":"none"},
                        align: 'right'
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {"type":"number","options":{"precision":2,"thousand":",","prefix":"￥","suffix":"","decimal":"."}}
                },
                {
                    id: 'billState_BillState_e77749d1_2qzj',
                    field: 'billState.billState',
                    width: 120,
                    title: this.langService.transform('billState_BillState_e77749d1_2qzj', this.lang, "单据状态"),
                    dataType: 'enum',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: 
                    {
                        "type": "enum",
                        "options":
                        {
                            "valueField": "value",
                            "textField": "name",
                            "data": [
                                {
                                    "value": "Billing",
                                    "name": this.langService.transform('GridField/billState_BillState_e77749d1_2qzj/enumData/Billing', this.lang, "制单")
                                },
                                {
                                    "value": "SubmitApproval",
                                    "name": this.langService.transform('GridField/billState_BillState_e77749d1_2qzj/enumData/SubmitApproval', this.lang, "提交审批")
                                },
                                {
                                    "value": "Approved",
                                    "name": this.langService.transform('GridField/billState_BillState_e77749d1_2qzj/enumData/Approved', this.lang, "审批通过")
                                },
                                {
                                    "value": "ApprovalNotPassed",
                                    "name": this.langService.transform('GridField/billState_BillState_e77749d1_2qzj/enumData/ApprovalNotPassed', this.lang, "审批不通过")
                                }]
                        }
                    }
                },
                {
                    id: 'createDate_ac6fab1f_45bs',
                    field: 'createDate',
                    width: 120,
                    title: this.langService.transform('createDate_ac6fab1f_45bs', this.lang, "制单日期"),
                    dataType: 'datetime',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: {"type":"datetime","options":{"format":"yyyy-MM-dd HH:mm:ss"}}
                },
                {
                    id: 'auditStatus_5aeb26bc_5jnn',
                    field: 'auditStatus',
                    width: 120,
                    title: this.langService.transform('auditStatus_5aeb26bc_5jnn', this.lang, "稽核状态"),
                    dataType: 'enum',
                    template: this.dataGridauditStatusTemplate,
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    sortable: true,
                    footer: {
                
                        options: {
                    
                        },
                    },
                    groupFooter: {
                
                        options: {
                    
                        },
                        formatter: {"type":"none"},
                    },
                    readonly: false,
                    visible: true,
                    allowGrouping: true,
                    filter: false,
                    formatter: 
                    {
                        "type": "enum",
                        "options":
                        {
                            "valueField": "value",
                            "textField": "name",
                            "data": [
                                {
                                    "value": "None",
                                    "name": this.langService.transform('GridField/auditStatus_5aeb26bc_5jnn/enumData/None', this.lang, "未稽核")
                                },
                                {
                                    "value": "Passed",
                                    "name": this.langService.transform('GridField/auditStatus_5aeb26bc_5jnn/enumData/Passed', this.lang, "通过")
                                },
                                {
                                    "value": "Reject",
                                    "name": this.langService.transform('GridField/auditStatus_5aeb26bc_5jnn/enumData/Reject', this.lang, "未通过")
                                }]
                        }
                    }
                },
                {
                    width: 120,
                    title: this.langService.transform('DataGrid/dataGrid/OperateColumn', this.lang, "操作"),
                    dataType: 'string',
                    template: this.dataGridmanageTemplate,
                    align: 'center',
                    halign: 'center',
                    isMultilingualField: false,
                    fixed: 'right',
                    visible: true,
                    filter: false,
                }
            ]
        ]; 
        this.viewModel.dataGridColumns= this.dataGridColumns;
        this.viewModel.dataGridColumnsName= "dataGridColumns";
        this.onFormLoad(); 
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
        
        this.focusInvalidService = null;
        this.farrisGridUtils = null;
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
    SectiondatagridsectionMainTitle = this.langService.transform('Section/data-grid-section/mainTitle', this.lang, "");
    SectiondatagridsectionSubTitle = this.langService.transform('Section/data-grid-section/subTitle', this.lang, "");
    dataGridRowStyle= (rowData) => {
    if (rowData.auditStatus == "Reject") {
        return {
            style: {
                color: 'red'
            }
        };
    }
}
    dataGridlineNumberTitle = this.langService.transform('DataGrid/dataGrid/lineNumberTitle', this.lang, "");
}