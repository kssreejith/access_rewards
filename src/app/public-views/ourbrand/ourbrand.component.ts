import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from 'app/shared/services/brand.service';

@Component({
  selector: 'ourbrand',
  templateUrl: './ourbrand.component.html'
})
export class OurbrandComponent {
  public brandId: number;
  public brandDetails: any;
  constructor(
    public activateRoute: ActivatedRoute,
    public brandService: BrandService,
    public router: Router,

  ) {
    this.activateRoute.params.subscribe(params => {
      this.brandId = params['id'];
      this.getBrandDetails(this.brandId);
    })

  }
  reload() {
    this.router.navigate(['/brand']);
  }
  getBrandDetails(id?: number) {

    let responseData: any;
    this.brandService.getBrandData('http://www.myaccessrewards.com/accessrewards/index.php/Api/v1.1/fetchBrandDetails/' + id, '').subscribe(
      data => responseData = data,
      error => {
        console.error('api ERROR');
      },
      () => {
        console.log('responseData', responseData);
        this.brandDetails = responseData.data;

      });
  }

}
