
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, CommandContext } from '@farris/devkit';

import { AttachmentService as AttachmentService1 } from '@farris/command-services';

@Injectable()
@NgCommandHandler({
    commandName: 'fxbxdfjcomponentviewmodelPreviewByAttachmentInfoFieldPath1'
})
export class fxbxdfjcomponentviewmodelPreviewByAttachmentInfoFieldPath1Handler extends CommandHandler {
    constructor(
        public _AttachmentService1: AttachmentService1
    ) {
        super();
    }

    schedule() {
        this.addTask('previewByAttachmentInfoFieldPath', (context: CommandContext) => {
            const args = [
                '{COMMAND~/params/attachmentInfoFieldPath}', 
                '{COMMAND~/params/rootDirId}', 
                '{COMMAND~/params/ids}'
                    ];
            return this.invoke(this._AttachmentService1, 'previewByAttachmentInfoFieldPath', args, context);
        });

    }
}