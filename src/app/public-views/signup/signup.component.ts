import { Component, OnInit, ViewContainerRef } from '@angular/core';
// Import the User model
import { User } from './User';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'app/shared/services/register.service';

import { ProfileService } from 'app/shared/services/profile.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr';

import { LoginService } from 'app/shared/services/login.service';
import { WebStorageService } from 'app/shared/services/web-storage.service';
import { AppSettings } from 'app/app.constant';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {

  // Gender list for the select control element
  genderList: string[];
  signupForm: FormGroup;

  // Property for the user
  private user: User;
  public disableClick = false;
  public exist_not = false;

  day: number;
  month: string;
  year: number;

  // tslint:disable-next-line:max-line-length
  // tslint:disable-next-line:member-ordering
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  years = [];

  public configConstant = AppSettings;

  // Inject the formbuilder into the constructor
  constructor(
    private fb: FormBuilder,
    public registerService: RegisterService,
	public profileService: ProfileService,
    public router: Router,
    public toastr: ToastsManager,
    public vcr: ViewContainerRef,
    public loginService: LoginService,
    private _webStorageService: WebStorageService
  ) {
    this.toastr.setRootViewContainerRef(vcr);
    if (AppSettings.currentCountry === 'india') {
      // Use the formbuilder to build the Form model
      this.signupForm = this.fb.group({
        FirstName: ['', Validators.required],
        LastName: [''],
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
    } else {
      // Use the formbuilder to build the Form model
      this.signupForm = this.fb.group({
        FirstName: ['', Validators.required],
        LastName: [''],
        PhoneNo: ['', Validators.required],
        email: ['', [Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
        CountryCode: ['', Validators.required]
      });
    }
  }

  ngOnInit() {

    const d = new Date();
    for (let i = (d.getFullYear()); i > (d.getFullYear() - 100); i--) {
      this.years.push(i);
    }

    this.genderList = ['Male', 'Female', 'Others'];




  }

  get email() { return this.signupForm.get('email'); }

  get password() { return this.signupForm.get('password'); }

  get gender() { return this.signupForm.get('gender'); }

  get terms() { return this.signupForm.get('terms'); }

  public onFormSubmit() {
    this.user = this.signupForm.value;
    this.user.DateOfBirth = this.signupForm.value.day + ' ' + this.signupForm.value.month + ' ' + this.signupForm.value.year;
   
   const demo = {
      'mobile': this.user.MobileNo
    };
	let responseData: any;
    this.profileService.getProfileDetails(
      AppSettings.API_ENDPOINT + AppSettings.Searchmember, demo).subscribe(
      data => responseData = data,
      error => {
        console.error('api ERROR');
       },
	  () => {
		  
		  if (responseData.ReturnCode === '0') {
			   this.toastr.error("User Already Exist", 'Error!');
		  }else{
			 
			let responseData: any;
			this.registerService.registerToApp(
			AppSettings.API_ENDPOINT + AppSettings.RegisterEasyAccount,
			this.user).subscribe(
			data => responseData = data,
			error => {
				console.error('api ERROR');
			},
		() => {
		  if (responseData.ReturnCode !== '0') {
			   this.toastr.error(responseData.ReturnMessage, 'Error!');
		  }else{
				this.toastr.success('Successfully registered.', 'Success!');
			const login = {
				'mobile': this.signupForm.value.MobileNo
			};
        let registerData: any;
        this.loginService.generateOTP(
          AppSettings.API_ENDPOINT + AppSettings.GenerateOTP,
          // this.loginService.generateOTP('/api/GenerateOTP',
          login).subscribe(
          data => registerData = data,
          error => {
            console.error('api ERROR');

          },
          () => {

            console.log('responseData', registerData);
            this._webStorageService.saveData('RequestID', registerData.RequestID);

            this.router.navigate(['/otp', this.signupForm.value.MobileNo], { skipLocationChange: true });
          });
		  }
      });
			 
			 
	}
	  }
      );
	
}

  public onFormSubmitUae() {
    this.user = this.signupForm.value;
    this.user.EmailAddress = this.signupForm.value.email;
    console.log(this.user);


    let responseData: any;
    this.registerService.uaeSignUp(
      AppSettings.API_ENDPOINT + AppSettings.uaeSignUp,
      this.user).subscribe(
      data => responseData = data,
      error => {
        console.error('api ERROR');
      },
      () => {
        this.toastr.success('Successfully registered.', 'Success!');

        console.log('responseData', responseData);


      });

  }
}
