import { Component } from '@angular/core';
import { BrandService } from 'app/shared/services/brand.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'points-calculator',
  templateUrl: './points-calculator.component.html'
})
export class PointsCalculatorComponent {
  public brands: any;
  public amountCalculated: any = '0000';
  public signupForm: FormGroup;

  constructor(
    public brandService: BrandService,
    public fb: FormBuilder
  ) {
    // Use the formbuilder to build the Form model
    this.signupForm = this.fb.group({
      amount: ['', Validators.required]
    })
  }

  calculate() {
    console.log(this.signupForm.value);
    this.amountCalculated = (this.signupForm.value.amount / 100) * 4;
  }

}
