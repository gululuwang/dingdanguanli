
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { FYBXDJCustomQueryResultFrmEntity } from './entities/fybxdjcustomqueryresultfrmentity';

import { FYBXDJCustomQueryResultFrmProxy } from './fybxdjcustomqueryresultfrmproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/fssp/fssc/v1.0/fybxdjcustomqueryresult_frm',
    entityType: FYBXDJCustomQueryResultFrmEntity
})
export class FYBXDJCustomQueryResultFrmRepository extends BefRepository<FYBXDJCustomQueryResultFrmEntity> {
    public name = 'FYBXDJCustomQueryResultFrmRepository';

    public proxy: FYBXDJCustomQueryResultFrmProxy;
    public paginationInfo = {
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(FYBXDJCustomQueryResultFrmProxy, null);
    }
}