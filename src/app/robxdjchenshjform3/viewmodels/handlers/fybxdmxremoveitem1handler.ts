
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { SubListDataService as SubListDataService1 } from '@farris/command-services';
import { ListDataService as ListDataService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'fybxdmxRemoveItem1'
})
export class fybxdmxRemoveItem1Handler extends CommandHandler {
    constructor(
        public _SubListDataService1: SubListDataService1,
        public _ListDataService1: ListDataService1
    ) {
        super();
    }

    schedule() {
        this.addTask('remove', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/id}', 
                '{COMMAND~/params/successMsg}'
                    ];
            return this.invoke(this._SubListDataService1, 'remove', args, context);
        });

        this.addTask('queryChild', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/queryChild_过滤}', 
                '{COMMAND~/params/queryChild_排序}'
                    ];
            return this.invoke(this._ListDataService1, 'queryChild', args, context);
        });

        this.addLink('remove', 'queryChild', `1==1`);
    }
}