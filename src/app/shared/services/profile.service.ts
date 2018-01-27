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
                .map((res: any) => res)
                .subscribe(rese => {
                    console.log("res", rese._body);
                    const res = {
                        'MemberResponse': {
                            'ReturnCode': '0',
                            'FirstName': 'Gokul',
                            'LastName': 'BS',
                            'Email': 'gokultvm@gmail.com',
                            'Mobile': '9446173962',
                            'ClientID': [],
                            'DateOfBirth': {
                                '@nil': 'true'
                            },
                            'RecordCount': '1',
                            'Title': [],
                            'AccrualPoints': '0',
                            'MembershipCardNumber': [],
                            'ReturnMessage': 'Success.',
                            'CurrentTier': [],
                            'StoreCustomerId': '28',
                            'EndDate': '0001-01-01T00:00:00',
                            'EnrollDate': '2018-01-20T17:06:14.713',
                            'TierEndDate': '0001-01-01T00:00:00',
                            'TierStartDate': '0001-01-01T00:00:00',
                            'TotalPointsRedeemed': '0',
                            'TotalSpends': '0',
                            'Address1': [],
                            'Address2': [],
                            'CustomerType': 'Loyalty',
                            'TotalVisits': '0',
                            'TotalPointsAccrued': '0',
                            'TotalPointsLapsed': '0',
                            'ReferralPoints': '0',
                            'ReferredCount': '0',
                            'RemainingReferrals': '0',
                            'ReferralCode': [],
                            'MobileCountryCode': '91'
                        }
                    }
                    observer.next(res.MemberResponse);
                    observer.complete();
                });
        });

    }
}
