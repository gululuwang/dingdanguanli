
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

@Injectable()
export class FxbxdfjComponentViewmodel extends ViewModel {
    public bindingPath = '/fxbxdfjs';
    // farrisDataGrid列集合定义 在对应component中赋值
    public dataGrid_fxbxdfjColumns:any;
    // datGrid 列集合名称 用以bindData使用
    public dataGridColumnsName:string;

    public dom = {
  "dataGrid_fxbxdfj": {
    "type": "DataGrid",
    "resourceId": "dataGrid_fxbxdfj",
    "visible": {
      "useQuote": false,
      "isExpression": false,
      "value": true
    },
    "id": "dataGrid_fxbxdfj",
    "size": {},
    "readonly": {
      "useQuote": false,
      "isExpression": false,
      "value": false
    },
    "fields": [
      {
        "type": "GridField",
        "resourceId": "fileInfo_FileName_6a3f58ad_4ew4",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "fileInfo_FileName_6a3f58ad_4ew4",
        "size": {
          "width": 120
        },
        "readonly": {
          "useQuote": false,
          "isExpression": false,
          "value": false
        },
        "binding": {
          "type": "Form",
          "path": "fileInfo_FileName",
          "isExpression": false,
          "value": "fileInfo_FileName"
        },
        "dataField": "fileInfo.fileName",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "附件名称",
        "editor": {
          "type": "TextBox",
          "isTextArea": true,
          "resourceId": "fileInfo_FileName_6a3f58ad_wp42",
          "defaultI18nValue": "文本",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "fileInfo_FileName_6a3f58ad_wp42",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "fileInfo_FileName",
            "isExpression": false,
            "value": "fileInfo_FileName"
          },
          "disable": false,
          "maxLength": 128,
          "isPassword": false,
          "enableViewPassword": false
        },
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "aggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "groupAggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "linkedLabelEnabled": false,
        "formatter": {
          "type": "none"
        }
      },
      {
        "type": "GridField",
        "resourceId": "fileInfo_FileSize_6a3f58ad_e1mp",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "fileInfo_FileSize_6a3f58ad_e1mp",
        "size": {
          "width": 120
        },
        "readonly": {
          "useQuote": false,
          "isExpression": false,
          "value": false
        },
        "binding": {
          "type": "Form",
          "path": "fileInfo_FileSize",
          "isExpression": false,
          "value": "fileInfo_FileSize"
        },
        "dataField": "fileInfo.fileSize",
        "dataType": "number",
        "multiLanguage": false,
        "caption": "附件大小",
        "editor": {
          "type": "FarrisNumberSpinner",
          "isTextArea": true,
          "resourceId": "fileInfo_FileSize_6a3f58ad_9xyd",
          "defaultI18nValue": "数值框",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "fileInfo_FileSize_6a3f58ad_9xyd",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "fileInfo_FileSize",
            "isExpression": false,
            "value": "fileInfo_FileSize"
          },
          "disable": false,
          "step": 1,
          "useThousands": true,
          "textAlign": "left",
          "precision": 8
        },
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "aggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "groupAggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "linkedLabelEnabled": false,
        "formatter": {
          "type": "number",
          "precision": 8,
          "thousand": ",",
          "decimal": "."
        }
      },
      {
        "type": "GridField",
        "resourceId": "fileInfo_FileCreateTime_6a3f58ad_t7rs",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "fileInfo_FileCreateTime_6a3f58ad_t7rs",
        "size": {
          "width": 120
        },
        "readonly": {
          "useQuote": false,
          "isExpression": false,
          "value": false
        },
        "binding": {
          "type": "Form",
          "path": "fileInfo_FileCreateTime",
          "isExpression": false,
          "value": "fileInfo_FileCreateTime"
        },
        "dataField": "fileInfo.fileCreateTime",
        "dataType": "datetime",
        "multiLanguage": false,
        "caption": "附件上传时间",
        "editor": {
          "type": "EditableField",
          "disable": false,
          "editable": true,
          "dateRange": false,
          "showTime": true,
          "title": "日期选择",
          "showType": 1,
          "locale": "zh-cn",
          "dateFormat": "yyyy-MM-dd HH:mm:ss",
          "placeHolder": "",
          "linkedLabelEnabled": false,
          "disableDates": [],
          "returnType": "Date",
          "useDefault": false,
          "showWeekNumbers": false,
          "dateRangeDatesDelimiter": "~",
          "shortcuts": [],
          "holdPlace": false,
          "returnFormat": "yyyy-MM-dd HH:mm:ss",
          "titleWidth": null,
          "localization": false,
          "isTextArea": true,
          "resourceId": "fileInfo_FileCreateTime_6a3f58ad_axeg",
          "defaultI18nValue": "日期选择",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "fileInfo_FileCreateTime_6a3f58ad_axeg",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "fileInfo_FileCreateTime",
            "isExpression": false,
            "value": "fileInfo_FileCreateTime"
          }
        },
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "aggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "groupAggregate": {
          "type": "none",
          "formatter": {
            "type": "none"
          }
        },
        "linkedLabelEnabled": false,
        "formatter": {
          "type": "date",
          "dateFormat": "yyyy-MM-dd HH:mm:ss"
        }
      }
    ],
    "editable": "viewModel.stateMachine['editable']",
    "showLineNumber": false,
    "lineNumberTitle": "#",
    "groupTotalText": "Total",
    "filterable": false,
    "groupable": false,
    "rowClass": ""
  }
};
    @NgCommand({
        name: 'fxbxdfjAddItem1',
        params: {
        }
    })
    public fxbxdfjAddItem1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'fxbxdfjRemoveItem1',
        params: {
            id: '{DATA~/#{fxbxdfj-component}/fxbxdfjs/id}',
            successMsg: ''
        },
        paramDescriptions: {
            id: { type: 'string' },
            successMsg: { type: '' }
        }
    })
    public fxbxdfjRemoveItem1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'fxbxdfjcomponentviewmodelUploadAndBatchAddRows1',
        params: {
            attachmentInfoFieldPath: '/fxbxdfjs/fileInfo',
            rootDirId: 'default-root',
            subDirName: '',
            fileType: ''
        },
        paramDescriptions: {
            attachmentInfoFieldPath: { type: 'string' },
            rootDirId: { type: 'string' },
            subDirName: { type: 'string' },
            fileType: { type: 'string' }
        }
    })
    public fxbxdfjcomponentviewmodelUploadAndBatchAddRows1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'fxbxdfjcomponentviewmodeldownload1',
        params: {
            attachmentId: '{DATA~/fxbxdfj-component/fxbxdfjs/fileInfo}',
            rootId: 'default-root'
        },
        paramDescriptions: {
            attachmentId: { type: 'string' },
            rootId: { type: 'string' }
        }
    })
    public fxbxdfjcomponentviewmodeldownload1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'fxbxdfjcomponentviewmodelPreviewByAttachmentInfoFieldPath1',
        params: {
            attachmentInfoFieldPath: '/fxbxdfjs/fileInfo',
            rootDirId: 'default-root',
            ids: '{UISTATE~/fxbxdfj-component/ids}'
        },
        paramDescriptions: {
            attachmentInfoFieldPath: { type: 'string' },
            rootDirId: { type: 'string' },
            ids: { type: '' }
        }
    })
    public fxbxdfjcomponentviewmodelPreviewByAttachmentInfoFieldPath1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'fxbxdfjcomponentviewmodelBatchDownloadByDataIds1',
        params: {
            dataIds: '{UISTATE~/fxbxdfj-component/ids}',
            attachmentInfoFieldPath: '/fxbxdfjs/fileInfo',
            rootId: 'default-root'
        },
        paramDescriptions: {
            dataIds: { type: 'decimal' },
            attachmentInfoFieldPath: { type: 'string' },
            rootId: { type: 'string' }
        }
    })
    public fxbxdfjcomponentviewmodelBatchDownloadByDataIds1(commandParam?: any): Observable<any> { return; }

}