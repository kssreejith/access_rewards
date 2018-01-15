import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { AuthHeaderModule } from 'app/shared/layouts/auth-header/auth-header.module';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AuthHeaderModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
