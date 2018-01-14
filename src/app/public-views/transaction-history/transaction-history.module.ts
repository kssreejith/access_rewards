import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TransactionHistoryComponent } from './transaction-history.component';

@NgModule({
  declarations: [
    TransactionHistoryComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    TransactionHistoryComponent
  ]
})
export class TransactionHistoryModule { }
