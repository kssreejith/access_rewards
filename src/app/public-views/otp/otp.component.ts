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
      'SecurityToken': '4U28faapggN7BFWgL2etQNvx8pfvsK6xZIhvdqUsyyn1+DvVk2yQv5vPY5t0QloFMvyEJZJWHVGzYQN3domQo0FPHwhTus7yo9bi0fvuUe9NT+57iRJpOXadYjZg/oc9QAvccqaaiVAC01xzmGLrPL053YVr0OnqQ2TGWrwBWH4AvP3JFQkmpoJyc9TtU8Nkb/33fjqxvjdMUIlnzQXip1Xa3Ooib1+k+b46Va5698U=',
      'EasyId': '9446173962',
      'UserName': 'apiuser@Tablez',
      'SmsCode': '166923',
      'TransactionCode': 'Test_Bill',
      'StoreCode': 'DemoA'
    }


    let responseData: any;
    this.loginService.confirmOtp('/api/ConfirmOTP',
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
