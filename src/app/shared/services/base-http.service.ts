import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from 'environments/environment';
import { Router, ActivatedRoute } from '@angular/router';
import { AppConfigurationService } from './app-configuration.service';
import { WebStorageService } from './web-storage.service';
import { BroadcastService } from './broadcast.service';
declare var _: any;

@Injectable()
export class BaseHttpService {
    private _apiUrl: string;
    private _successCodes: any[];
    private _errorCodes: any[];

    /**Constructor function */
    constructor(private _http: Http,
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _appConfig: AppConfigurationService,
        private _webStorageService: WebStorageService, private _broadcastService: BroadcastService) {
        this._apiUrl = environment.url;
        this._successCodes = _appConfig.apiSuccessCodes;
        this._errorCodes = _appConfig.apiErrorCodes;

    };

    /** Function for setting the request headers*/
    private _setRequestHeader(headers: Headers) {
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'q=0.8;application/json;q=0.9');
        const userToken: any = this._webStorageService.getData('user');
        if (userToken.hasOwnProperty('auth')) {
            headers.append('Auth', `${userToken.auth}`);
        }
        headers.append('Platform', `${this._appConfig.platform}`);

    }

    /** Function for setting the  url format */
    private _setUrl(url): string {
        let urlString = '';
        _.forEach(url, function (urlValue, urlPart) {
            urlString = urlString + '/' + urlPart;
            if (urlValue) {
                urlString = urlString + '/' + urlValue;
            }
        });
        urlString = urlString + '/';
        return this._apiUrl + urlString
    }
    /**Function for sering the query string params */
    private _setQueryString(queryParams: object): any {
        const params: URLSearchParams = new URLSearchParams();
        _.forEach(queryParams, function (value, key) {

            params.set(key, value);
        });
        return params;
    }

    /**
     * Function for processing the API response
     * statusCode - 0 for error,1 for success
     * */
    private _responseHandler(response: Response) {
        let statusCode = 0;
        let responseData: any;
        if (_.indexOf(this._successCodes, response.status) > -1) {
            statusCode = 1;
        }

        responseData = {
            data: response.json(),
            status: statusCode
        };

        if (response.headers.get('Auth')) {
            responseData.auth = response.headers.get('Auth');
        }
        if (response.headers.get('Status-Reason')) {
            responseData.message = response.headers.get('Status-Reason');
        }
        if (response.headers.get('Pagination-Page')) {
            responseData.pageNo = response.headers.get('Pagination-Page');
        }
        if (response.headers.get('Pagination-Limit')) {
            responseData.pageLimit = response.headers.get('Pagination-Limit');
        }
        if (response.headers.get('Pagination-Count')) {
            responseData.totalRecord = response.headers.get('Pagination-Count');
        }

        return responseData;
    }

    /** Function for handling the http error */
    private _handleError(error: Response | any) {

        const errorResponse = {
            errorStatus: 0,
            errorMessage: ''
        };
        if (error.status === 400) {
            errorResponse.errorStatus = 1;
            errorResponse.errorMessage = error.headers.get('Status-Reason');
            return Observable.throw(errorResponse);
        } else if (error.status === 401) {
            errorResponse.errorStatus = 1;
            errorResponse.errorMessage = error.headers.get('Status-Reason');
            return Observable.throw(errorResponse);
        } else if (error.status === 403) {
            this._router.navigate(['/error-403']);
            return Observable.throw(errorResponse);
        } else if (error.status === 404) {
            this._router.navigate(['/error-404']);
            return Observable.throw(errorResponse);
        }

    }

    /**Request Interceptor function */
    private _requestInterceptor(disableLoader): void {
        if (!disableLoader) {
            this._broadcastService.broadcastLoader(true);
        }
    }

    /**Response Interceptor function */
    private _responseInterceptor(disableLoader): void {
        if (!disableLoader) {
            this._broadcastService.broadcastLoader(false);
        }
    }

    /** Method: POST- Function for create new iItem Method: POST */
    public create(url: object, body: object, disableLoader?: boolean): Observable<any> {
        this._requestInterceptor(disableLoader);
        const headers = new Headers();
        this._setRequestHeader(headers);
        const options = new RequestOptions({ headers });
        return this._http.post(this._setUrl(url), body, options)
            .map((response: any) => {
                this._responseInterceptor(disableLoader);
                return this._responseHandler(response);
            })
            .catch((error: any) => {
                this._responseInterceptor(disableLoader);
                return this._handleError(error);
            });
    };

    /**Method: PUT Function for update the an existing Item */
    public update(url: object, body: object, disableLoader?: boolean): Observable<any> {
        this._requestInterceptor(disableLoader);
        const headers = new Headers();
        this._setRequestHeader(headers);
        const options = new RequestOptions({ headers });
        return this._http.put(this._setUrl(url), body, options)
            .map((response: any) => {
                this._responseInterceptor(disableLoader);
                return this._responseHandler(response);
            })
            .catch((error: any) => {
                this._responseInterceptor(disableLoader);
                return this._handleError(error);
            });
    }

    /**Method: GET Function for retrieving an item's details */
    public findById(url: object, disableLoader?: boolean): Observable<any> {
        this._requestInterceptor(disableLoader);
        const headers = new Headers();
        this._setRequestHeader(headers);
        const options = new RequestOptions({ headers });
        return this._http.get(this._setUrl(url), options)
            .map((response: any) => {
                this._responseInterceptor(disableLoader);
                return this._responseHandler(response);
            })
            .catch((error: any) => {
                this._responseInterceptor(disableLoader);
                return this._handleError(error);
            });
    }

    /**Method: GET Function for retrieving all item's list */
    public find(url: object, queryParams: object, disableLoader?: boolean): Observable<any> {
        this._requestInterceptor(disableLoader);
        const params = this._setQueryString(queryParams);
        const headers = new Headers();
        this._setRequestHeader(headers);
        const options = new RequestOptions({ headers, params });
        return this._http.get(this._setUrl(url), options)
            .map((response: any) => {
                this._responseInterceptor(disableLoader);
                return this._responseHandler(response);
            })
            .catch((error: any) => {
                this._responseInterceptor(disableLoader);
                return this._handleError(error);
            });
    }

    /**Method: DELETE Function for deleting a single item */
    public delete(url: object, disableLoader?: boolean): Observable<any> {
        this._requestInterceptor(disableLoader);
        const headers = new Headers();
        this._setRequestHeader(headers);
        const options = new RequestOptions({ headers });
        return this._http.delete(this._setUrl(url), options)
            .map((response: any) => {
                this._responseInterceptor(disableLoader);
                return this._responseHandler(response);
            })
            .catch((error: any) => {
                this._responseInterceptor(disableLoader);
                return this._handleError(error);
            });
    }

    /**Method: POST Function for deleting a multiple items */
    public deleteAll(url: object, body: object, disableLoader?: boolean): Observable<any> {
        this._requestInterceptor(disableLoader);
        const headers = new Headers();
        this._setRequestHeader(headers);
        const options = new RequestOptions({ headers });
        return this._http.post(this._setUrl(url), body, options)
            .map((response: any) => {
                this._responseInterceptor(disableLoader);
                return this._responseHandler(response);
            })
            .catch((error: any) => {
                this._responseInterceptor(disableLoader);
                return this._handleError(error);
            });
    }
    /***File convert blob to file  */
    private _convertToImage(theBlob: any, fileName: string, fileType: string) {
        const byteString = atob(theBlob.split(',')[1]);
        const mimeString = theBlob.split(',')[0].split(':')[1].split(';')[0]
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        const file: File = new File([ab], fileName, { type: fileType });
        return file;
    }

    /** Method:File Upload file**/

    public uploadFile(url: object, file: any, body: any, disableLoader?: boolean): Observable<any> {
        this._requestInterceptor(disableLoader);
        const headers = new Headers();
        this._setRequestHeader(headers);
        headers.delete('Content-Type');
        const options = new RequestOptions({ headers });
        const formData: FormData = new FormData();
        let fileImage: any;
        if (body.isCrop) {
            fileImage = this._convertToImage(file, body.fileName, body.fileType);
        } else {
            fileImage = file;
        }
        formData.append('file', fileImage);
        formData.append('Type', body.Type);

        if (body.hasOwnProperty('dealerId')) {
            formData.append('DealerId', body.dealerId);
        }

        if (body.hasOwnProperty('branchId')) {
            formData.append('BranchId', body.branchId);
        }

        return this._http.post(this._setUrl(url), formData, options)
            .map((response: any) => {
                this._responseInterceptor(disableLoader);
                return this._responseHandler(response);
            })
            .catch((error: any) => {
                this._responseInterceptor(disableLoader);
                return this._handleError(error);
            });
    }


}
