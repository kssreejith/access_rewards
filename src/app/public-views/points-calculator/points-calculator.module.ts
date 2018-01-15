import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PointsCalculatorComponent } from './points-calculator.component';
import { AuthHeaderModule } from 'app/shared/layouts/auth-header/auth-header.module';


@NgModule({
  declarations: [
    PointsCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AuthHeaderModule
  ],
  exports: [
    PointsCalculatorComponent
  ]
})
export class PointsCalculatorModule { }
