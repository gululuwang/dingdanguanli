
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "FYBXDJQuery",
    nodeCode: "fybxdjQuerys"
})
export class FYBXDJQueryEntity extends Entity {

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
        originalDataField: 'organization',
        dataField: 'organization',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'organization',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    organization: string;

    @NgField({
        originalDataField: 'employee',
        dataField: 'employee',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'employee',

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
        originalDataField: 'totalMoney',
        dataField: 'totalMoney',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'totalMoney',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    totalMoney: string;

    @NgField({
        originalDataField: 'limitMoney',
        dataField: 'limitMoney',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'limitMoney',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    limitMoney: string;

}