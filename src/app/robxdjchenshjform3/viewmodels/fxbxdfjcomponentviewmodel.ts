
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
        "resourceId": "fileName_bf12f155_vj53",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "fileName_bf12f155_vj53",
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
          "resourceId": "fileName_bf12f155_uxch",
          "defaultI18nValue": "多行文本框",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "fileName_bf12f155_uxch",
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
        "formatter": {
          "type": "none"
        }
      },
      {
        "type": "GridField",
        "resourceId": "filePath_96ab041a_gbcz",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "filePath_96ab041a_gbcz",
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
          "resourceId": "filePath_96ab041a_n5kh",
          "defaultI18nValue": "多行文本框",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "filePath_96ab041a_n5kh",
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
        "formatter": {
          "type": "none"
        }
      },
      {
        "type": "GridField",
        "resourceId": "fileSize_587bc7c4_yb8b",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "fileSize_587bc7c4_yb8b",
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
          "resourceId": "fileSize_587bc7c4_mxx2",
          "defaultI18nValue": "数值框",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "fileSize_587bc7c4_mxx2",
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