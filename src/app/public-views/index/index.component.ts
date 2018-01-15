import { Component } from '@angular/core';
import { BrandService } from 'app/shared/services/brand.service';

@Component({
  selector: 'index',
  templateUrl: './index.component.html'
})
export class IndexComponent {
  constructor(
    public brandService: BrandService
  ) {

    this.getBrandData();

  }

  getBrandData() {

    let responseData: any;
    this.brandService.getBrandData('http://pelshare.com/tablez/admin/index.php/Api/v1.1/fetchBrands/',
      { 'country_id': 1 }).subscribe(
      data => responseData = data,
      error => {
        console.error('api ERROR');
      },
      () => {
        console.log('responseData', responseData.status);
      });
  }
}
