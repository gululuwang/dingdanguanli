
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { SubListDataService as SubListDataService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'fxbxdfjRemoveItem1'
})
export class fxbxdfjRemoveItem1Handler extends CommandHandler {
    constructor(
        public _SubListDataService1: SubListDataService1
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

    }
}