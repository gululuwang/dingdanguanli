
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

@Injectable()
export class BasicFormViewmodel extends ViewModel {
    public bindingPath = '/';
    public dom = {};
    @NgCommand({
        name: 'basicformviewmodelclearEmployeeOnDepartmentChanged1',
        params: {
        }
    })
    public basicformviewmodelclearEmployeeOnDepartmentChanged1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'basicformviewmodelsetOrgId1',
        params: {
        }
    })
    public basicformviewmodelsetOrgId1(commandParam?: any): Observable<any> { return; }

}