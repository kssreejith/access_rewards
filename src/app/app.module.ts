import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { RegisterService } from 'app/shared/services/register.service';
import { OfferService } from 'app/shared/services/offer.service';
import { LoginService } from 'app/shared/services/login.service';
import { TranscationHistoryService } from 'app/shared/services/transcation_history.service';
import { ProfileService } from 'app/shared/services/profile.service';
import { TruncateModule } from 'ng2-truncate';
import { NguiMapModule } from '@ngui/map';
import { WebStorageService } from 'app/shared/services/web-storage.service';
import { AppConfigurationService } from 'app/shared/services/app-configuration.service';
import { WindowRefService } from './window.service';
import { ContactService } from 'app/shared/services/contact.service';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CanActivateViaAuthGuard } from './authGuard.service';
import { ParticlesModule } from 'angular-particle';
import { ParticleComponent } from './particle.component';
import { CarouselModule } from 'ngx-bootstrap';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { OverlayModule } from 'angular-io-overlay';
import { DatePickerModule } from 'angular-io-datepicker/src/datepicker/index';

@NgModule({
  declarations: [
    AppComponent,
    ParticleComponent
  ],
  imports: [
    OverlayModule,
    DatePickerModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    PublicViewsModule,
    PrivateviewsModule,
    RouterModule,
    appRouting,
    HeaderModule,
    AuthHeaderModule,
    SideMenuModule,
    ReactiveFormsModule,
    TruncateModule,
    BrowserAnimationsModule,
    ParticlesModule,
    ToastModule.forRoot(),
    CarouselModule.forRoot(),
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.cubeGrid,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '10px',
      primaryColour: 'blue',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff'
    }),
    NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyDU7PYdFvUZjLLwyBX4uA-psFtF6-OjpIo' })

  ],
  providers: [CanActivateViaAuthGuard, ContactService, WindowRefService,
    BrandService, ApiService, BaseHttpService, RegisterService, OfferService, LoginService,
    TranscationHistoryService, ProfileService, WebStorageService, AppConfigurationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
