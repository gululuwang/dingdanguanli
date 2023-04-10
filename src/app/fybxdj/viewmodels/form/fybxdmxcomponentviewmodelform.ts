
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
        name: "{{detailDate_eedd91e4_udbb}}",
        binding: 'detailDate',
        updateOn: 'blur',
        valueConverter: new DateConverter('yyyy-MM-dd'),
        defaultI18nValue: '费用日期',
    })
    detailDate: FormControl;

    @NgFormControl({
        id: 'amount',
        name: "{{amount_39d389fe_li64}}",
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
        name: "{{invoiceNumer_7de3f793_a171}}",
        binding: 'invoiceNumer',
        updateOn: 'blur',
        defaultI18nValue: '发票号码',
        validRules: [
            {
                type: 'required',
                constraints: [true],
            }
        ]
    })
    invoiceNumer: FormControl;

    @NgFormControl({
        id: 'note',
        name: "{{note_0b71525a_vzq3}}",
        binding: 'note',
        updateOn: 'blur',
        defaultI18nValue: '费用说明',
    })
    note: FormControl;

}