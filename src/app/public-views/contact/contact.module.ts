import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }
