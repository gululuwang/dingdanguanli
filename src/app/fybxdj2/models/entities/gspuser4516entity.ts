
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "ProjectManager",
    nodeCode: "projectManager"
})
export class GspUser4516Entity extends Entity {

    @NgField({
        originalDataField: 'ProjectManager',
        dataField: 'projectManager',
        primary: true,
        originalDataFieldType: 'String',
        initValue: '',
        path: 'ProjectManager.ProjectManager',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    projectManager: string;

    @NgField({
        originalDataField: 'Code',
        dataField: 'projectManager_Code',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'ProjectManager.ProjectManager_Code',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    projectManager_Code: string;

    @NgField({
        originalDataField: 'Name',
        dataField: 'projectManager_Name',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'ProjectManager.ProjectManager_Name',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    projectManager_Name: string;

}