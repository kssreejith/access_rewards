import { Component, OnInit } from '@angular/core';
import { TranscationHistoryService } from 'app/shared/services/transcation_history.service';
import { WebStorageService } from 'app/shared/services/web-storage.service';
import { AppSettings } from 'app/app.constant';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'transaction-history',
  templateUrl: './transaction-history.component.html'
})
export class TransactionHistoryComponent implements OnInit {

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd-mm-yyyy',
    showTodayBtn: false,
    inline: false,
  };
  // Initialized to specific date (09.10.2018).
  public modelTo: any = { date: { year: 2018, month: 2, day: 24 } };
  public modelFrom: any = { date: { year: 2018, month: 2, day: 24 } };

  public transcationHistoryList: any;
  public configConstant = AppSettings;
  public fromDate = moment(new Date()).format('DD-MM-YYYY');
  public toDate = moment(new Date()).format('DD-MM-YYYY');
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
    const demo = {
      'DateFrom': (this.modelFrom.formatted) ? this.modelFrom.formatted : this.fromDate,
      'DateTo': (this.modelTo.formatted) ? this.modelTo.formatted : this.toDate,
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
