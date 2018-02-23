import { Component, ViewContainerRef } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'app/shared/services/register.service';
import { LoginService } from 'app/shared/services/login.service';
import { WebStorageService } from 'app/shared/services/web-storage.service';
import { AppSettings } from 'app/app.constant';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public showSideMenu = false;
  public searchMenu = false;
  public signupForm: FormGroup;
  public disableClick = false;
  public configConstant = AppSettings;
  public loading = false;

  constructor(
    public router: Router,
    private fb: FormBuilder,
    public loginService: LoginService,
    private _webStorageService: WebStorageService,
    public toastr: ToastsManager,
    public vcr: ViewContainerRef
  ) {
    if (AppSettings.currentCountry === 'india') {
      // Use the formbuilder to build the Form model
      this.signupForm = this.fb.group({
        MobileNo: ['', Validators.required]
      })
    } else {
      // Use the formbuilder to build the Form model
      this.signupForm = this.fb.group({
        phoneno: ['', Validators.required],
        countrycode: ['', Validators.required],
      })
    }

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
    this.loading = true;

    console.log('login', this.signupForm.value);
    const login = {
      'mobile': this.signupForm.value.MobileNo
    };
    this.disableClick = true;
    let responseData: any;
    this.loginService.generateOTP(AppSettings.API_ENDPOINT + AppSettings.GenerateOTP,
      // this.loginService.generateOTP('/api/GenerateOTP',
      login).subscribe(
      data => responseData = data,
      error => {
        console.error('api ERROR');
        this.disableClick = false;
        this.loading = false;

      },
      () => {
        this.disableClick = false;
        this.loading = false;

        console.log('responseData', responseData);
        this._webStorageService.saveData('RequestID', responseData.RequestID);

        this.router.navigate(['/otp', this.signupForm.value.MobileNo], { skipLocationChange: true });
      });
  }

  public loginUae() {
    console.log('login', this.signupForm.value);
    this.disableClick = true;
    this.loading = true;

    let responseData: any;
    this.loginService.generateOTP(AppSettings.API_ENDPOINT + AppSettings.uaeLogin,
      this.signupForm.value).subscribe(
      data => responseData = data,
      error => {
        console.error('api ERROR');
        this.disableClick = false;
        this.loading = false;

      },
      () => {
        this.disableClick = false;
        this.loading = false;

        console.log('responseData', responseData);
        if (responseData.Data) {
          this.toastr.success('Successfully LoggedIn.', 'Success!');
          setTimeout(() => {

            this._webStorageService.saveData('mobile', this.signupForm.value.phoneno);
            this._webStorageService.saveData('SecretToken', responseData.Data.SecretToken);
            this.router.navigate(['/profile']);

          });
        } else {
          this.toastr.error(responseData.ReturnMessage, 'Error!');
        }

      });
  }

}
