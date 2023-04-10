
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { FYBXDEntity } from './entities/fybxdentity';

import { FYBXDProxy } from './fybxdproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/fssp/fssc/v1.0/fybxdjmanagement_frm',
    entityType: FYBXDEntity
})
export class FYBXDRepository extends BefRepository<FYBXDEntity> {
    public name = 'FYBXDRepository';

    public proxy: FYBXDProxy;
    public paginationInfo = {
        FYBXDEntity: {
            pageSize: 20,
        }
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(FYBXDProxy, null);
    }
}