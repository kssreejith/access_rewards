import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OurbrandComponent } from './ourbrand.component';
import { AuthHeaderModule } from 'app/shared/layouts/auth-header/auth-header.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    OurbrandComponent
  ],
  imports: [
    BrowserModule,
    AuthHeaderModule,
    RouterModule
  ],
  exports: [
    OurbrandComponent
  ]
})
export class OurbrandModule { }
