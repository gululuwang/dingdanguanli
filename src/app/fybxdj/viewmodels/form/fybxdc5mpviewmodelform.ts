
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Form, NgFormControl, NgChildForm, NgChildFormArray, NgValidateForm } from '@farris/devkit';
import { DateConverter, MultiLangConverter } from '@farris/kendo-binding';

@Injectable()
@NgValidateForm({
    formGroupName: '高级信息',
    enableValidate: false
})

@Injectable()
export class FYBXDC5mpViewmodelForm extends Form {
    @NgFormControl({
        id: 'project_Project_ProjectName_63900e43_q03x',
        name: "{{project_Project_ProjectName_63900e43_q03x}}",
        binding: 'project.project_ProjectName',
        updateOn: 'blur',
        defaultI18nValue: '所属项目',
    })
    project_Project_ProjectName: FormControl;

    @NgFormControl({
        id: 'auditStatus_a5886f12_rupv',
        name: "{{auditStatus_a5886f12_rupv}}",
        binding: 'auditStatus',
        updateOn: 'change',
        defaultI18nValue: '稽核状态',
    })
    auditStatus: FormControl;

    @NgFormControl({
        id: 'createDate_2e6b26a0_xsyf',
        name: "{{createDate_2e6b26a0_xsyf}}",
        binding: 'createDate',
        updateOn: 'blur',
        valueConverter: new DateConverter('yyyy-MM-dd'),
        defaultI18nValue: '制单日期',
    })
    createDate: FormControl;

    @NgFormControl({
        id: 'note_efee4f8c_klrk',
        name: "{{note_efee4f8c_klrk}}",
        binding: 'note',
        updateOn: 'blur',
        defaultI18nValue: '报销说明',
    })
    note: FormControl;

    @NgFormControl({
        id: 'billState_BillState_f7985202_man1',
        name: "{{billState_BillState_f7985202_man1}}",
        binding: 'billState.billState',
        updateOn: 'change',
        defaultI18nValue: '单据状态',
    })
    billState_BillState: FormControl;

}