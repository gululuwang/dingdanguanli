import { Injectable } from '@angular/core';
import { FrameContext} from '@farris/devkit';
import { BefRepository, ResponseInfo } from '@farris/bef';
import {  BeActionService, FormMessageService } from '@farris/command-services';
import { tap } from 'rxjs/operators';

@Injectable()
export class FYBXDJManagementFrmAuditBillService {
  constructor(
        private frameContext: FrameContext,
        private beActionService: BeActionService,
        private messageService: FormMessageService
    ) { }
    // 稽核方法 
    public audit(id, flag) {
        const repository = this.frameContext.repository as BefRepository<any>;
        const requestInfo = repository.restService.buildRequestInfo();
        const actionUri = 'auditbill';
        //此处actionUri为报销单列表Eapi中稽核动作URI尾部字段
        const body = {
            id: id,
            flag: flag,
            requestInfo: requestInfo
        }
        const action$ = this.beActionService.invokeAction(actionUri, 'PUT', null, null, body);
        return action$.pipe(
            tap((responseInfo: ResponseInfo) => {
                this.messageService.info("已稽核完成!");
            })
        )
    }
}
