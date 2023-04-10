
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "Employee",
    nodeCode: "employee"
})
export class GspUser48d8Entity extends Entity {

    @NgField({
        originalDataField: 'Employee',
        dataField: 'employee',
        primary: true,
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Employee.Employee',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    employee: string;

    @NgField({
        originalDataField: 'Code',
        dataField: 'employee_Code',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Employee.Employee_Code',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    employee_Code: string;

    @NgField({
        originalDataField: 'Name',
        dataField: 'employee_Name',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Employee.Employee_Name',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    employee_Name: string;

}