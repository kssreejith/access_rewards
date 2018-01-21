import { Component } from '@angular/core';
import { ProfileService } from 'app/shared/services/profile.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  public userDetails: any;
  constructor(public profileService: ProfileService) {
    this.getProfileDetails();
  }

  getProfileDetails() {

    const demo = '<Request>' +
      '<EasyId>9446173962</EasyId>' +
      '<SecurityToken>4U28faapggN7BFWgL2etQNvx8pfvsK6xZIhvdqUsyyn1+DvVk2yQv5vPY5t0QloFMvyEJZJWHVGzYQN3domQo0FPHwhTus7yo9bi0fvuUe9NT+57iRJpOXadYjZg/oc9QAvccqaaiVAC01xzmGLrPL053YVr0OnqQ2TGWrwBWH4AvP3JFQkmpoJyc9TtU8Nkb/33fjqxvjdMUIlnzQXip1Xa3Ooib1+k+b46Va5698U=</SecurityToken>' +
      '<FirstName></FirstName>' +
      '<LastName></LastName>' +
      '<DateOfBirth></DateOfBirth>' +
      '<MobileNo></MobileNo>' +
      '<PageSize>10</PageSize>' +
      '<PageNumber>1</PageNumber>' +
      '<SortExpression>LastUpdated</SortExpression>' +
      '<SortDirection>desc</SortDirection>' +
      '<MemberShipCardNumber></MemberShipCardNumber>' +
      '</Request>';

    let responseData: any;
    this.profileService.getProfileDetails('http://LPaaSwebapi.revalweb.com/api/Searchmember', demo).subscribe(
      data => responseData = data,
      error => {
        console.error('api ERROR');
      },
      () => {
        console.log('responseData', responseData);
        this.userDetails = responseData.data;

      });
  }

}
