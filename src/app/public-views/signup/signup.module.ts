import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SignupComponent } from './signup.component';
import { HeaderModule } from 'app/shared/layouts/header/header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SignupComponent
  ]
})
export class SignupModule { }
