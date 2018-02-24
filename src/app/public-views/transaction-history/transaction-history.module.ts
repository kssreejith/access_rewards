import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TransactionHistoryComponent } from './transaction-history.component';
import { AuthHeaderModule } from 'app/shared/layouts/auth-header/auth-header.module';
import { HeaderModule } from 'app/shared/layouts/header/header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { DpDatePickerModule } from 'ng2-date-picker';
import { MyDatePickerModule } from 'mydatepicker';

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
    // DpDatePickerModule
    MyDatePickerModule
  ],
  exports: [
    TransactionHistoryComponent
  ]
})
export class TransactionHistoryModule { }
