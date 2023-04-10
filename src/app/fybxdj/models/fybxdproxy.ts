
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, catchError } from 'rxjs/operators';
import { BefProxy, UriService, Uri } from '@farris/bef';
@Injectable()
export class FYBXDProxy extends BefProxy {

    private apiUrl = 'api/fssp/fssc/v1.0/fybxdj_frm';

    constructor(
        httpClient: HttpClient,
        uriService: UriService) {
        super(httpClient, uriService);
        this.baseUri = uriService.extendUri(this.apiUrl);
    }
    UpdateAttachment(
        updateAttachInfo: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/updateattachment',{
        });
        const url = uri.toString();
        const method = 'PUT';
        const options = {
            params: {
            },
            headers: {
            },
            body: {
                requestInfo: null,
                updateAttachInfo: updateAttachInfo,
            }
        };
        return this.invoke(url, method, options);
    }
    UpdateAttachmentWithProptyName(
        updateAttachInfo: any,
        propertyName: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/updateattachmentwithproptyname',{
        });
        const url = uri.toString();
        const method = 'PUT';
        const options = {
            params: {
            },
            headers: {
            },
            body: {
                requestInfo: null,
                updateAttachInfo: updateAttachInfo,
                propertyName: propertyName,
            }
        };
        return this.invoke(url, method, options);
    }
    BatchUploadAttachment(
        batchUploadInfo: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/batchuploadattachment',{
        });
        const url = uri.toString();
        const method = 'PUT';
        const options = {
            params: {
            },
            headers: {
            },
            body: {
                requestInfo: null,
                batchUploadInfo: batchUploadInfo,
            }
        };
        return this.invoke(url, method, options);
    }
    BatchUploadAttachmentWithProptyName(
        batchUploadInfo: any,
        propertyName: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/batchuploadattachmentwithproptyname',{
        });
        const url = uri.toString();
        const method = 'PUT';
        const options = {
            params: {
            },
            headers: {
            },
            body: {
                requestInfo: null,
                batchUploadInfo: batchUploadInfo,
                propertyName: propertyName,
            }
        };
        return this.invoke(url, method, options);
    }
    AuditBill(
        flag: any,
        id: any,){
        const uri = new Uri(this.uriService.extendUri(this.apiUrl) + '/service/auditbill',{
        });
        const url = uri.toString();
        const method = 'PUT';
        const options = {
            params: {
            },
            headers: {
            },
            body: {
                requestInfo: null,
                flag: flag,
                id: id,
            }
        };
        return this.invoke(url, method, options);
    }
}