import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { ApiService } from './api.services';

@Injectable()
export class BrandService {
    constructor(public http: Http, private apiService: ApiService) {

    }
    getBrandData(url: string, param?: any) {
        return new Observable(observer => {
            this.apiService.post(url, param)
                .map((res: any) => res.json())
                .subscribe(res => {
                    observer.next(res);
                    observer.complete();
                });
        });

    }
}
