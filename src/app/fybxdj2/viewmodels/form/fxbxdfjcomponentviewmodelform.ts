
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
        name: "{{fileName_39d19ec2_t7qh}}",
        binding: 'fileName',
        updateOn: 'blur',
        defaultI18nValue: '文件名',
    })
    fileName: FormControl;

    @NgFormControl({
        id: 'filePath',
        name: "{{filePath_40ee3186_vf3k}}",
        binding: 'filePath',
        updateOn: 'blur',
        defaultI18nValue: '文件路径',
    })
    filePath: FormControl;

    @NgFormControl({
        id: 'fileSize',
        name: "{{fileSize_efec9ebc_hzi1}}",
        binding: 'fileSize',
        updateOn: 'blur',
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