
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

@Injectable()
export class FybxdmxComponentViewmodel extends ViewModel {
    public bindingPath = '/fybxdmxs';
    // farrisDataGrid列集合定义 在对应component中赋值
    public dataGrid_fybxdmxColumns:any;
    // datGrid 列集合名称 用以bindData使用
    public dataGridColumnsName:string;

    public dom = {
  "dataGrid_fybxdmx": {
    "type": "DataGrid",
    "resourceId": "dataGrid_fybxdmx",
    "visible": {
      "useQuote": false,
      "isExpression": false,
      "value": true
    },
    "id": "dataGrid_fybxdmx",
    "size": {},
    "readonly": {
      "useQuote": false,
      "isExpression": false,
      "value": false
    },
    "fields": [
      {
        "type": "GridField",
        "resourceId": "detailDate_eedd91e4_udbb",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "detailDate_eedd91e4_udbb",
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
          "path": "detailDate",
          "isExpression": false,
          "value": "detailDate"
        },
        "dataField": "detailDate",
        "dataType": "datetime",
        "multiLanguage": false,
        "caption": "费用日期",
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
          "resourceId": "detailDate_eedd91e4_od1q",
          "defaultI18nValue": "日期选择",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "detailDate_eedd91e4_od1q",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "detailDate",
            "isExpression": false,
            "value": "detailDate"
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
        "updateOn": "blur",
        "formatter": {
          "type": "date",
          "dateFormat": "yyyy-MM-dd HH:mm:ss"
        }
      },
      {
        "type": "GridField",
        "resourceId": "amount_39d389fe_li64",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "amount_39d389fe_li64",
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
          "path": "amount",
          "isExpression": false,
          "value": "amount"
        },
        "dataField": "amount",
        "dataType": "number",
        "multiLanguage": false,
        "caption": "报销金额",
        "editor": {
          "type": "FarrisNumberSpinner",
          "isTextArea": true,
          "resourceId": "amount_39d389fe_3quf",
          "defaultI18nValue": "数值框",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "amount_39d389fe_3quf",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "amount",
            "isExpression": false,
            "value": "amount"
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
      },
      {
        "type": "GridField",
        "resourceId": "invoiceNumer_7de3f793_a171",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "invoiceNumer_7de3f793_a171",
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
          "path": "invoiceNumer",
          "isExpression": false,
          "value": "invoiceNumer"
        },
        "dataField": "invoiceNumer",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "发票号码",
        "editor": {
          "type": "TextBox",
          "isTextArea": true,
          "resourceId": "invoiceNumer_7de3f793_au9a",
          "defaultI18nValue": "文本",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "invoiceNumer_7de3f793_au9a",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "invoiceNumer",
            "isExpression": false,
            "value": "invoiceNumer"
          },
          "disable": false,
          "maxLength": 36,
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
        "updateOn": "blur",
        "formatter": {
          "type": "none"
        }
      },
      {
        "type": "GridField",
        "resourceId": "note_0b71525a_vzq3",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "note_0b71525a_vzq3",
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
          "path": "note",
          "isExpression": false,
          "value": "note"
        },
        "dataField": "note",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "费用说明",
        "editor": {
          "type": "MultiTextBox",
          "isTextArea": true,
          "resourceId": "note_0b71525a_w8dj",
          "defaultI18nValue": "多行文本框",
          "visible": {
            "useQuote": false,
            "isExpression": false,
            "value": true
          },
          "id": "note_0b71525a_w8dj",
          "size": {},
          "readonly": {
            "useQuote": false,
            "isExpression": false,
            "value": false
          },
          "binding": {
            "type": "Form",
            "path": "note",
            "isExpression": false,
            "value": "note"
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
        name: 'fybxdmxAddItem1',
        params: {
        }
    })
    public fybxdmxAddItem1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'fybxdmxRemoveItem1',
        params: {
            id: '{DATA~/#{fybxdmx-component}/fybxdmxs/id}',
            successMsg: ''
        },
        paramDescriptions: {
            id: { type: 'string' },
            successMsg: { type: '' }
        }
    })
    public fybxdmxRemoveItem1(commandParam?: any): Observable<any> { return; }

}