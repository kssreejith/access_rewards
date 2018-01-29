import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OtpComponent } from './otp.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OtpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    OtpComponent
  ]
})
export class OtpModule { }
