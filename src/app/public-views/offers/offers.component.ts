import { Component } from '@angular/core';
import { OfferService } from 'app/shared/services/offer.service';
import { BrandService } from 'app/shared/services/brand.service';
import { AppSettings } from 'app/app.constant';

@Component({
  selector: 'offers',
  templateUrl: './offers.component.html'
})
export class OffersComponent {
  public offers: any;
  public brands: any;
  public offerDetails: any;
  public sliderPagination = 0;
  public showDiv = false;
  constructor(
    public offerService: OfferService,
    public brandService: BrandService
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

  closeDiv() {
    this.showDiv = false;
    console.log('showDiv hide');

  }
  getOfferData(id?: number) {
    this.sliderPagination = 0;
    console.log('showDiv');

    let responseData: any;
    this.offerService.getOfferData(AppSettings.API_ENDPOINT + AppSettings.fetchOffers + '/' + id, '').subscribe(
      data => responseData = data,
      error => {
        console.error('api ERROR');
      },
      () => {
        console.log('responseData', responseData);
        this.showDiv = true;
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
