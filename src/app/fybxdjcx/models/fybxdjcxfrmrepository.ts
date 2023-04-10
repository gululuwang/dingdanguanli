
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { FYBXDJCXFrmEntity } from './entities/fybxdjcxfrmentity';

import { FYBXDJCXFrmProxy } from './fybxdjcxfrmproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/fssp/fssc/v1.0/fybxdjcx_frm',
    entityType: FYBXDJCXFrmEntity
})
export class FYBXDJCXFrmRepository extends BefRepository<FYBXDJCXFrmEntity> {
    public name = 'FYBXDJCXFrmRepository';

    public proxy: FYBXDJCXFrmProxy;
    public paginationInfo = {
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(FYBXDJCXFrmProxy, null);
    }
}