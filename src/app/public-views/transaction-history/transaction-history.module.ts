import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TransactionHistoryComponent } from './transaction-history.component';
import { AuthHeaderModule } from 'app/shared/layouts/auth-header/auth-header.module';


@NgModule({
  declarations: [
    TransactionHistoryComponent
  ],
  imports: [
    BrowserModule,
    AuthHeaderModule
  ],
  exports: [
    TransactionHistoryComponent
  ]
})
export class TransactionHistoryModule { }
