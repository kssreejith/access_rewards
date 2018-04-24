import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { ApiService } from './api.services';

@Injectable()
export class ProfileService {
  constructor(public http: Http, private apiService: ApiService) {

  }
  getProfileDetails(url: string, param?: any) {
    return new Observable(observer => {
      this.apiService.post(url, param)
        .map((res: any) => res.json())
        .subscribe(response => {
			if(response.MemberResponse){
				observer.next(response.MemberResponse);
			}else{
				observer.next(response);
			}
          observer.complete();
        });
    });

  }
  getProfileDetailsUae(url: string, param?: any) {
    return new Observable(observer => {
      this.apiService.post(url, param)
        .map((res: any) => res.json())
        .subscribe(response => {
          console.log("res", response);
          observer.next(response);
          observer.complete();
        });
    });

  }
  getCustomerAvailablePoints(url: string, param?: any) {
    return new Observable(observer => {
      this.apiService.post(url, param)
        .map((res: any) => res.json())
        .subscribe(response => {
          console.log("res", response);
          observer.next(response);
          observer.complete();
        });
    });

  }
}
