
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

@Injectable()
export class RootViewmodel extends ViewModel {
    public bindingPath = '/';
    public dom = {};
    @NgCommand({
        name: 'Close1',
        params: {
            url: '',
            params: ''
        }
    })
    public Close1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Load1',
        params: {
        }
    })
    public Load1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'filterQDP1',
        params: {
            queryId: '3e7f2cc7-a471-4b93-b41b-adbf529d1268',
            filterCondition: ''
        },
        paramDescriptions: {
            queryId: { type: 'string' },
            filterCondition: { type: 'string' }
        }
    })
    public filterQDP1(commandParam?: any): Observable<any> { return; }

}