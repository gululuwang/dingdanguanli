
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { FYBXDEntity } from './entities/fybxdentity';

import { FYBXDProxy } from './fybxdproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/fssp/fssc/v1.0/fybxdj_frm',
    entityType: FYBXDEntity
})
export class FYBXDRepository extends BefRepository<FYBXDEntity> {
    public name = 'FYBXDRepository';

    public proxy: FYBXDProxy;
    @NgVariable({
        mapping: 'orgId',
        originalDataType: 'String',
        category: "remote"
    })
    public orgId: String;

    public paginationInfo = {
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(FYBXDProxy, null);
    }
}