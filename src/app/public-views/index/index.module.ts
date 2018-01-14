import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IndexComponent } from './index.component';
import { HeaderModule } from 'app/shared/layouts/header/header.module';
import { AuthHeaderModule } from 'app/shared/layouts/auth-header/auth-header.module';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    AuthHeaderModule
  ],
  exports: [
    IndexComponent
  ]
})
export class IndexModule { }
