import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SignupComponent } from './signup.component';
import { HeaderModule } from 'app/shared/layouts/header/header.module';

@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule
  ],
  exports: [
    SignupComponent
  ]
})
export class SignupModule { }
