import { Component } from '@angular/core';
import { BrandService } from 'app/shared/services/brand.service';
import { Router } from '@angular/router';

@Component({
  selector: 'brand',
  templateUrl: './brand.component.html'
})
export class BrandComponent {
  public brands: any;
  constructor(
    public brandService: BrandService,
    public router: Router
  ) {

    this.getBrandData();

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

  getBrandDetails(id?: number) {
    this.router.navigate(['/ourbrand', id], { skipLocationChange: true });

  }
}
