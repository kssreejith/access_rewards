import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { AuthHeaderModule } from 'app/shared/layouts/auth-header/auth-header.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AuthHeaderModule,
    RouterModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
