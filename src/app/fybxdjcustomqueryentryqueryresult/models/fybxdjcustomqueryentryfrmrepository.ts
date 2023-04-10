
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { FYBXDJCustomQueryEntryFrmEntity } from './entities/fybxdjcustomqueryentryfrmentity';

import { FYBXDJCustomQueryEntryFrmProxy } from './fybxdjcustomqueryentryfrmproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/fssp/fssc/v1.0/fybxdjcustomqueryentryqueryresult_frm',
    entityType: FYBXDJCustomQueryEntryFrmEntity
})
export class FYBXDJCustomQueryEntryFrmRepository extends BefRepository<FYBXDJCustomQueryEntryFrmEntity> {
    public name = 'FYBXDJCustomQueryEntryFrmRepository';

    public proxy: FYBXDJCustomQueryEntryFrmProxy;
    public paginationInfo = {
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(FYBXDJCustomQueryEntryFrmProxy, null);
    }
}