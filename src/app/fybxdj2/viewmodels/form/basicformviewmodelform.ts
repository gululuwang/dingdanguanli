
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '报销单',
    enableValidate: true
})

@Injectable()
export class BasicFormViewmodelForm extends Form {
    @NgFormControl({
        id: 'code_c11e2af8_37wx',
        name: "{{code_c11e2af8_37wx}}",
        binding: 'code',
        updateOn: 'blur',
        defaultI18nValue: '单据编号',
    })
    code: FormControl;

    @NgFormControl({
        id: 'employee_Employee_Name_96dfd988_jcua',
        name: "{{employee_Employee_Name_96dfd988_jcua}}",
        binding: 'employee.employee_Name',
        updateOn: 'blur',
        defaultI18nValue: '名称',
    })
    employee_Employee_Name: FormControl;

    @NgFormControl({
        id: 'department_Department_name_6eada154_skbb',
        name: "{{department_Department_name_6eada154_skbb}}",
        binding: 'department.department_name',
        updateOn: 'blur',
        defaultI18nValue: '名称',
    })
    department_Department_name: FormControl;

    @NgFormControl({
        id: 'totalSum_a71c0bd6_yt9i',
        name: "{{totalSum_a71c0bd6_yt9i}}",
        binding: 'totalSum',
        updateOn: 'blur',
        defaultI18nValue: '报帐金额',
    })
    totalSum: FormControl;

    @NgFormControl({
        id: 'billType_56c69c6e_nmuw',
        name: "{{billType_56c69c6e_nmuw}}",
        binding: 'billType',
        updateOn: 'change',
        defaultI18nValue: '报销类型',
    })
    billType: FormControl;

    @NgFormControl({
        id: 'subject_3ad7c466_e0zi',
        name: "{{subject_3ad7c466_e0zi}}",
        binding: 'subject',
        updateOn: 'blur',
        defaultI18nValue: '报销项目',
    })
    subject: FormControl;

    @NgFormControl({
        id: 'note_5524a4ad_ovdg',
        name: "{{note_5524a4ad_ovdg}}",
        binding: 'note',
        updateOn: 'blur',
        defaultI18nValue: '报销说明',
    })
    note: FormControl;

    @NgFormControl({
        id: 'billState_BillState_e46f4304_sb8o',
        name: "{{billState_BillState_e46f4304_sb8o}}",
        binding: 'billState.billState',
        updateOn: 'change',
        defaultI18nValue: '状态',
    })
    billState_BillState: FormControl;

}