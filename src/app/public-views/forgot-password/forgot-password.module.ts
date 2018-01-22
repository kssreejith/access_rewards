import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ForgotPasswordComponent } from './forgot-password.component';
import { HeaderModule } from 'app/shared/layouts/header/header.module';

@NgModule({
  declarations: [
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule
  ],
  exports: [
    ForgotPasswordComponent
  ]
})
export class ForgotPasswordModule { }
