import { Component } from '@angular/core';
import { ProfileService } from 'app/shared/services/profile.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'app/shared/services/register.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  public userDetails: any;
  // Gender list for the select control element
  genderList: string[];
  signupForm: FormGroup;



  day: number;
  month: string;
  year: number;

  // tslint:disable-next-line:max-line-length
  // tslint:disable-next-line:member-ordering
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  years = [];

  // Inject the formbuilder into the constructor
  constructor(private fb: FormBuilder, public registerService: RegisterService, public profileService: ProfileService) {
    this.getProfileDetails();
    // Use the formbuilder to build the Form model
    this.signupForm = this.fb.group({
      FirstName: ['', Validators.required],
      MobileNo: ['', Validators.required],
      day: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
      email: ['', [Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      terms: ['', Validators.requiredTrue],
      UserName: ['apiuser@Tablez', Validators.requiredTrue],
      StoreCode: ['DemoA', Validators.requiredTrue],
      ChannelCode: ['Online', Validators.requiredTrue]
    });
  }

  getProfileDetails() {

    const demo = {
      Request: {
        'EasyId': 9446173962,
        // tslint:disable-next-line:max-line-length
        'SecurityToken': '4U28faapggN7BFWgL2etQNvx8pfvsK6xZIhvdqUsyyn1+DvVk2yQv5vPY5t0QloFMvyEJZJWHVGzYQN3domQo0FPHwhTus7yo9bi0fvuUe9NT+57iRJpOXadYjZg/oc9QAvccqaaiVAC01xzmGLrPL053YVr0OnqQ2TGWrwBWH4AvP3JFQkmpoJyc9TtU8Nkb/33fjqxvjdMUIlnzQXip1Xa3Ooib1+k+b46Va5698U=',
        'SortExpression': 'LastUpdated',
        'SortDirection': 'desc',
      }
    };

    let responseData: any;
    this.profileService.getProfileDetails('api/Searchmember', demo).subscribe(
      data => responseData = data,
      error => {
        console.error('api ERROR');
      },
      () => {
        console.log('responseData', responseData);
        this.userDetails = responseData;

      });
  }

}
