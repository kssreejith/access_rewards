import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact.component';
import { AuthHeaderModule } from 'app/shared/layouts/auth-header/auth-header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AuthHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }
