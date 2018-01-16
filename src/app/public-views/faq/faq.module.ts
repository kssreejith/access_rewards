import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FaqComponent } from './faq.component';
import { AuthHeaderModule } from 'app/shared/layouts/auth-header/auth-header.module';

@NgModule({
  declarations: [
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AuthHeaderModule
  ],
  exports: [
    FaqComponent
  ]
})
export class FaqModule { }
