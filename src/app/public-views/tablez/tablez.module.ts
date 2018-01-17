import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TablezComponent } from './tablez.component';
import { AuthHeaderModule } from 'app/shared/layouts/auth-header/auth-header.module';

@NgModule({
  declarations: [
    TablezComponent
  ],
  imports: [
    BrowserModule,
    AuthHeaderModule
  ],
  exports: [
    TablezComponent
  ]
})
export class TablezModule { }
