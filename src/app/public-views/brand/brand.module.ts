import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrandComponent } from './brand.component';
import { AuthHeaderModule } from 'app/shared/layouts/auth-header/auth-header.module';

@NgModule({
  declarations: [
    BrandComponent
  ],
  imports: [
    BrowserModule,
    AuthHeaderModule
  ],
  exports: [
    BrandComponent
  ]
})
export class BrandModule { }
