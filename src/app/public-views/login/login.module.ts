import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { AuthHeaderModule } from 'app/shared/layouts/auth-header/auth-header.module';
import { FooterModule } from 'app/shared/layouts/footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'ng2-toastr';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AuthHeaderModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    ToastModule,
    LoadingModule,
    FooterModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
