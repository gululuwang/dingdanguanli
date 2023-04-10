
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { FYBXDJCustomQueryFrmEntity } from './entities/fybxdjcustomqueryfrmentity';

import { FYBXDJCustomQueryFrmProxy } from './fybxdjcustomqueryfrmproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/fssp/fssc/v1.0/fybxdjcustomquery_frm',
    entityType: FYBXDJCustomQueryFrmEntity
})
export class FYBXDJCustomQueryFrmRepository extends BefRepository<FYBXDJCustomQueryFrmEntity> {
    public name = 'FYBXDJCustomQueryFrmRepository';

    public proxy: FYBXDJCustomQueryFrmProxy;
    public paginationInfo = {
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(FYBXDJCustomQueryFrmProxy, null);
    }
}