
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { FYBXDJManagementFrmViewChangeLogService as FYBXDJManagementFrmViewChangeLogService1 } from '../../services/fybxdjmanagement_frm_viewchangelog';

@Injectable()
@NgCommandHandler({
    commandName: 'datagridcomponentviewmodelviewChangeLog1'
})
export class datagridcomponentviewmodelviewChangeLog1Handler extends CommandHandler {
    constructor(
        public _FYBXDJManagementFrmViewChangeLogService1: FYBXDJManagementFrmViewChangeLogService1
    ) {
        super();
    }

    schedule() {
        this.addTask('showChangeLog', (context: CommandContext) => {
            const args = [];
            return this.invoke(this._FYBXDJManagementFrmViewChangeLogService1, 'showChangeLog', args, context);
        });

    }
}