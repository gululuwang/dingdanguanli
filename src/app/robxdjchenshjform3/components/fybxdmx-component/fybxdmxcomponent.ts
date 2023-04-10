
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
import { FybxdmxComponentViewmodel } from '../../viewmodels/fybxdmxcomponentviewmodel';
import { FYBXDRepository } from '../../models/fybxdrepository';
import { LangService } from '../../lang/lang-pipe';

import { FybxdmxComponentViewmodelForm } from '../../viewmodels/form/fybxdmxcomponentviewmodelform';
import { FybxdmxComponentViewmodelUIState } from '../../viewmodels/uistate/fybxdmxcomponentviewmodeluistate';
import { fybxdmxAddItem1Handler } from '../../viewmodels/handlers/fybxdmxadditem1handler';
import { fybxdmxRemoveItem1Handler } from '../../viewmodels/handlers/fybxdmxremoveitem1handler';

@Component({
    selector: 'app-fybxdmxcomponent',
    templateUrl: './fybxdmxcomponent.html',
    styleUrls: ['./fybxdmxcomponent.css'],
    providers: [
        FARRIS_DEVKIT_FRAME_PROVIDERS,
        FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
        { provide: FRAME_ID, useValue: 'fybxdmx-component' },
        { provide: BindingData, useClass: BindingData },
        { provide: Repository, useExisting: FYBXDRepository },
        LangService,
        { provide: NAMESPACE, useValue: '' },
    
        QDP_COMMAND_SERVICE_PROVIDERS,
        { provide: ServerSideToken, useClass: BefLookupRestService },
        { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
        { provide: GRID_SETTINGS_HTTP, useClass: BefLookupRestService },
        { provide: Form, useClass: FybxdmxComponentViewmodelForm },
        { provide: UIState, useClass: FybxdmxComponentViewmodelUIState },
        { provide: ViewModel, useClass: FybxdmxComponentViewmodel },
        { provide: EXCEPTION_HANDLER, useValue: null },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: fybxdmxAddItem1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: fybxdmxRemoveItem1Handler, multi: true },
]
})
export class FybxdmxComponent extends FrameComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('dataGrid_fybxdmxDataGrid')
    dataGrid_fybxdmxDataGrid: DatagridComponent;
    dataGrid_fybxdmxColumns =[];

    @HostBinding('class')
    cls = 'f-struct-is-subgrid ';
    public viewModel: FybxdmxComponentViewmodel;
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
            this.focusInvalidService.focusGridCell(verifyInformations, this.dataGrid_fybxdmxDataGrid);
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
        this.dataGrid_fybxdmxColumns =[
            [
                {
                    id: 'detailDate_180e9f5d_0sbj',
                    field: 'detailDate',
                    width: 120,
                    title: this.langService.transform('detailDate_180e9f5d_0sbj', this.lang, "费用日期"),
                    dataType: 'datetime',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.DATEPICKER,
                        options: {"id":"detailDate_180e9f5d_920a","title":"日期选择","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.DATEPICKER","dateRange":false,"showTime":true,"showType":1,"dateFormat":"yyyy-MM-dd HH:mm:ss","returnFormat":"yyyy-MM-dd HH:mm:ss","placeholder":"","showWeekNumbers":false,"editable":true,"linkedLabelEnabled":false,"linkedLabelClick":""}
                    },
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
                    filter: false,
                    formatter: {"type":"datetime","options":{"format":"yyyy-MM-dd HH:mm:ss"}}
                },
                {
                    id: 'amount_3bab47be_ici2',
                    field: 'amount',
                    width: 120,
                    title: this.langService.transform('amount_3bab47be_ici2', this.lang, "报销金额"),
                    dataType: 'number',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.NUMBERBOX,
                        options: {"id":"amount_3bab47be_woby","title":"数值框","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.NUMBERBOX","precision":2,"step":1,"canNull":true,"bigNumber":false,"showButton":true,"showZero":true}
                    },
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
                    filter: false,
                    formatter: {"type":"number","options":{"precision":2,"thousand":",","decimal":"."}}
                },
                {
                    id: 'invoiceNumer_a3acac3d_x1ko',
                    field: 'invoiceNumer',
                    width: 120,
                    title: this.langService.transform('invoiceNumer_a3acac3d_x1ko', this.lang, "发票号码"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: {"id":"invoiceNumer_a3acac3d_0tx9","title":"文本","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.TEXTBOX","isPassword":false,"maxLength":36}
                    },
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
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'note_888e10c3_yv9s',
                    field: 'note',
                    width: 120,
                    title: this.langService.transform('note_888e10c3_yv9s', this.lang, "费用说明"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTAREA,
                        options: {"id":"note_888e10c3_2slf","title":"多行文本框","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.TEXTAREA","enableWordCount":false,"countType":"surplus","onlyShowInDialog":false}
                    },
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
                    filter: false,
                    formatter: {}
                }
            ]
        ]; 
        this.viewModel.dataGrid_fybxdmxColumns= this.dataGrid_fybxdmxColumns;
        this.viewModel.dataGridColumnsName= "dataGrid_fybxdmxColumns";
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
    dataGrid_fybxdmxlineNumberTitle = this.langService.transform('DataGrid/dataGrid_fybxdmx/lineNumberTitle', this.lang, "");
}