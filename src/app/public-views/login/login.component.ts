import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'app/shared/services/register.service';
import { LoginService } from 'app/shared/services/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public showSideMenu = false;
  public searchMenu = false;
  public signupForm: FormGroup;

  constructor(
    public router: Router, private fb: FormBuilder,
    public loginService: LoginService
  ) {
    // Use the formbuilder to build the Form model
    this.signupForm = this.fb.group({
      MobileNo: ['', Validators.required]
    })
  }

  showNav(status) {
    console.log("sfdsdf");
    this.showSideMenu = status;

  }

  showSearchMenu(status) {
    console.log("sfdsdf");
    this.searchMenu = status;

  }

  public login() {
    console.log('login', this.signupForm.value);
    const login = '<Request>' +
      '<MemberID></MemberID>' +
      '<EmailID>gokultvm@gmail.com</EmailID>' +
      '<MobileNumber>9446173962</MobileNumber>' +
      '<StoreCode>DemoA</StoreCode>' +
      '<UserName>apiuser@Tablez</UserName>' +
      // tslint:disable-next-line:max-line-length
      '<SecurityToken>4U28faapggN7BFWgL2etQNvx8pfvsK6xZIhvdqUsyyn1+DvVk2yQv5vPY5t0QloFMvyEJZJWHVGzYQN3domQo0FPHwhTus7yo9bi0fvuUe9NT+57iRJpOXadYjZg/oc9QAvccqaaiVAC01xzmGLrPL053YVr0OnqQ2TGWrwBWH4AvP3JFQkmpoJyc9TtU8Nkb/33fjqxvjdMUIlnzQXip1Xa3Ooib1+k+b46Va5698U=</SecurityToken>' +
      '</Request>';

    let responseData: any;
    this.loginService.loginToApp('http://LPaaSwebapi.revalweb.com/api/GenerateOTP',
      login).subscribe(
      data => responseData = data,
      error => {
        console.error('api ERROR');
      },
      () => {
        console.log('responseData', responseData);

        this.router.navigate(['/otp']);
      });
  }

}
