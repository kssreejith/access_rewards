import { Component } from '@angular/core';
import { OfferService } from 'app/shared/services/offer.service';
import { BrandService } from 'app/shared/services/brand.service';

@Component({
  selector: 'offers',
  templateUrl: './offers.component.html'
})
export class OffersComponent {
  public offers: any;
  public brands: any;
  public offerDetails: any;
  public sliderPagination = 0;
  constructor(
    public offerService: OfferService,
    public brandService: BrandService
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
  getOfferData(id?: number) {
    this.sliderPagination = 0;

    let responseData: any;
    this.offerService.getOfferData('http://www.myaccessrewards.com/accessrewards/index.php/Api/v1.1/fetchOffers/' + id, '').subscribe(
      data => responseData = data,
      error => {
        console.error('api ERROR');
      },
      () => {
        console.log('responseData', responseData);
        this.offers = responseData.data;
        this.offerDetails = this.offers[0];

      });
  }

  showOfferDetails(length, position) {
    console.log(this.sliderPagination);
    console.log(this.offers.length);
    console.log(length);
    if (position) {
      this.sliderPagination++;
    } else {
      this.sliderPagination--;
    }
    console.log(this.sliderPagination);

    this.offerDetails = this.offers[this.sliderPagination];

  }


}
