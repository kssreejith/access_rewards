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
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return new Promise((resolve, reject) => {
            //   if (this.global.state['token']) {
            //     headers.append('Authorization', 'token ' + this.global.state['token']);
            //   }
            resolve(headers);
        });
    }

    createLassHeader(headers: Headers) {
        headers.append('Content-Type', 'text/plain');
        headers.append('Accept', '*');

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

        // const demo = {
        //     "SecurityToken": "4U28faapggN7BFWgL2etQNvx8pfvsK6xZIhvdqUsyyn1+DvVk2yQv5vPY5t0QloFMvyEJZJWHVGzYQN3domQo0FPHwhTus7yo9bi0fvuUe9NT+57iRJpOXadYjZg/oc9QAvccqaaiVAC01xzmGLrPL053YVr0OnqQ2TGWrwBWH4AvP3JFQkmpoJyc9TtU8Nkb/33fjqxvjdMUIlnzQXip1Xa3Ooib1+k+b46Va5698U=",
        //     "FirstName": "Gokul",
        //     "LastName": "BS",
        //     "DateOfBirth": "01 12 1987",
        //     "PinCode": "695002",
        //     "EmailId": "gokultvm@gmail.com",
        //     "MobileNo": "9446173962",
        //     "EasyPin": "Abc1234",
        //     "UserName": "apiuser@Tablez",
        //     "Gender": "Male",
        //     "MemberShipCardNumber": "",
        //     "StoreCode": "DemoA",
        //     "AssignMembershipCard": "",
        //     "ChannelCode": "Online",
        //     "ReferralCode": "",
        //     "CountryCode": "91",
        //     "ChildName": "",
        //     "ChildDOB": "",
        //     "AnniversaryDate": ""
        // }
        return new Observable(observer => {
            const header = new Headers();
            this.createLassHeader(header)
                .then(() => {
                    const options = new RequestOptions({ headers: header });
                    this.http.post(url, params, options)
                        .subscribe(response => {
                            console.log("hereeee");
                            observer.next(response);
                            observer.complete();
                        }, (e) => {
                            console.log("eroor in post");

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
