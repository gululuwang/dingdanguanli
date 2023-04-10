
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

@Injectable()
export class DataGridComponentViewmodel extends ViewModel {
    public bindingPath = '/';
    // farrisDataGrid列集合定义 在对应component中赋值
    public dataGridColumns:any;
    // datGrid 列集合名称 用以bindData使用
    public dataGridColumnsName:string;

    public dom = {
  "dataGrid": {
    "type": "DataGrid",
    "resourceId": "dataGrid",
    "visible": {
      "useQuote": false,
      "isExpression": false,
      "value": true
    },
    "id": "dataGrid",
    "size": {},
    "readonly": {
      "useQuote": false,
      "isExpression": false,
      "value": false
    },
    "fields": [
      {
        "type": "GridField",
        "resourceId": "organization_7fc48a21_ugdf",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "organization_7fc48a21_ugdf",
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
          "path": "organization",
          "isExpression": false,
          "value": "organization"
        },
        "dataField": "organization",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "组织",
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
        "resourceId": "employee_47dac0eb_eab3",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "employee_47dac0eb_eab3",
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
          "path": "employee",
          "isExpression": false,
          "value": "employee"
        },
        "dataField": "employee",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "人员",
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
        "resourceId": "totalMoney_f5f93ce3_ig1x",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "totalMoney_f5f93ce3_ig1x",
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
          "path": "totalMoney",
          "isExpression": false,
          "value": "totalMoney"
        },
        "dataField": "totalMoney",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "报销总额",
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
        "resourceId": "limitMoney_5733ee90_m790",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "limitMoney_5733ee90_m790",
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
          "path": "limitMoney",
          "isExpression": false,
          "value": "limitMoney"
        },
        "dataField": "limitMoney",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "报销限额",
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
    "multiSelect": false,
    "showLineNumber": false,
    "lineNumberTitle": "#",
    "groupTotalText": "Total",
    "filterable": false,
    "groupable": false,
    "rowClass": ""
  }
};
    @NgCommand({
        name: 'ChangePage1',
        params: {
            loadCommandName: 'Filter1',
            loadCommandFrameId: 'root-component'
        },
        paramDescriptions: {
            loadCommandName: { type: 'string' },
            loadCommandFrameId: { type: 'string' }
        }
    })
    public ChangePage1(commandParam?: any): Observable<any> { return; }

}