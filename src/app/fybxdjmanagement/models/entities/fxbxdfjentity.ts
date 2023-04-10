
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';
import { AttachmentInfoF2dbEntity } from './attachmentinfof2dbentity';

@NgEntity({
    originalCode: "FXBXDFJ",
    nodeCode: "fxbxdfjs"
})
export class FXBXDFJEntity extends Entity {

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
        originalDataField: 'FileName',
        dataField: 'fileName',
        originalDataFieldType: 'Text',
        initValue: '',
        path: 'FileName',
    })
    fileName: any;

    @NgField({
        originalDataField: 'FilePath',
        dataField: 'filePath',
        originalDataFieldType: 'Text',
        initValue: '',
        path: 'FilePath',
    })
    filePath: any;

    @NgField({
        originalDataField: 'FileSize',
        dataField: 'fileSize',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'FileSize',
    })
    fileSize: any;

    @NgObject({
        dataField: 'fileInfo',
        originalDataField: 'FileInfo',
        type: AttachmentInfoF2dbEntity
    })
    fileInfo: AttachmentInfoF2dbEntity;
}