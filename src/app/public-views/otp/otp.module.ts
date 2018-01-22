import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OtpComponent } from './otp.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    OtpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [
    OtpComponent
  ]
})
export class OtpModule { }
