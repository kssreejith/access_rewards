import { Component } from '@angular/core';
import { TranscationHistoryService } from 'app/shared/services/transcation_history.service';

@Component({
  selector: 'transaction-history',
  templateUrl: './transaction-history.component.html'
})
export class TransactionHistoryComponent {
  public transcationHistoryList: any;
  constructor(
    public transcationHistory: TranscationHistoryService
  ) {
    this.getTranscationHistory();

  }
  getTranscationHistory() {

    const demo = {
      'EasyId': 9599111327,
      'TransactionTypeId': 0
    };

    let responseData: any;
    this.transcationHistory.getTranscationHistory('http://lpaaswebapi.easyrewardz.com/api/GetCustomerTransactionDetails', demo).subscribe(
      data => responseData = data,
      error => {
        console.error('api ERROR');
      },
      () => {
        console.log('responseData', responseData);
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
