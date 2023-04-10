
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "FYBXDMX",
    nodeCode: "fybxdmxs"
})
export class FYBXDMXEntity extends Entity {

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
        originalDataField: 'ParentID',
        dataField: 'parentID',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'ParentID',

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
    parentID: string;

    @NgField({
        originalDataField: 'DetailDate',
        dataField: 'detailDate',
        originalDataFieldType: 'DateTime',
        initValue: '0001-01-01T00:00:00',
        path: 'DetailDate',
        enableTimeZone: true,
    })
    detailDate: string;

    @NgField({
        originalDataField: 'Amount',
        dataField: 'amount',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'Amount',
    })
    amount: any;

    @NgField({
        originalDataField: 'InvoiceNumer',
        dataField: 'invoiceNumer',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'InvoiceNumer',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    invoiceNumer: string;

    @NgField({
        originalDataField: 'Note',
        dataField: 'note',
        originalDataFieldType: 'Text',
        initValue: '',
        path: 'Note',
    })
    note: any;

}