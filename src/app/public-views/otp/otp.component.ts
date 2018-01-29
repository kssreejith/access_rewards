import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'app/shared/services/login.service';

@Component({
  selector: 'otp',
  templateUrl: './otp.component.html'
})
export class OtpComponent {
  public showSideMenu = false;
  public searchMenu = false;

  constructor(
    public router: Router,
    public loginService: LoginService
  ) {

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
    const login = {
      // tslint:disable-next-line:max-line-length
      'EasyId': '9446173962',
      'UserName': 'apiuser@Tablez',
      'SmsCode': '166923',
      'TransactionCode': 'Test_Bill',
      'StoreCode': 'DemoA'
    }


    let responseData: any;

    this.loginService.confirmOtp('http://lpaaswebapi.easyrewardz.com/api/ConfirmOTP',
      login).subscribe(
      data => responseData = data,
      error => {
        console.error('api ERROR');
      },
      () => {
        console.log('responseData', responseData);

        this.router.navigate(['/index']);
      });
  }
}
