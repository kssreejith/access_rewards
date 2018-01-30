import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'app/shared/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebStorageService } from 'app/shared/services/web-storage.service';

@Component({
  selector: 'otp',
  templateUrl: './otp.component.html'
})
export class OtpComponent {
  public showSideMenu = false;
  public searchMenu = false;
  public mobileNum: number;
  public signupForm: FormGroup;
  public disableClick = false;

  constructor(
    public activateRoute: ActivatedRoute,
    public router: Router,
    private fb: FormBuilder,
    public loginService: LoginService,
    private _webStorageService: WebStorageService
  ) {
    this.activateRoute.params.subscribe(params => {
      this.mobileNum = params['id'];
    });
    this.signupForm = this.fb.group({
      mobile: [this.mobileNum, Validators.required],
      otp: ['', Validators.required],
      RequestID: [this._webStorageService.getData('RequestID'), Validators.required]
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

  enter() {
    let responseData: any;

    this.loginService.confirmOtp('http://www.myaccessrewards.com/accessrewards/index.php/Api/v1.1/ConfirmOTP',
      this.signupForm.value).subscribe(
      data => responseData = data,
      error => {
        console.error('api ERROR');
      },
      () => {

        console.log('responseData', responseData);
        this._webStorageService.saveData('mobile', this.signupForm.value.mobile);
        this.router.navigate(['/index']);
      });
  }
}
