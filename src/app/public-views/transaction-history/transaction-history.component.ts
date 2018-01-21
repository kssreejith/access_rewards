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

    const demo = '<Request>' +
      '<EasyId>9446173962</EasyId>' +
      '<SecurityToken>4U28faapggN7BFWgL2etQNvx8pfvsK6xZIhvdqUsyyn1+DvVk2yQv5vPY5t0QloFMvyEJZJWHVGzYQN3domQo0FPHwhTus7yo9bi0fvuUe9NT+57iRJpOXadYjZg/oc9QAvccqaaiVAC01xzmGLrPL053YVr0OnqQ2TGWrwBWH4AvP3JFQkmpoJyc9TtU8Nkb/33fjqxvjdMUIlnzQXip1Xa3Ooib1+k+b46Va5698U=</SecurityToken>' +
      '<TransactionTypeId>0</TransactionTypeId>' +
      '<TransactionDetailsCount>30</TransactionDetailsCount>' +
      '<PageSize>10</PageSize>' +
      '<PageNumber>1</PageNumber>' +
      '</Request>';

    let responseData: any;
    this.transcationHistory.getTranscationHistory('http://LPaaSwebapi.revalweb.com/api/GetCustomerTransactionDetails', demo).subscribe(
      data => responseData = data,
      error => {
        console.error('api ERROR');
      },
      () => {
        console.log('responseData', responseData);
        this.transcationHistoryList = responseData.data;

      });
  }
}
