
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
        "resourceId": "billType_0ac6dd9f_rsnc",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "billType_0ac6dd9f_rsnc",
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
          "path": "billType",
          "isExpression": false,
          "value": "billType"
        },
        "dataField": "billType",
        "dataType": "enum",
        "multiLanguage": false,
        "caption": "报销类型",
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "enumData": [
          {
            "name": "差旅费",
            "value": "CL"
          },
          {
            "name": "手机费",
            "value": "SJ"
          },
          {
            "name": "交通费",
            "value": "JT"
          }
        ],
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
        "updateOn": "change",
        "formatter": {
          "type": "none"
        }
      },
      {
        "type": "GridField",
        "resourceId": "employee_Employee_Name_24534726_vdxd",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "employee_Employee_Name_24534726_vdxd",
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
          "path": "employee_Employee_Name",
          "isExpression": false,
          "value": "employee_Employee_Name"
        },
        "dataField": "employee.employee_Name",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "报销人",
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
        "resourceId": "code_729c8ec9_ukae",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "code_729c8ec9_ukae",
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
          "path": "code",
          "isExpression": false,
          "value": "code"
        },
        "dataField": "code",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "单据编号",
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
        "linkedLabelEnabled": true,
        "updateOn": "blur",
        "formatter": {
          "type": "none"
        }
      },
      {
        "type": "GridField",
        "resourceId": "department_Department_name_8e551f99_w82g",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "department_Department_name_8e551f99_w82g",
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
          "path": "department_Department_name",
          "isExpression": false,
          "value": "department_Department_name"
        },
        "dataField": "department.department_name",
        "dataType": "string",
        "multiLanguage": false,
        "caption": "所属部门",
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
        "resourceId": "totalSum_25592d80_8whb",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "totalSum_25592d80_8whb",
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
          "path": "totalSum",
          "isExpression": false,
          "value": "totalSum"
        },
        "dataField": "totalSum",
        "dataType": "number",
        "multiLanguage": false,
        "caption": "报帐金额",
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "aggregate": {
          "type": "max",
          "formatter": {
            "precision": 0,
            "thousand": ",",
            "prefix": "",
            "suffix": "元",
            "decimal": ".",
            "type": "number"
          }
        },
        "groupAggregate": {
          "type": "sum",
          "formatter": {
            "type": "none"
          },
          "align": "right"
        },
        "linkedLabelEnabled": false,
        "updateOn": "blur",
        "formatter": {
          "type": "number",
          "precision": 2,
          "thousand": ",",
          "decimal": ".",
          "prefix": "￥",
          "suffix": ""
        }
      },
      {
        "type": "GridField",
        "resourceId": "billState_BillState_e77749d1_2qzj",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "billState_BillState_e77749d1_2qzj",
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
          "path": "billState_BillState",
          "isExpression": false,
          "value": "billState_BillState"
        },
        "dataField": "billState.billState",
        "dataType": "enum",
        "multiLanguage": false,
        "caption": "单据状态",
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "enumData": [
          {
            "name": "制单",
            "value": "Billing"
          },
          {
            "name": "提交审批",
            "value": "SubmitApproval"
          },
          {
            "name": "审批通过",
            "value": "Approved"
          },
          {
            "name": "审批不通过",
            "value": "ApprovalNotPassed"
          }
        ],
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
        "resourceId": "createDate_ac6fab1f_45bs",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "createDate_ac6fab1f_45bs",
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
          "path": "createDate",
          "isExpression": false,
          "value": "createDate"
        },
        "dataField": "createDate",
        "dataType": "datetime",
        "multiLanguage": false,
        "caption": "制单日期",
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
        "resourceId": "auditStatus_5aeb26bc_5jnn",
        "visible": {
          "useQuote": false,
          "isExpression": false,
          "value": true
        },
        "id": "auditStatus_5aeb26bc_5jnn",
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
          "path": "auditStatus",
          "isExpression": false,
          "value": "auditStatus"
        },
        "dataField": "auditStatus",
        "dataType": "enum",
        "multiLanguage": false,
        "caption": "稽核状态",
        "draggable": false,
        "frozen": "none",
        "sortable": true,
        "resizeable": true,
        "enumData": [
          {
            "name": "未稽核",
            "value": "None"
          },
          {
            "name": "通过",
            "value": "Passed"
          },
          {
            "name": "未通过",
            "value": "Reject"
          }
        ],
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
        "updateOn": "change",
        "formatter": {
          "type": "none"
        }
      }
    ],
    "multiSelect": true,
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

    @NgCommand({
        name: 'datagridcomponentviewmodelAudit1',
        params: {
            audit_id: '{DATA~/data-grid-component/id}',
            audit_flag: '1',
            refresh_数据刷新命令名称: 'Load1',
            refresh_数据刷新命令对应的FrameId: 'root-component'
        },
        paramDescriptions: {
            audit_id: { type: '' },
            audit_flag: { type: '' },
            refresh_数据刷新命令名称: { type: '' },
            refresh_数据刷新命令对应的FrameId: { type: '' }
        }
    })
    public datagridcomponentviewmodelAudit1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'datagridcomponentviewmodelAudit2',
        params: {
            audit_id: '{DATA~/data-grid-component/id}',
            audit_flag: '2',
            refresh_数据刷新命令名称: 'Load1',
            refresh_数据刷新命令对应的FrameId: 'root-component'
        },
        paramDescriptions: {
            audit_id: { type: '' },
            audit_flag: { type: '' },
            refresh_数据刷新命令名称: { type: '' },
            refresh_数据刷新命令对应的FrameId: { type: '' }
        }
    })
    public datagridcomponentviewmodelAudit2(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'datagridcomponentviewmodelView1',
        params: {
            url: 'c5aede54-ebe1-48fd-bb60-b5deccb7594c',
            params: '{"action":"LoadAndView1", "id":"{DATA~/data-grid-component/id}"}',
            idToView: '',
            enableRefresh: '',
            tabName: '',
            destructuring: ''
        },
        paramDescriptions: {
            url: { type: 'string' },
            params: { type: 'string' },
            idToView: { type: 'string' },
            enableRefresh: { type: 'string' },
            tabName: { type: 'string' },
            destructuring: { type: 'string' }
        }
    })
    public datagridcomponentviewmodelView1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'datagridcomponentviewmodelRemove1',
        params: {
            id: '{DATA~/data-grid-component/id}',
            refreshCommandName: '',
            refreshCommandFrameId: '',
            successMsg: ''
        },
        paramDescriptions: {
            id: { type: 'string' },
            refreshCommandName: { type: 'string' },
            refreshCommandFrameId: { type: 'string' },
            successMsg: { type: 'string' }
        }
    })
    public datagridcomponentviewmodelRemove1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'datagridcomponentviewmodelEdit1',
        params: {
            url: 'c5aede54-ebe1-48fd-bb60-b5deccb7594c',
            params: '{"action":"LoadAndEdit1", "id":"{DATA~/data-grid-component/id}"}',
            idToEdit: '',
            enableRefresh: '',
            tabName: '',
            destructuring: ''
        },
        paramDescriptions: {
            url: { type: 'string' },
            params: { type: 'string' },
            idToEdit: { type: 'string' },
            enableRefresh: { type: 'string' },
            tabName: { type: 'string' },
            destructuring: { type: 'string' }
        }
    })
    public datagridcomponentviewmodelEdit1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'datagridcomponentviewmodelviewChangeLog1',
        params: {
        }
    })
    public datagridcomponentviewmodelviewChangeLog1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'datagridcomponentviewmodelprintByIds1',
        params: {
            beMetaId: '60ba9ce3-65bc-475f-8462-a26de73534c6',
            ids: '{UISTATE~/data-grid-component/ids}'
        },
        paramDescriptions: {
            beMetaId: { type: 'string' },
            ids: { type: 'string' }
        }
    })
    public datagridcomponentviewmodelprintByIds1(commandParam?: any): Observable<any> { return; }

}