import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PageLoaderComponent } from './page-loader.component';

@NgModule({
  declarations: [
    PageLoaderComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    PageLoaderComponent
  ]
})
export class PageLoaderModule { }
