import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PointsCalculatorComponent } from './points-calculator.component';
import { AuthHeaderModule } from 'app/shared/layouts/auth-header/auth-header.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PointsCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AuthHeaderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PointsCalculatorComponent
  ]
})
export class PointsCalculatorModule { }
