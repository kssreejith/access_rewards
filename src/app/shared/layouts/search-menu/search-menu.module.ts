import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SearchMenuComponent } from './search-menu.component';


@NgModule({
  declarations: [
    SearchMenuComponent

  ],
  imports: [
    BrowserModule,
   
  ],
  exports: [
    SearchMenuComponent
  ]
})
export class SearchMenuModule { }
