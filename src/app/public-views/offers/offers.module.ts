import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthHeaderModule } from 'app/shared/layouts/auth-header/auth-header.module';
import { OffersComponent } from 'app/public-views/offers/offers.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    OffersComponent
  ],
  imports: [
    BrowserModule,
    AuthHeaderModule,
    RouterModule
  ],
  exports: [
    OffersComponent
  ]
})
export class OffersModule { }
