import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { AuthHeaderModule } from 'app/shared/layouts/auth-header/auth-header.module';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AuthHeaderModule
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }
