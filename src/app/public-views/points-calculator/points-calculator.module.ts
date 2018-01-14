import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PointsCalculatorComponent } from './points-calculator.component';

@NgModule({
  declarations: [
    PointsCalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    PointsCalculatorComponent
  ]
})
export class PointsCalculatorModule { }
