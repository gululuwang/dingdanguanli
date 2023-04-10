
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { FYBXDJFrmFYBXDJExtendedServiceService as FYBXDJFrmFYBXDJExtendedServiceService1 } from '../../services/fybxdj_frm_fybxdj_extended_service';

@Injectable()
@NgCommandHandler({
    commandName: 'basicformviewmodelclearEmployeeOnDepartmentChanged1'
})
export class basicformviewmodelclearEmployeeOnDepartmentChanged1Handler extends CommandHandler {
    constructor(
        public _FYBXDJFrmFYBXDJExtendedServiceService1: FYBXDJFrmFYBXDJExtendedServiceService1
    ) {
        super();
    }

    schedule() {
        this.addTask('clearEmployeeAfterDepartmentChanged', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._FYBXDJFrmFYBXDJExtendedServiceService1, 'clearEmployeeAfterDepartmentChanged', args, context);
        });

    }
}