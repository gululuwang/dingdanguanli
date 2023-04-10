
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';
import { FYBXDMXEntity } from './fybxdmxentity';
import { FXBXDFJEntity } from './fxbxdfjentity';
import { GspUser48d8Entity } from './gspuser48d8entity';
import { SysOrgB980Entity } from './sysorgb980entity';
import { Projects1d6aEntity } from './projects1d6aentity';
import { GspUser4516Entity } from './gspuser4516entity';
import { BillStateBad0Entity } from './billstatebad0entity';
import { ProcessInstanceD6f8Entity } from './processinstanced6f8entity';

@NgEntity({
    originalCode: "FYBXD",
    nodeCode: "fybxds"
})
export class FYBXDEntity extends Entity {

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
        originalDataField: 'Code',
        dataField: 'code',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Code',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    code: string;

    @NgField({
        originalDataField: 'TotalSum',
        dataField: 'totalSum',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'TotalSum',
    })
    totalSum: any;

    @NgField({
        originalDataField: 'BillType',
        dataField: 'billType',
        originalDataFieldType: 'Enum',
        defaultValue: '',
        initValue: 'CL',
        path: 'BillType',
    })
    billType: any;

    @NgField({
        originalDataField: 'SecID',
        dataField: 'secID',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'SecID',

        validRules: [
            {
                type: 'maxLength',
                constraints: [36],
                message: '最大长度为36',
            }
        ]
    })
    secID: string;

    @NgField({
        originalDataField: 'SecLevel',
        dataField: 'secLevel',
        originalDataFieldType: 'Number',
        initValue: 0,
        path: 'SecLevel',
    })
    secLevel: any;

    @NgField({
        originalDataField: 'Subject',
        dataField: 'subject',
        originalDataFieldType: 'String',
        initValue: '',
        path: 'Subject',

        validRules: [
            {
                type: 'maxLength',
                constraints: [100],
                message: '最大长度为100',
            }
        ]
    })
    subject: string;

    @NgField({
        originalDataField: 'Note',
        dataField: 'note',
        originalDataFieldType: 'Text',
        initValue: '',
        path: 'Note',
    })
    note: any;

    @NgField({
        originalDataField: 'AuditStatus',
        dataField: 'auditStatus',
        originalDataFieldType: 'Enum',
        defaultValue: '',
        initValue: 'None',
        path: 'AuditStatus',
    })
    auditStatus: any;

    @NgField({
        originalDataField: 'CreateDate',
        dataField: 'createDate',
        originalDataFieldType: 'DateTime',
        initValue: '0001-01-01T00:00:00',
        path: 'CreateDate',
        enableTimeZone: true,
    })
    createDate: string;

    @NgField({
        originalDataField: 'Version',
        dataField: 'version',
        originalDataFieldType: 'DateTime',
        initValue: '0001-01-01T00:00:00',
        path: 'Version',
        enableTimeZone: true,
    })
    version: string;

    @NgList({
        dataField: 'fybxdmxs',
        originalDataField: '',
        type: FYBXDMXEntity

    })

    fybxdmxs: EntityList<FYBXDMXEntity>;
    @NgList({
        dataField: 'fxbxdfjs',
        originalDataField: '',
        type: FXBXDFJEntity

    })

    fxbxdfjs: EntityList<FXBXDFJEntity>;
    @NgObject({
        dataField: 'employee',
        originalDataField: 'Employee',
        type: GspUser48d8Entity
    })
    employee: GspUser48d8Entity;
    @NgObject({
        dataField: 'department',
        originalDataField: 'Department',
        type: SysOrgB980Entity
    })
    department: SysOrgB980Entity;
    @NgObject({
        dataField: 'project',
        originalDataField: 'Project',
        type: Projects1d6aEntity
    })
    project: Projects1d6aEntity;
    @NgObject({
        dataField: 'projectManager',
        originalDataField: 'ProjectManager',
        type: GspUser4516Entity
    })
    projectManager: GspUser4516Entity;
    @NgObject({
        dataField: 'billState',
        originalDataField: 'BillState',
        type: BillStateBad0Entity
    })
    billState: BillStateBad0Entity;
    @NgObject({
        dataField: 'processInstance',
        originalDataField: 'ProcessInstance',
        type: ProcessInstanceD6f8Entity
    })
    processInstance: ProcessInstanceD6f8Entity;
}