import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { AuthHeaderModule } from 'app/shared/layouts/auth-header/auth-header.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AuthHeaderModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastModule,
    LoadingModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
