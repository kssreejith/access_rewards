import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthHeaderComponent } from './auth-header.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AuthHeaderComponent

  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [
    AuthHeaderComponent
  ]
})
export class AuthHeaderModule { }
