
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "Project",
    nodeCode: "project"
})
export class Projects1d6aEntity extends Entity {

    @NgField({
        originalDataField: 'Project',
        dataField: 'project',
        primary: true,
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Project.Project',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    project: string;

    @NgField({
        originalDataField: 'ProjectCode',
        dataField: 'project_ProjectCode',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Project.Project_ProjectCode',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    project_ProjectCode: string;

    @NgField({
        originalDataField: 'ProjectName',
        dataField: 'project_ProjectName',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Project.Project_ProjectName',

        validRules: [
            {
                type: 'maxLength',
                constraints: [512],
                message: '最大长度为512',
            }
        ]
    })
    project_ProjectName: string;

}