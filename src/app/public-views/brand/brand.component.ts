import { Component } from '@angular/core';
import { BrandService } from 'app/shared/services/brand.service';
import { Router } from '@angular/router';
import { AppSettings } from 'app/app.constant';

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

    if (AppSettings.currentCountry === 'india') {
      this.getBrandData();
    } else {
      this.getBrandDataUae();
    }

  }

  getBrandData() {

    let responseData: any;
    this.brandService.getBrandData(AppSettings.API_ENDPOINT + AppSettings.fetchBrands, '').subscribe(
      data => responseData = data,
      error => {
        console.error('api ERROR');
      },
      () => {
        console.log('responseData', responseData);
        this.brands = responseData.data;

      });
  }


  getBrandDataUae() {

    let responseData: any;
    this.brandService.getBrandData(AppSettings.API_ENDPOINT + AppSettings.fetchBrandsUae, '').subscribe(
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
