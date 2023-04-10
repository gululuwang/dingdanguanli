
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { FYBXDJFrmFYBXDJExtendedServiceService as FYBXDJFrmFYBXDJExtendedServiceService1 } from '../../services/fybxdj_frm_fybxdj_extended_service';

@Injectable()
@NgCommandHandler({
    commandName: 'basicformviewmodelsetOrgId1'
})
export class basicformviewmodelsetOrgId1Handler extends CommandHandler {
    constructor(
        public _FYBXDJFrmFYBXDJExtendedServiceService1: FYBXDJFrmFYBXDJExtendedServiceService1
    ) {
        super();
    }

    schedule() {
        this.addTask('setOrganization', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._FYBXDJFrmFYBXDJExtendedServiceService1, 'setOrganization', args, context);
        });

    }
}