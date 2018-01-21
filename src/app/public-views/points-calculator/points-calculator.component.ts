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

    this.getBrandData();

    // Use the formbuilder to build the Form model
    this.signupForm = this.fb.group({
      amount: ['', Validators.required]
    })
  }

  calculate() {
    console.log(this.signupForm.value);
    this.amountCalculated = (this.signupForm.value.amount / 100) * 4;
  }
  getBrandData() {

    let responseData: any;
    this.brandService.getBrandData('http://www.myaccessrewards.com/accessrewards/index.php/Api/v1.1/fetchBrands/1', '').subscribe(
      data => responseData = data,
      error => {
        console.error('api ERROR');
      },
      () => {
        console.log('responseData', responseData);
        this.brands = responseData.data;

      });
  }
}
