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
  public disableClick = false;

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
    console.log('sfdsdf');
    this.showSideMenu = status;

  }

  showSearchMenu(status) {
    console.log('sfdsdf');
    this.searchMenu = status;

  }

  public login() {
    console.log('login', this.signupForm.value);
    const login = {
      'MobileNumber': this.signupForm.value.MobileNo,
      'UserName': 'apiuser@Tablez',
      'StoreCode': 'DemoA'
    };
    this.disableClick = true;
    let responseData: any;
    this.loginService.generateOTP('http://lpaaswebapi.easyrewardz.com/api/GenerateOTP',
      // this.loginService.generateOTP('/api/GenerateOTP',
      login).subscribe(
      data => responseData = data,
      error => {
        console.error('api ERROR');
        this.disableClick = false;

      },
      () => {
        this.disableClick = false;

        console.log('responseData', responseData);

        this.router.navigate(['/otp']);
      });
  }

}
