
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '报销单明细',
    enableValidate: true
})

@Injectable()
export class FybxdmxComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'detailDate',
        name: "{{detailDate_6f7d777b_0jwn}}",
        binding: 'detailDate',
        updateOn: 'blur',
        valueConverter: new DateConverter('yyyy-MM-dd'),
        defaultI18nValue: '费用日期',
    })
    detailDate: FormControl;

    @NgFormControl({
        id: 'amount',
        name: "{{amount_d5bd1403_qui3}}",
        binding: 'amount',
        updateOn: 'blur',
        defaultI18nValue: '报销金额',
        validRules: [
            {
                type: 'maxValue',
                constraints: [1.7976931348623157e+308],
            },
            {
                type: 'minValue',
                constraints: [-1.7976931348623157e+308],
            }
        ]
    })
    amount: FormControl;

    @NgFormControl({
        id: 'invoiceNumer',
        name: "{{invoiceNumer_2972ead7_coko}}",
        binding: 'invoiceNumer',
        updateOn: 'blur',
        defaultI18nValue: '发票号码',
    })
    invoiceNumer: FormControl;

    @NgFormControl({
        id: 'note',
        name: "{{note_122eea01_jnep}}",
        binding: 'note',
        updateOn: 'blur',
        defaultI18nValue: '费用说明',
    })
    note: FormControl;

}