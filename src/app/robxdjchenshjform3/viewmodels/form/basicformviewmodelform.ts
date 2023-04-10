
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
        id: 'code_9b3cfccc_673s',
        name: "{{code_9b3cfccc_673s}}",
        binding: 'code',
        defaultI18nValue: '单据编号',
    })
    code: FormControl;

    @NgFormControl({
        id: 'employee_Employee_Name_0e18e40e_p3rc',
        name: "{{employee_Employee_Name_0e18e40e_p3rc}}",
        binding: 'employee.employee_Name',
        defaultI18nValue: '名称',
    })
    employee_Employee_Name: FormControl;

    @NgFormControl({
        id: 'department_Department_name_b9c6e9a5_uo07',
        name: "{{department_Department_name_b9c6e9a5_uo07}}",
        binding: 'department.department_name',
        defaultI18nValue: '名称',
    })
    department_Department_name: FormControl;

    @NgFormControl({
        id: 'totalSum_45b2b624_cvzc',
        name: "{{totalSum_45b2b624_cvzc}}",
        binding: 'totalSum',
        defaultI18nValue: '报帐金额',
    })
    totalSum: FormControl;

    @NgFormControl({
        id: 'billType_77cd12de_kg0h',
        name: "{{billType_77cd12de_kg0h}}",
        binding: 'billType',
        defaultI18nValue: '报销类型',
    })
    billType: FormControl;

}