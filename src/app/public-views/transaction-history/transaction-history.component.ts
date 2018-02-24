import { Component, OnInit } from '@angular/core';
import { TranscationHistoryService } from 'app/shared/services/transcation_history.service';
import { WebStorageService } from 'app/shared/services/web-storage.service';
import { AppSettings } from 'app/app.constant';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'transaction-history',
  templateUrl: './transaction-history.component.html'
})
export class TransactionHistoryComponent implements OnInit {
  public transcationHistoryList: any;
  public configConstant = AppSettings;
  public fromDate = new Date();
  public toDate = new Date();
  signupForm: FormGroup;
  daypickerConfig = {
    monthFormat: "MM-YYYY",
    closeOnSelect: false,
    format: "MM-YYYY",
    returnedValueType: 'Moment'
  };
  constructor(
    public transcationHistory: TranscationHistoryService,
    private _webStorageService: WebStorageService,
    private fb: FormBuilder,
  ) {
    if (AppSettings.currentCountry === 'india') {
      this.getTranscationHistory();

    } else {
      this.getTranscationHistoryUaeGetTransactions();

    }

  }

  ngOnInit() {
    this.signupForm = this.fb.group({
    });
  }

  getData() {
    this.getTranscationHistoryUaeGetTransactions();
  }
  getTranscationHistoryUaeGetTransactions() {
    var demosss = moment(this.fromDate).format('DD-MM-YYYY')
    const demo = {
      'DateFrom': demosss,
      'DateTo': this.toDate,
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
