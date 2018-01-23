import { Component, OnInit } from '@angular/core';
// Import the User model
import { User } from './User';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'app/shared/services/register.service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {

  // Inject the formbuilder into the constructor
  constructor(private fb: FormBuilder, public registerService: RegisterService) { }

  // Property for the user
  private user: User;

  // Gender list for the select control element
  genderList: string[];
  signupForm: FormGroup;


  ngOnInit() {

    this.genderList = ['Male', 'Female', 'Others'];

    // Use the formbuilder to build the Form model
    this.signupForm = this.fb.group({
      FirstName: ['', Validators.required],
      MobileNo: ['', Validators.required],
      email: ['', [Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      // password: this.fb.group({
      //   pwd: ['', [Validators.required,
      //   Validators.minLength(8)]],
      //   confirmPwd: ['', [Validators.required,
      //   Validators.minLength(8)]]
      // }),
      terms: ['', Validators.requiredTrue]
    })

  }

  get email() { return this.signupForm.get('email'); }

  get password() { return this.signupForm.get('password'); }

  get gender() { return this.signupForm.get('gender'); }

  get terms() { return this.signupForm.get('terms'); }

  public onFormSubmit() {
    this.user = this.signupForm.value;

    const demo = {
      "UserName": "Sweetgingeruser",
      "UserPassword": "Sweetgingeruser123",
      "DevId": "0e91d83d-32c5-4858-b1bc-74c3cbae8802",
      "AppId": "a9bdcb5c-ae88-4a4e-bf7d-692eda18140b",
      "ProgramCode": "SweetGinger"
    }

    let responseData: any;
    this.registerService.registerToApp('/api/GenerateSecurityToken',
      demo).subscribe(
      data => responseData = data,
      error => {
        console.error('api ERROR');
      },
      () => {
        console.log('responseData', responseData.status);
      });
    if (this.signupForm.valid) {
      this.user = this.signupForm.value;
      console.log(this.user);
      /* Any API call logic via services goes here */
    }
  }
}
