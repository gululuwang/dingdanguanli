
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "FYBXDJCustomQueryEntry_frm",
    nodeCode: "fybxdjCustomQueryEntry_frms"
})
export class FYBXDJCustomQueryEntryFrmEntity extends Entity {

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

}