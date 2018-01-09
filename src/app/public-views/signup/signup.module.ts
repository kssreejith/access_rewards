import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SignupComponent } from './signup.component';

@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    SignupComponent
  ]
})
export class SignupModule { }
