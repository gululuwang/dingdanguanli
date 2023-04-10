import { Injectable } from '@angular/core';
import { ChgdrListUiService } from '@gsp-cmp/chgdr';
import { AppContext } from '@farris/devkit';

@Injectable()
export class FYBXDJManagementFrmViewChangeLogService {
    constructor(
        private context: AppContext,
        private changeLogService: ChgdrListUiService) { }

    public showChangeLog() {
        const entityId = "60ba9ce3-65bc-475f-8462-a26de73534c6";
        const dataId = this.context.getFrameContext('data-grid-component').bindingData.list.currentItem.getValue("id");
        this.changeLogService.showDialog(entityId, dataId);
    }
}
