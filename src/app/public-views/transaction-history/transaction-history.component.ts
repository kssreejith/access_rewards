import { Component } from '@angular/core';
import { TranscationHistoryService } from 'app/shared/services/transcation_history.service';
import { WebStorageService } from 'app/shared/services/web-storage.service';
import { AppSettings } from 'app/app.constant';

@Component({
  selector: 'transaction-history',
  templateUrl: './transaction-history.component.html'
})
export class TransactionHistoryComponent {
  public transcationHistoryList: any;
  public configConstant = AppSettings;

  constructor(
    public transcationHistory: TranscationHistoryService,
    private _webStorageService: WebStorageService
  ) {
    if (AppSettings.currentCountry === 'india') {
      this.getTranscationHistory();

    } else {
      this.getTranscationHistoryUaeGetTransactions();

    }

  }
  getTranscationHistoryUaeGetTransactions() {

    const demo = {
      'DateFrom': '2018-01-12',
      'DateTo': '2018-02-05',
      'secretToken': this._webStorageService.getData('SecretToken')
    };

    let responseData: any;
    this.transcationHistory.getTranscationHistory(
      AppSettings.API_ENDPOINT + AppSettings.uaeGetTransactions, demo).subscribe(
      data => responseData = data,
      error => {
        console.error('api ERROR');
      },
      () => {
        console.log('asdsad', responseData.Data);
        if (responseData.Data) {
          this.transcationHistoryList = responseData.Data;

        }

      });
  }
  getTranscationHistory() {

    const demo = {
      'mobile': this._webStorageService.getData('mobile')
    };

    let responseData: any;
    this.transcationHistory.getTranscationHistory(
      AppSettings.API_ENDPOINT + AppSettings.GetCustomerTransactionDetails, demo).subscribe(
      data => responseData = data,
      error => {
        console.error('api ERROR');
      },
      () => {
        console.log('asdsad', responseData);
        if (responseData.MemberTransactionResponseListDTO) {
          this.transcationHistoryList = responseData.MemberTransactionResponseListDTO;

        }

      });
  }
}
