import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IndexComponent } from './index.component';
import { HeaderModule } from 'app/shared/layouts/header/header.module';
import { AuthHeaderModule } from 'app/shared/layouts/auth-header/auth-header.module';
import { TruncateModule } from 'ng2-truncate';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    AuthHeaderModule,
    TruncateModule
  ],
  exports: [
    IndexComponent
  ]
})
export class IndexModule { }
