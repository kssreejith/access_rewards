import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OurbrandComponent } from './ourbrand.component';
import { AuthHeaderModule } from 'app/shared/layouts/auth-header/auth-header.module';

@NgModule({
  declarations: [
    OurbrandComponent
  ],
  imports: [
    BrowserModule,
    AuthHeaderModule
  ],
  exports: [
    OurbrandComponent
  ]
})
export class OurbrandModule { }
