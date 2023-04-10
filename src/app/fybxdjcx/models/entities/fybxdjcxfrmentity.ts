
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';
import { QdpDateUdtB394Entity } from './qdpdateudtb394entity';

@NgEntity({
    originalCode: "FYBXDJCX_frm",
    nodeCode: "fybxdjcX_frms"
})
export class FYBXDJCXFrmEntity extends Entity {

    @NgField({
        originalDataField: 'ID',
        dataField: 'id',
        primary: true,
        originalDataFieldType: 'String',
        initValue: '',
        path: 'ID',

        validRules: [
            {
                type: 'required',
                constraints: [true],
            },
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    id: string;

    @NgField({
        originalDataField: 'Employee_Name',
        dataField: 'employee_Name',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Employee_Name',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    employee_Name: string;

    @NgField({
        originalDataField: 'Department_name',
        dataField: 'department_name',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Department_name',

        validRules: [
            {
                type: 'maxLength',
                constraints: [100],
                message: '最大长度为100',
            }
        ]
    })
    department_name: string;

    @NgObject({
        dataField: 'createDate',
        originalDataField: 'CreateDate',
        type: QdpDateUdtB394Entity
    })
    createDate: QdpDateUdtB394Entity;
}