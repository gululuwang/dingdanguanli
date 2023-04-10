
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '报销单附件',
    enableValidate: true
})

@Injectable()
export class FxbxdfjComponentViewmodelForm extends Form {
    @NgFormControl({
        id: 'fileName',
        name: "{{fileName_bf12f155_vj53}}",
        binding: 'fileName',
        defaultI18nValue: '文件名',
    })
    fileName: FormControl;

    @NgFormControl({
        id: 'filePath',
        name: "{{filePath_96ab041a_gbcz}}",
        binding: 'filePath',
        defaultI18nValue: '文件路径',
    })
    filePath: FormControl;

    @NgFormControl({
        id: 'fileSize',
        name: "{{fileSize_587bc7c4_yb8b}}",
        binding: 'fileSize',
        defaultI18nValue: '文件大小',
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
    fileSize: FormControl;

}