import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ProfileService } from 'app/shared/services/profile.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'app/shared/services/register.service';
import { User } from 'app/public-views/signup/User';
import { WebStorageService } from 'app/shared/services/web-storage.service';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {

  public loading = false;
  availablePoints: any;

  // Property for the user
  private user: User;
  public userDetails: any;
  // Gender list for the select control element
  genderList: string[];
  signupForm: FormGroup;
  public disableClick = false;



  day: number;
  month: string;
  year: number;

  // tslint:disable-next-line:max-line-length
  // tslint:disable-next-line:member-ordering
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  years = [];

  // Inject the formbuilder into the constructor
  constructor(
    private fb: FormBuilder,
    public registerService: RegisterService,
    public profileService: ProfileService,
    private _webStorageService: WebStorageService,
    public toastr: ToastsManager,
    public vcr: ViewContainerRef
  ) {
    this.toastr.setRootViewContainerRef(vcr);
    this.loading = true;



    // Use the formbuilder to build the Form model
    this.signupForm = this.fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      MobileNo: ['', Validators.required],
      day: ['', Validators.required],
      month: ['', Validators.required],
      year: ['', Validators.required],
      email: ['', [Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      ChildName: [''],
      childDay: [''],
      childMonth: [''],
      childYear: [''],
      PinCode: [''],
      annDay: [''],
      annMonth: [''],
      annYear: [''],
      Gender: ['']
    });

  }
  ngOnInit() {
    this.getProfileDetails();
    this.getCustomerAvailablePoints();
    const d = new Date();
    for (let i = (d.getFullYear() - 1); i > (d.getFullYear() - 100); i--) {
      this.years.push(i);
    }
  }
  getProfileDetails() {

    const demo = {
      'mobile': this._webStorageService.getData('mobile')
    };

    let responseData: any;
    this.profileService.getProfileDetails('http://www.myaccessrewards.com/accessrewards/index.php/Api/v1.1/Searchmember', demo).subscribe(
      data => responseData = data,
      error => {
        console.error('api ERROR');
        this.loading = false;

      },
      () => {
        console.log('responseData', new Date(responseData.DateOfBirth));
        this.loading = false;

        this.userDetails = responseData;
        const date = new Date(responseData.DateOfBirth);

        if (date) {
          this.userDetails.day = this.days[date.getDate() - 1];
          this.userDetails.month = this.months[date.getMonth()];
          this.userDetails.year = date.getUTCFullYear();
        }


      });
  }

  getCustomerAvailablePoints() {

    const demo = {
      'mobile': this._webStorageService.getData('mobile')
    };

    let responseData: any;
    this.profileService.getCustomerAvailablePoints(
      'http://www.myaccessrewards.com/accessrewards/index.php/Api/v1.1/CustomerAvailablePoints', demo).subscribe(
      data => responseData = data,
      error => {
        console.error('api ERROR');
      },
      () => {
        console.log('zxcxzc', responseData);
        this.availablePoints = responseData.availablePointsl

      });
  }
  public onFormSubmit() {

    this.loading = true;

    this.user = this.signupForm.value;
    this.user.DateOfBirth = this.signupForm.value.day + ' ' + this.signupForm.value.month + ' ' + this.signupForm.value.year;
    this.user.ChildDOB = this.signupForm.value.childDay + ' ' + this.signupForm.value.childMonth + ' ' + this.signupForm.value.childYear;
    this.user.AnniversaryDate = this.signupForm.value.annDay + ' ' + this.signupForm.value.annMonth + ' ' + this.signupForm.value.annYear;
    console.log(this.user);


    let responseData: any;
    this.registerService.registerToApp('http://www.myaccessrewards.com/accessrewards/index.php/Api/v1.1/RegisterEasyAccount',
      this.user).subscribe(
      data => responseData = data,
      error => {
        console.error('api ERROR');
        this.loading = false;

      },
      () => {
        this.loading = false;

        console.log('responseData', responseData);
        this.toastr.success('Profile updated successfully.', 'Success!');

        this.getProfileDetails();
        this.getCustomerAvailablePoints();
      });
  }

}
