
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '报销单额度查询',
    enableValidate: false
})

@Injectable()
export class DataGridComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'organization',
        name: "{{organization_7fc48a21_ugdf}}",
        binding: 'organization',
        updateOn: 'blur',
        defaultI18nValue: '组织',
    })
    organization: FormControl;

    @NgFormControl({
        id: 'employee',
        name: "{{employee_47dac0eb_eab3}}",
        binding: 'employee',
        updateOn: 'blur',
        defaultI18nValue: '人员',
    })
    employee: FormControl;

    @NgFormControl({
        id: 'totalMoney',
        name: "{{totalMoney_f5f93ce3_ig1x}}",
        binding: 'totalMoney',
        updateOn: 'blur',
        defaultI18nValue: '报销总额',
    })
    totalMoney: FormControl;

    @NgFormControl({
        id: 'limitMoney',
        name: "{{limitMoney_5733ee90_m790}}",
        binding: 'limitMoney',
        updateOn: 'blur',
        defaultI18nValue: '报销限额',
    })
    limitMoney: FormControl;

}