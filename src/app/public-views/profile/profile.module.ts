import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
