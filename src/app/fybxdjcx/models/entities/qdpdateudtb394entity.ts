
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "CreateDate",
    nodeCode: "createDate"
})
export class QdpDateUdtB394Entity extends Entity {

    @NgField({
        originalDataField: 'Equal',
        dataField: 'equal',
        originalDataFieldType: 'Date',
        initValue: '0001-01-01T00:00:00',
        path: 'CreateDate.Equal',
    })
    equal: string;

    @NgField({
        originalDataField: 'Begin',
        dataField: 'begin',
        originalDataFieldType: 'Date',
        initValue: '0001-01-01T00:00:00',
        path: 'CreateDate.Begin',
    })
    begin: string;

    @NgField({
        originalDataField: 'End',
        dataField: 'end',
        originalDataFieldType: 'Date',
        initValue: '0001-01-01T00:00:00',
        path: 'CreateDate.End',
    })
    end: string;

}