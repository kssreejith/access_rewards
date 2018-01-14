import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthHeaderComponent } from './auth-header.component';


@NgModule({
  declarations: [
    AuthHeaderComponent

  ],
  imports: [
    BrowserModule,
   
  ],
  exports: [
    AuthHeaderComponent
  ]
})
export class AuthHeaderModule { }
