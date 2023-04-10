
import { Entity, NgField, NgObject, EntityList, NgList, NgDynamic, DynamicEntity, NgEntity } from '@farris/devkit';

@NgEntity({
    originalCode: "BillState",
    nodeCode: "billState"
})
export class BillStateE777Entity extends Entity {

    @NgField({
        originalDataField: 'BillState',
        dataField: 'billState',
        originalDataFieldType: 'Enum',
        defaultValue: '',
        initValue: 'Billing',
        path: 'BillState.BillState',
    })
    billState: any;

}