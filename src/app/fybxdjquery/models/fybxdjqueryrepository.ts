
import { Injectable, Injector } from '@angular/core';
import { NgRepository } from '@farris/devkit';
import { BefRepository, NgVariable } from '@farris/bef';
import { FYBXDJQueryEntity } from './entities/fybxdjqueryentity';

import { FYBXDJQueryProxy } from './fybxdjqueryproxy';

@Injectable()
@NgRepository({
    apiUrl: 'api/fssp/fssc/v1.0/fybxdjquery',
    entityType: FYBXDJQueryEntity
})
export class FYBXDJQueryRepository extends BefRepository<FYBXDJQueryEntity> {
    public name = 'FYBXDJQueryRepository';

    public proxy: FYBXDJQueryProxy;
    public paginationInfo = {
        FYBXDJQueryEntity: {
            pageSize: 20,
        }
    };
    constructor(injector: Injector) {
        super(injector);
        this.proxy = injector.get(FYBXDJQueryProxy, null);
    }
}