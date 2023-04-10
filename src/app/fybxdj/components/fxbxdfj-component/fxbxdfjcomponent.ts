
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
import { FxbxdfjComponentViewmodel } from '../../viewmodels/fxbxdfjcomponentviewmodel';
import { FYBXDRepository } from '../../models/fybxdrepository';
import { LangService } from '../../lang/lang-pipe';

import { FxbxdfjComponentViewmodelForm } from '../../viewmodels/form/fxbxdfjcomponentviewmodelform';
import { FxbxdfjComponentViewmodelUIState } from '../../viewmodels/uistate/fxbxdfjcomponentviewmodeluistate';
import { fxbxdfjAddItem1Handler } from '../../viewmodels/handlers/fxbxdfjadditem1handler';
import { fxbxdfjRemoveItem1Handler } from '../../viewmodels/handlers/fxbxdfjremoveitem1handler';
import { fxbxdfjcomponentviewmodelUploadAndBatchAddRows1Handler } from '../../viewmodels/handlers/fxbxdfjcomponentviewmodeluploadandbatchaddrows1handler';
import { fxbxdfjcomponentviewmodeldownload1Handler } from '../../viewmodels/handlers/fxbxdfjcomponentviewmodeldownload1handler';
import { fxbxdfjcomponentviewmodelPreviewByAttachmentInfoFieldPath1Handler } from '../../viewmodels/handlers/fxbxdfjcomponentviewmodelpreviewbyattachmentinfofieldpath1handler';
import { fxbxdfjcomponentviewmodelBatchDownloadByDataIds1Handler } from '../../viewmodels/handlers/fxbxdfjcomponentviewmodelbatchdownloadbydataids1handler';

@Component({
    selector: 'app-fxbxdfjcomponent',
    templateUrl: './fxbxdfjcomponent.html',
    styleUrls: ['./fxbxdfjcomponent.css'],
    providers: [
        FARRIS_DEVKIT_FRAME_PROVIDERS,
        FARRIS_COMMAND_SERVICE_FRAME_PROVIDERS,
        { provide: FRAME_ID, useValue: 'fxbxdfj-component' },
        { provide: BindingData, useClass: BindingData },
        { provide: Repository, useExisting: FYBXDRepository },
        LangService,
        { provide: NAMESPACE, useValue: '' },
    
        QDP_COMMAND_SERVICE_PROVIDERS,
        { provide: ServerSideToken, useClass: BefLookupRestService },
        { provide: ComboServerSideToken, useClass: DefaultComboHttpService },
        { provide: GRID_SETTINGS_HTTP, useClass: BefLookupRestService },
        { provide: Form, useClass: FxbxdfjComponentViewmodelForm },
        { provide: UIState, useClass: FxbxdfjComponentViewmodelUIState },
        { provide: ViewModel, useClass: FxbxdfjComponentViewmodel },
        { provide: EXCEPTION_HANDLER, useValue: null },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: fxbxdfjAddItem1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: fxbxdfjRemoveItem1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: fxbxdfjcomponentviewmodelUploadAndBatchAddRows1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: fxbxdfjcomponentviewmodeldownload1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: fxbxdfjcomponentviewmodelPreviewByAttachmentInfoFieldPath1Handler, multi: true },
        { provide: COMMAND_HANDLERS_TOKEN, useClass: fxbxdfjcomponentviewmodelBatchDownloadByDataIds1Handler, multi: true },
]
})
export class FxbxdfjComponent extends FrameComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('dataGrid_fxbxdfjDataGrid')
    dataGrid_fxbxdfjDataGrid: DatagridComponent;
    dataGrid_fxbxdfjColumns =[];

    @HostBinding('class')
    cls = 'f-struct-is-subgrid ';
    public viewModel: FxbxdfjComponentViewmodel;
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
            this.focusInvalidService.focusGridCell(verifyInformations, this.dataGrid_fxbxdfjDataGrid);
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
        this.dataGrid_fxbxdfjColumns =[
            [
                {
                    id: 'fileInfo_FileName_6a3f58ad_4ew4',
                    field: 'fileInfo.fileName',
                    width: 120,
                    title: this.langService.transform('fileInfo_FileName_6a3f58ad_4ew4', this.lang, "附件名称"),
                    dataType: 'string',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.TEXTBOX,
                        options: {"id":"fileInfo_FileName_6a3f58ad_wp42","title":"文本","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.TEXTBOX","isPassword":false,"maxLength":128}
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
                    allowGrouping: true,
                    filter: false,
                    formatter: {}
                },
                {
                    id: 'fileInfo_FileSize_6a3f58ad_e1mp',
                    field: 'fileInfo.fileSize',
                    width: 120,
                    title: this.langService.transform('fileInfo_FileSize_6a3f58ad_e1mp', this.lang, "附件大小"),
                    dataType: 'number',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.NUMBERBOX,
                        options: {"id":"fileInfo_FileSize_6a3f58ad_9xyd","title":"数值框","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.NUMBERBOX","precision":8,"step":1,"canNull":true,"bigNumber":false,"showButton":true,"showZero":true}
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
                    allowGrouping: true,
                    filter: false,
                    formatter: {"type":"number","options":{"precision":8,"thousand":",","decimal":"."}}
                },
                {
                    id: 'fileInfo_FileCreateTime_6a3f58ad_t7rs',
                    field: 'fileInfo.fileCreateTime',
                    width: 120,
                    title: this.langService.transform('fileInfo_FileCreateTime_6a3f58ad_t7rs', this.lang, "附件上传时间"),
                    dataType: 'datetime',
                    align: 'left',
                    halign: 'left',
                    valign: 'middle',
                    isMultilingualField: false,
                    editor: {
                        type: EditorTypes.DATEPICKER,
                        options: {"id":"fileInfo_FileCreateTime_6a3f58ad_axeg","title":"日期选择","placeHolder":"","readonly":false,"localization":null,"localizationType":null,"type":"EditorTypes.DATEPICKER","dateRange":false,"showTime":true,"showType":1,"dateFormat":"yyyy-MM-dd HH:mm:ss","returnFormat":"yyyy-MM-dd HH:mm:ss","placeholder":"","showWeekNumbers":false,"editable":true,"linkedLabelEnabled":false,"linkedLabelClick":""}
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
                    allowGrouping: true,
                    filter: false,
                    formatter: {"type":"datetime","options":{"format":"yyyy-MM-dd HH:mm:ss"}}
                }
            ]
        ]; 
        this.viewModel.dataGrid_fxbxdfjColumns= this.dataGrid_fxbxdfjColumns;
        this.viewModel.dataGridColumnsName= "dataGrid_fxbxdfjColumns";
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
    dataGrid_fxbxdfjlineNumberTitle = this.langService.transform('DataGrid/dataGrid_fxbxdfj/lineNumberTitle', this.lang, "");
}