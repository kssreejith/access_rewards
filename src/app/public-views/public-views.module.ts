import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PublicViewsComponent } from './public-views.component';
import { RouterModule } from '@angular/router';
import { publicRoute } from "./public-views.routes"
/**Sub modules */
import { IndexModule } from './index/index.module'
import { LoginModule } from './login/login.module'
import { ForgotPasswordModule } from './forgot-password/forgot-password.module'
import { ProfileModule } from './profile/profile.module'
import { SignupModule } from './signup/signup.module'
import { TransactionHistoryModule } from './transaction-history/transaction-history.module'
import { PointsCalculatorModule } from './points-calculator/points-calculator.module'
import { ContactModule } from './contact/contact.module'
import { OffersModule } from './offers/offers.module'
import { AboutModule } from './about/about.module'
import { BrandModule } from './brand/brand.module'
import { OurbrandModule } from './ourbrand/ourbrand.module'


/** /Sub modules */
@NgModule({
	declarations: [
		PublicViewsComponent
	],
	imports: [
		BrowserModule,
		RouterModule,
		publicRoute,
		IndexModule,
		LoginModule,
		ForgotPasswordModule,
		ProfileModule,
		SignupModule,
		TransactionHistoryModule,
		PointsCalculatorModule,
		ContactModule,
		OffersModule,
		AboutModule,
		BrandModule,
		OurbrandModule,
	

	],
	exports: [
		PublicViewsComponent
	]
})
export class PublicViewsModule { }
