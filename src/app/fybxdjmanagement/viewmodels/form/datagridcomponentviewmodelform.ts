
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '报销单',
    enableValidate: false
})

@Injectable()
export class DataGridComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'code',
        name: "{{code_729c8ec9_ukae}}",
        binding: 'code',
        updateOn: 'blur',
        defaultI18nValue: '单据编号',
    })
    code: FormControl;

    @NgFormControl({
        id: 'employee.employee_Name',
        name: "{{employee_Employee_Name_24534726_vdxd}}",
        binding: 'employee.employee_Name',
        updateOn: 'blur',
        defaultI18nValue: '报销人',
    })
    employee_Employee_Name: FormControl;

    @NgFormControl({
        id: 'department.department_name',
        name: "{{department_Department_name_8e551f99_w82g}}",
        binding: 'department.department_name',
        updateOn: 'blur',
        defaultI18nValue: '所属部门',
    })
    department_Department_name: FormControl;

    @NgFormControl({
        id: 'totalSum',
        name: "{{totalSum_25592d80_8whb}}",
        binding: 'totalSum',
        updateOn: 'blur',
        defaultI18nValue: '报帐金额',
    })
    totalSum: FormControl;

    @NgFormControl({
        id: 'billType',
        name: "{{billType_0ac6dd9f_rsnc}}",
        binding: 'billType',
        updateOn: 'change',
        defaultI18nValue: '报销类型',
    })
    billType: FormControl;

    @NgFormControl({
        id: 'auditStatus',
        name: "{{auditStatus_5aeb26bc_5jnn}}",
        binding: 'auditStatus',
        updateOn: 'change',
        defaultI18nValue: '稽核状态',
    })
    auditStatus: FormControl;

    @NgFormControl({
        id: 'createDate',
        name: "{{createDate_ac6fab1f_45bs}}",
        binding: 'createDate',
        updateOn: 'blur',
        valueConverter: new DateConverter('yyyy-MM-dd'),
        defaultI18nValue: '制单日期',
    })
    createDate: FormControl;

    @NgFormControl({
        id: 'billState.billState',
        name: "{{billState_BillState_e77749d1_2qzj}}",
        binding: 'billState.billState',
        updateOn: 'change',
        defaultI18nValue: '单据状态',
    })
    billState_BillState: FormControl;

}