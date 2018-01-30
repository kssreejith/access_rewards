import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TransactionHistoryComponent } from './transaction-history.component';
import { AuthHeaderModule } from 'app/shared/layouts/auth-header/auth-header.module';
import { HeaderModule } from 'app/shared/layouts/header/header.module';


@NgModule({
  declarations: [
    TransactionHistoryComponent
  ],
  imports: [
    BrowserModule,
    AuthHeaderModule,
    HeaderModule
  ],
  exports: [
    TransactionHistoryComponent
  ]
})
export class TransactionHistoryModule { }
