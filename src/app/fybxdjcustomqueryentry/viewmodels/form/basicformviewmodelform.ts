
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: 'FYBXDJCustomQueryEntry_frm',
    enableValidate: false
})

@Injectable()
export class BasicFormViewmodelForm extends Form {
    @NgFormControl({
        id: 'emp_202c708f_nx6h',
        name: "{{emp_202c708f_nx6h}}",
        binding: 'emp',
        updateOn: 'blur',
        defaultI18nValue: '报销人',
    })
    emp: FormControl;

    @NgFormControl({
        id: 'org_e82e807a_1t1d',
        name: "{{org_e82e807a_1t1d}}",
        binding: 'org',
        updateOn: 'blur',
        defaultI18nValue: '所属部门',
    })
    org: FormControl;

}