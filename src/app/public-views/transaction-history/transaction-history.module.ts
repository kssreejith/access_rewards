import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TransactionHistoryComponent } from './transaction-history.component';
import { AuthHeaderModule } from 'app/shared/layouts/auth-header/auth-header.module';
import { HeaderModule } from 'app/shared/layouts/header/header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from 'angular-io-overlay';
import { DatePickerModule } from 'angular-io-datepicker/src/datepicker/index';

@NgModule({
  declarations: [
    TransactionHistoryComponent
  ],
  imports: [
    BrowserModule,
    AuthHeaderModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    DatePickerModule,
  ],
  exports: [
    TransactionHistoryComponent
  ]
})
export class TransactionHistoryModule { }
