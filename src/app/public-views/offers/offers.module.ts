import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OffersComponent } from './offers.component';
import { AuthHeaderModule } from 'app/shared/layouts/auth-header/auth-header.module';

@NgModule({
  declarations: [
    OffersComponent
  ],
  imports: [
    BrowserModule,
    AuthHeaderModule
  ],
  exports: [
    OffersComponent
  ]
})
export class OffersModule { }
