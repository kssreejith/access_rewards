import { Component } from '@angular/core';
import { TranscationHistoryService } from 'app/shared/services/transcation_history.service';
import { WebStorageService } from 'app/shared/services/web-storage.service';

@Component({
  selector: 'transaction-history',
  templateUrl: './transaction-history.component.html'
})
export class TransactionHistoryComponent {
  public transcationHistoryList: any;
  constructor(
    public transcationHistory: TranscationHistoryService,
    private _webStorageService: WebStorageService
  ) {
    this.getTranscationHistory();

  }
  getTranscationHistory() {

    const demo = {
      'mobile': this._webStorageService.getData('mobile')
    };

    let responseData: any;
    this.transcationHistory.getTranscationHistory(
      'http://www.myaccessrewards.com/accessrewards/index.php/Api/v1.1/GetCustomerTransactionDetails', demo).subscribe(
      data => responseData = data,
      error => {
        console.error('api ERROR');
      },
      () => {
        console.log('asdsad', responseData);
        const demo = {
          'MemberTransactionResponseListDTO': [{
            'ReturnCode': '0',
            'BillNo': '041120161445270764',
            'BillDate': '2016-11-04T14:45:27.077',
            'TotalBilledAmount': '0.0000',
            'Mobile': '9599111327',
            'TotalAccruedPoints': '55.0000',
            'TotalRedeemPoints': '0.0000',
            'EnrolledDate': '0001-01-01T00:00:00',
            'IsEnableReferralAccruals': 'false',
            'UserName': {
              'CardNumber': []
            },
            'IsVoucher': 'false',
            'IsRefunded': 'false',
            'Code': {
              'Brand': []
            },
            'Narration': 'test',
            'AccruedPoints': '21413.0000',
            'MemberShipCardNumber': {
              'IsPointType': 'true',
              'Tier': 'false',
              'RecordCount': '24'
            },
            'StoreCode': 'demo001'
          },
          {
            'ReturnCode': '0',
            'BillNo': '041120161444115566',
            'BillDate': '2016-11-04T14:44:11.557',
            'TotalBilledAmount': '0.0000',
            'Mobile': '9599111327',
            'TotalAccruedPoints': '55.0000',
            'TotalRedeemPoints': '0.0000',
            'EnrolledDate': '0001-01-01T00:00:00',
            'IsEnableReferralAccruals': 'false',
            'UserName': {
              'CardNumber': []
            },
            'IsVoucher': 'false',
            'IsRefunded': 'false',
            'Code': {
              'Brand': []
            },
            'Narration': 'test',
            'AccruedPoints': '21413.0000',
            'MemberShipCardNumber': {
              'IsPointType': 'true',
              'Tier': 'false',
              'RecordCount': '24'
            },
            'StoreCode': 'demo001'
          }
          ]
        }

        this.transcationHistoryList = demo.MemberTransactionResponseListDTO;

      });
  }
}
