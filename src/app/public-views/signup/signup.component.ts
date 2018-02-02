import { Component, OnInit } from '@angular/core';
// Import the User model
import { User } from './User';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'app/shared/services/register.service';
import { Router } from '@angular/router';

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
    public router: Router
  ) { }

  ngOnInit() {

    const d = new Date();
    for (let i = (d.getFullYear() - 18); i > (d.getFullYear() - 100); i--) {
      this.years.push(i);
    }

    this.genderList = ['Male', 'Female', 'Others'];

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

  get email() { return this.signupForm.get('email'); }

  get password() { return this.signupForm.get('password'); }

  get gender() { return this.signupForm.get('gender'); }

  get terms() { return this.signupForm.get('terms'); }

  public onFormSubmit() {
    this.user = this.signupForm.value;
    this.user.DateOfBirth = this.signupForm.value.day + ' ' + this.signupForm.value.month + ' ' + this.signupForm.value.year;
    console.log(this.user);


    let responseData: any;
    this.registerService.registerToApp(
      'http://www.myaccessrewards.com/accessrewards/index.php/Api/v1.1/RegisterEasyAccount',
      this.user).subscribe(
      data => responseData = data,
      error => {
        console.error('api ERROR');
      },
      () => {
        console.log('responseData', responseData.status);
        this.router.navigate(['/login']);

      });

  }
}
