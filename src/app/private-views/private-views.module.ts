import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { privateRoute, privateViewsProviders } from './private-views.routes';
import { PrivateViewsComponent } from './private-views.component';
import { DashboardModule } from './dashboard/dashboard.module'
@NgModule({
  declarations: [
    PrivateViewsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    privateRoute,
    
    DashboardModule

  ],
  exports: [PrivateViewsComponent]
})
export class PrivateviewsModule { }
