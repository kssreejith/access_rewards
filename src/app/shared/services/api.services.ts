import { Injectable, } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions, BaseRequestOptions, URLSearchParams } from '@angular/http';

@Injectable()
export class ApiService {
    headers: Headers;
    options: RequestOptions;
    constructor(private http: Http) {

        this.options = new RequestOptions({ headers: this.headers });
    }

    createHeader(headers: Headers) {
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'q=0.8;application/json;q=0.9');

        return new Promise((resolve, reject) => {
            //   if (this.global.state['token']) {
            //     headers.append('Authorization', 'token ' + this.global.state['token']);
            //   }
            resolve(headers);
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
            this.createHeader(header)
                .then(() => {
                    const options = new RequestOptions({ headers: header });
                    this.http.post(url, params, options)
                        .subscribe(response => {
                            observer.next(response);
                            observer.complete();
                        }, (e) => {
                            observer.error(e);
                        });
                });
        });
    }

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
