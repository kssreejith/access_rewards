import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IndexComponent } from './index.component';
import { HeaderModule } from 'app/shared/layouts/header/header.module';
import { AuthHeaderModule } from 'app/shared/layouts/auth-header/auth-header.module';
import { TruncateModule } from 'ng2-truncate';
import { RouterModule } from '@angular/router';
import { NguiMapModule } from '@ngui/map';
import { FormsModule } from '@angular/forms';
import { ParticlesModule } from 'angular-particle';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    AuthHeaderModule,
    TruncateModule,
    RouterModule,
    FormsModule,
    ParticlesModule,
    NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyDU7PYdFvUZjLLwyBX4uA-psFtF6-OjpIo' })
  ],
  exports: [
    IndexComponent
  ]
})
export class IndexModule { }
