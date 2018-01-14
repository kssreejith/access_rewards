import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
