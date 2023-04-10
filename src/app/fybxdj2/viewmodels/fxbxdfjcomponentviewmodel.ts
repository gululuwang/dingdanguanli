
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
        "resourceId": "fileName_39d19ec2_t7qh",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "fileName_39d19ec2_t7qh",
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
          "path": "fileName",
          "isExpression": false,
          "value": "fileName"
        },
        "dataField": "fileName",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "文件名",
        "editor": {
          "type": "MultiTextBox",
          "isTextArea": true,
          "resourceId": "fileName_39d19ec2_a1mj",
          "defaultI18nValue": "多行文本框",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "fileName_39d19ec2_a1mj",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "fileName",
            "isExpression": false,
            "value": "fileName"
          },
          "disable": false,
          "maxLength": 0
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
        "updateOn": "blur",
        "formatter": {
          "type": "none"
        }
      },
      {
        "type": "GridField",
        "resourceId": "filePath_40ee3186_vf3k",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "filePath_40ee3186_vf3k",
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
          "path": "filePath",
          "isExpression": false,
          "value": "filePath"
        },
        "dataField": "filePath",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "文件路径",
        "editor": {
          "type": "MultiTextBox",
          "isTextArea": true,
          "resourceId": "filePath_40ee3186_760n",
          "defaultI18nValue": "多行文本框",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "filePath_40ee3186_760n",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "filePath",
            "isExpression": false,
            "value": "filePath"
          },
          "disable": false,
          "maxLength": 0
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
        "updateOn": "blur",
        "formatter": {
          "type": "none"
        }
      },
      {
        "type": "GridField",
        "resourceId": "fileSize_efec9ebc_hzi1",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "fileSize_efec9ebc_hzi1",
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
          "path": "fileSize",
          "isExpression": false,
          "value": "fileSize"
        },
        "dataField": "fileSize",
        "dataType": "number",
        "multiLanguage": false,
        "caption": "文件大小",
        "editor": {
          "type": "FarrisNumberSpinner",
          "isTextArea": true,
          "resourceId": "fileSize_efec9ebc_zzs5",
          "defaultI18nValue": "数值框",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "fileSize_efec9ebc_zzs5",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "fileSize",
            "isExpression": false,
            "value": "fileSize"
          },
          "disable": false,
          "step": 1,
          "useThousands": true,
          "textAlign": "left",
          "precision": 2
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
        "updateOn": "blur",
        "formatter": {
          "type": "number",
          "precision": 2,
          "thousand": ",",
          "decimal": "."
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
            id: '{DATA~/#{fxbxdfj-component}/fxbxdfjs/id}'
        },
        paramDescriptions: {
            id: { type: 'string' }
        }
    })
    public fxbxdfjRemoveItem1(commandParam?: any): Observable<any> { return; }

}