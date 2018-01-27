import { Injectable, } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions, BaseRequestOptions, URLSearchParams } from '@angular/http';
import { WebStorageService } from 'app/shared/services/web-storage.service';

@Injectable()
export class ApiService {
    headers: Headers;
    options: RequestOptions;
    constructor(private http: Http, private _webStorageService: WebStorageService) {

        this.options = new RequestOptions({ headers: this.headers });
    }

    createHeader(headers: Headers) {
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return new Promise((resolve, reject) => {
            //   if (this.global.state['token']) {
            //     headers.append('Authorization', 'token ' + this.global.state['token']);
            //   }
            resolve(headers);
        });
    }

    createLassHeader(headers: Headers) {
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'q=0.8;application/json;q=0.9');

        return new Promise((resolve, reject) => {
            //   if (this.global.state['token']) {
            //     headers.append('Authorization', 'token ' + this.global.state['token']);
            //   }
            resolve(headers);
        });
    }

    getTablez(url: string, param: any): Observable<any> {
        const header = new Headers();
        return Observable.fromPromise(this.createHeader(header))
            .map(() => {
                // const options = new BaseRequestOptions();
                // options.withCredentials = true;
                // options.headers = header;
                const params: URLSearchParams = new URLSearchParams();
                for (const key in param) {
                    if (param.hasOwnProperty(key)) {
                        const val = param[key];
                        params.set(key, val);
                    }
                }

                this.options = new RequestOptions({ headers: header, search: params });
                return this.options;
            })
            .switchMap((options) => this.http.get(url, options))
            .catch((err: Error | Response) => {
                if (err instanceof Response && err.status === 401) {
                }
                return Observable.throw(err);
            });
    }
    get(url: string, param: any): Observable<any> {

        const params: URLSearchParams = new URLSearchParams();
        for (const key in param) {
            if (param.hasOwnProperty(key)) {
                const val = param[key];
                params.set(key, val);
            }
        }
        const userToken: any = this._webStorageService.getData('generateSecurityToken');
        if (userToken) {
            params.set('SecurityToken', userToken);

        }

        const headers = new Headers();
        this.createHeader(headers);

        this.options = new RequestOptions({ headers: headers, search: params });
        return this.http
            .get(url, this.options)
            .map(this.extractData)
            .catch(this.handleError);
    }
    private extractData(res: Response) {
        const body = res.json();
        if (body) {
            return body
        } else {
            return {}
        }
    }

    public handleError(error: any) {

        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }


    post(url, params): Observable<any> {

        return new Observable(observer => {
            const header = new Headers();
            this.createLassHeader(header)
                .then(() => {
                    const options = new RequestOptions({ headers: header });
                    const userToken: any = this._webStorageService.getData('generateSecurityToken');
                    if (userToken) {
                        params.SecurityToken = userToken;

                    }
                    this.http.post(url, params, options)
                        .subscribe(response => {
                            console.log(response);
                            observer.next(response);
                            // console.log(this.xml2json(response));
                            observer.complete();
                        }, (e) => {
                            console.log('eroor in post');

                            observer.error(e);
                        });
                });
        });
    }
    objectToXml(obj) {
        let xml = '';

        for (const prop in obj) {
            if (!obj.hasOwnProperty(prop)) {
                continue;
            }

            if (obj[prop] === undefined) {
                continue;

            }

            xml += '<' + prop + '>';
            if (typeof obj[prop] === 'object') {
                xml += this.objectToXml(new Object(obj[prop]));

            } else {
                xml += obj[prop];

            }

            xml += '</' + prop + '>';
        }

        return xml;
    }
    xml2json(xml) {

        // Create the return object
        let obj = {};

        if (xml.nodeType === 1) { // element
            // do attributes
            if (xml.attributes.length > 0) {
                obj['@attributes'] = {};
                for (let j = 0; j < xml.attributes.length; j++) {
                    const attribute = xml.attributes.item(j);
                    obj['@attributes'][attribute.nodeName] = attribute.nodeValue;
                }
            }
        } else if (xml.nodeType === 3) { // text
            obj = xml.nodeValue;
        }

        // do children
        if (xml.hasChildNodes()) {
            for (let i = 0; i < xml.childNodes.length; i++) {
                const item = xml.childNodes.item(i);
                const nodeName = item.nodeName;
                if (typeof (obj[nodeName]) === 'undefined') {
                    obj[nodeName] = this.xml2json(item);
                } else {
                    if (typeof (obj[nodeName].push) === 'undefined') {
                        const old = obj[nodeName];
                        obj[nodeName] = [];
                        obj[nodeName].push(old);
                    }
                    obj[nodeName].push(this.xml2json(item));
                }
            }
        }
        return obj;
    };
    delete(url) {
        return new Observable(observer => {
            const header = new Headers();
            this.createHeader(header)
                .then(() => {
                    return this.http.delete(url, { headers: header, withCredentials: true })
                        .subscribe(response => {
                            observer.next(response);
                            observer.complete();
                        });
                });
        });
    }

}
