import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { appRouting } from './app.routes';
import { AppComponent } from './app.component';
import { PublicViewsModule } from './public-views/public-views.module';
import { PrivateviewsModule } from './private-views/private-views.module'
import { HeaderModule } from 'app/shared/layouts/header/header.module';
import { AuthHeaderModule } from 'app/shared/layouts/auth-header/auth-header.module';
import { SideMenuModule } from 'app/shared/layouts/side-menu/side-menu.module';
import { BrandService } from 'app/shared/services/brand.service';
import { ApiService } from 'app/shared/services/api.services';
import { BaseHttpService } from 'app/shared/services/base-http.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PublicViewsModule,
    PrivateviewsModule,
    RouterModule,
    appRouting,
    HeaderModule,
    AuthHeaderModule,
    SideMenuModule
  ],
  providers: [BrandService, ApiService, BaseHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
