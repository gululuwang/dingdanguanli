
import { Injectable } from '@angular/core';
import { ViewModel, NgCommand } from '@farris/devkit';
import { Observable } from 'rxjs';

import { BasicFormViewmodel } from './basicformviewmodel';

@Injectable()
export class RootViewmodel extends ViewModel {
    public bindingPath = '/';
    public dom = {};
    public childViewModels = {
        'BasicFormViewmodel' : 'basicFormViewmodel'
    }
    public basicFormViewmodel: BasicFormViewmodel;
    @NgCommand({
        name: 'Load1',
        params: {
            action: '{UISTATE~/root-component/action}'
        },
        paramDescriptions: {
            action: { type: 'string' }
        }
    })
    public Load1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'LoadAndAdd1',
        params: {
            transitionAction: 'Create'
        },
        paramDescriptions: {
            transitionAction: { type: 'string' }
        }
    })
    public LoadAndAdd1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'LoadAndView1',
        params: {
            id: '{UISTATE~/root-component/id}',
            transitionAction: 'Cancel'
        },
        paramDescriptions: {
            id: { type: 'string' },
            transitionAction: { type: 'string' }
        }
    })
    public LoadAndView1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'LoadAndEdit1',
        params: {
            id: '{UISTATE~/root-component/id}',
            transitionAction: 'Edit'
        },
        paramDescriptions: {
            id: { type: 'string' },
            transitionAction: { type: 'string' }
        }
    })
    public LoadAndEdit1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Add1',
        params: {
            transitionAction: 'Create'
        },
        paramDescriptions: {
            transitionAction: { type: 'string' }
        }
    })
    public Add1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Edit1',
        params: {
            transitionAction: 'Edit'
        },
        paramDescriptions: {
            transitionAction: { type: '' }
        }
    })
    public Edit1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Save1',
        params: {
            transitionAction: 'Cancel',
            successMsg: ''
        },
        paramDescriptions: {
            transitionAction: { type: 'string' },
            successMsg: { type: '' }
        }
    })
    public Save1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Cancel1',
        params: {
            transitionAction: 'Cancel'
        },
        paramDescriptions: {
            transitionAction: { type: 'string' }
        }
    })
    public Cancel1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'Close1',
        params: {
        }
    })
    public Close1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'SendEvent1',
        params: {
            transitionAction: 'Create'
        },
        paramDescriptions: {
            transitionAction: { type: 'string' }
        }
    })
    public SendEvent1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'route1',
        params: {
            queryId: 'b176c128-cb6e-4dd9-a8a9-6fe737a65090',
            path: 'FYBXDJQueryR'
        },
        paramDescriptions: {
            queryId: { type: 'string' },
            path: { type: 'string' }
        }
    })
    public route1(commandParam?: any): Observable<any> { return; }

    @NgCommand({
        name: 'routeEx1',
        params: {
            queryId: 'b176c128-cb6e-4dd9-a8a9-6fe737a65090',
            appType: 'menu',
            appid: '',
            appEntrance: '',
            funcId: '8810960b-f4d0-4b8c-a452-78ccac129ca1'
        },
        paramDescriptions: {
            queryId: { type: 'string' },
            appType: { type: 'string' },
            appid: { type: 'string' },
            appEntrance: { type: 'string' },
            funcId: { type: 'string' }
        }
    })
    public routeEx1(commandParam?: any): Observable<any> { return; }

}