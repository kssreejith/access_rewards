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

    const demo = '<Request>' +
      '<SecurityToken>4U28faapggN7BFWgL2etQNvx8pfvsK6xZIhvdqUsyyn1+DvVk2yQv5vPY5t0QloFMvyEJZJWHVGzYQN3domQo0FPHwhTus7yo9bi0fvuUe9NT+57iRJpOXadYjZg/oc9QAvccqaaiVAC01xzmGLrPL053YVr0OnqQ2TGWrwBWH4AvP3JFQkmpoJyc9TtU8Nkb/33fjqxvjdMUIlnzQXip1Xa3Ooib1+k+b46Va5698U=</SecurityToken>' +
      '<FirstName>Gokul</FirstName>' +
      '<LastName>BS</LastName>' +
      '<DateOfBirth>01 12 1987</DateOfBirth>' +
      '<PinCode>695002</PinCode>' +
      '<EmailId>gokultvm@gmail.com</EmailId>' +
      '<MobileNo>9446173962</MobileNo>' +
      '<EasyPin>Abc1234</EasyPin>' +
      '<UserName>apiuser@Tablez</UserName>' +
      '<Gender>Male</Gender>' +
      '<MemberShipCardNumber></MemberShipCardNumber>' +
      '<StoreCode>DemoA</StoreCode>' +
      '<AssignMembershipCard>0</AssignMembershipCard>' +
      '<ChannelCode>Online</ChannelCode>' +
      '<CustomerTypeCode>Loyalty</CustomerTypeCode>' +
      '<ReferralCode></ReferralCode>' +
      '<CountryCode>91</CountryCode>' +
      '<ChildName>amit</ChildName>' +
      '<ChildDOB>13 Nov 2010</ChildDOB>' +
      '<AnniversaryDate></AnniversaryDate>' +
      '</Request>';

    let responseData: any;
    this.registerService.registerToApp('http://LPaaSwebapi.revalweb.com/api/RegisterEasyAccount',
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
