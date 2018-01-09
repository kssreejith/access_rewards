import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';


@NgModule({
  declarations: [
    HeaderComponent

  ],
  imports: [
    BrowserModule,
   
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
