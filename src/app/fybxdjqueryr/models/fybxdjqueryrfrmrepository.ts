
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { FYBXDJQueryRFrmEntity } from './entities/fybxdjqueryrfrmentity';

import { FYBXDJQueryRFrmProxy } from './fybxdjqueryrfrmproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/fssp/fssc/v1.0/fybxdjqueryr_frm',
    entityType: FYBXDJQueryRFrmEntity
})
export class FYBXDJQueryRFrmRepository extends BefRepository<FYBXDJQueryRFrmEntity> {
    public name = 'FYBXDJQueryRFrmRepository';

    public proxy: FYBXDJQueryRFrmProxy;
    public paginationInfo = {
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(FYBXDJQueryRFrmProxy, null);
    }
}