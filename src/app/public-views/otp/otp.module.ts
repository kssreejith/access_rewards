import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OtpComponent } from './otp.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from 'app/shared/layouts/header/header.module';
import { AuthHeaderModule } from 'app/shared/layouts/auth-header/auth-header.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr';

@NgModule({
  declarations: [
    OtpComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderModule,
    AuthHeaderModule,
    BrowserAnimationsModule,
    ToastModule.forRoot()
  ],
  exports: [
    OtpComponent
  ]
})
export class OtpModule { }
