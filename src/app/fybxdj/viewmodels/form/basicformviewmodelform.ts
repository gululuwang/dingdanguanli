
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
        id: 'code_cca98cc9_86mj',
        name: "{{code_cca98cc9_86mj}}",
        binding: 'code',
        updateOn: 'blur',
        defaultI18nValue: '单据编号',
    })
    code: FormControl;

    @NgFormControl({
        id: 'employee_Employee_Name_065687c8_7lwk',
        name: "{{employee_Employee_Name_065687c8_7lwk}}",
        binding: 'employee.employee_Name',
        updateOn: 'blur',
        defaultI18nValue: '报销人',
        validRules: [
            {
                type: 'required',
                constraints: [true],
            }
        ]
    })
    employee_Employee_Name: FormControl;

    @NgFormControl({
        id: 'department_Department_name_eb93a0ec_iwwg',
        name: "{{department_Department_name_eb93a0ec_iwwg}}",
        binding: 'department.department_name',
        updateOn: 'blur',
        defaultI18nValue: '所属部门',
        validRules: [
            {
                type: 'required',
                constraints: [true],
            }
        ]
    })
    department_Department_name: FormControl;

    @NgFormControl({
        id: 'totalSum_747db547_pilq',
        name: "{{totalSum_747db547_pilq}}",
        binding: 'totalSum',
        updateOn: 'blur',
        defaultI18nValue: '报帐金额',
    })
    totalSum: FormControl;

    @NgFormControl({
        id: 'billType_b12fdc9f_vf76',
        name: "{{billType_b12fdc9f_vf76}}",
        binding: 'billType',
        updateOn: 'change',
        defaultI18nValue: '报销类型',
        validRules: [
            {
                type: 'required',
                constraints: [true],
            }
        ]
    })
    billType: FormControl;

    @NgFormControl({
        id: 'subject_42e600ac_aum0',
        name: "{{subject_42e600ac_aum0}}",
        binding: 'subject',
        updateOn: 'blur',
        defaultI18nValue: '报销项目',
        valueConverter: new MultiLangConverter(),
        validRules: [
            {
                type: 'required',
                constraints: [true],
            }
        ]
    })
    subject: FormControl;

}