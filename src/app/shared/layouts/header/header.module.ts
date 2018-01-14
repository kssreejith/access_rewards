import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';
import { SideMenuModule } from 'app/shared/layouts/side-menu/side-menu.module';
import { SearchMenuModule } from 'app/shared/layouts/search-menu/search-menu.module';


@NgModule({
  declarations: [
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    SideMenuModule
   
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
