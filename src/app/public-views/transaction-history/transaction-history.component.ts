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
