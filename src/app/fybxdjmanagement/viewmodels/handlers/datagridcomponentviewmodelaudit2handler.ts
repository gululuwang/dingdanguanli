
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { ListDataService as ListDataService1 } from '@farris/command-services';
import { FYBXDJManagementFrmAuditBillService as FYBXDJManagementFrmAuditBillService1 } from '../../services/fybxdjmanagement_frm_auditbill';

@Injectable()
@NgCommandHandler({
    commandName: 'datagridcomponentviewmodelAudit2'
})
export class datagridcomponentviewmodelAudit2Handler extends CommandHandler {
    constructor(
        public _ListDataService1: ListDataService1,
        public _FYBXDJManagementFrmAuditBillService1: FYBXDJManagementFrmAuditBillService1
    ) {
        super();
    }

    schedule() {
        this.addTask('audit', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/audit_id}', 
                '{COMMAND~/params/audit_flag}'
                    ];
            return this.invoke(this._FYBXDJManagementFrmAuditBillService1, 'audit', args, context);
        });

        this.addTask('refresh', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/refresh_数据刷新命令名称}', 
                '{COMMAND~/params/refresh_数据刷新命令对应的FrameId}'
                    ];
            return this.invoke(this._ListDataService1, 'refresh', args, context);
        });

        this.addLink('audit', 'refresh', `1==1`);
    }
}