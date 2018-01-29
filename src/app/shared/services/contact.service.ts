import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { ApiService } from './api.services';

@Injectable()
export class ContactService {
    constructor(public http: Http, private apiService: ApiService) {

    }
    createContactUs(url: string, param?: any) {

        return new Observable(observer => {
            this.apiService.postCMS(url, param)
                .map((res: any) => res.json())
                .subscribe(res => {
                    console.log("res", res)
                    observer.next(res);
                    observer.complete();
                });
        });

    }
}
