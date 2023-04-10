
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "Department",
    nodeCode: "department"
})
export class SysOrgB980Entity extends Entity {

    @NgField({
        originalDataField: 'Department',
        dataField: 'department',
        primary: true,
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Department.Department',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    department: string;

    @NgField({
        originalDataField: 'code',
        dataField: 'department_code',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Department.Department_code',

        validRules: [
            {
                type: 'maxLength',
                constraints: [100],
                message: '最大长度为100',
            }
        ]
    })
    department_code: string;

    @NgField({
        originalDataField: 'name',
        dataField: 'department_name',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Department.Department_name',

        validRules: [
            {
                type: 'maxLength',
                constraints: [100],
                message: '最大长度为100',
            }
        ]
    })
    department_name: string;

}