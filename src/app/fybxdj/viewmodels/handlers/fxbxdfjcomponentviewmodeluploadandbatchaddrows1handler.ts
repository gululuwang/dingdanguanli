
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { AttachmentService as AttachmentService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'fxbxdfjcomponentviewmodelUploadAndBatchAddRows1'
})
export class fxbxdfjcomponentviewmodelUploadAndBatchAddRows1Handler extends CommandHandler {
    constructor(
        public _AttachmentService1: AttachmentService1
    ) {
        super();
    }

    schedule() {
        this.addTask('uploadAndBatchAddRows', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/attachmentInfoFieldPath}', 
                '{COMMAND~/params/rootDirId}', 
                '{COMMAND~/params/subDirName}', 
                '{COMMAND~/params/fileType}'
                    ];
            return this.invoke(this._AttachmentService1, 'uploadAndBatchAddRows', args, context);
        });

    }
}