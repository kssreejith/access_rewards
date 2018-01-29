import { Component } from '@angular/core';
import { LoginService } from 'app/shared/services/login.service';
import { WebStorageService } from 'app/shared/services/web-storage.service';

@Component({
  selector: 'guardian',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(
    public loginService: LoginService,
    private _webStorageService: WebStorageService
  ) {
    console.log('here');
    this.getSecurityToken();

  }

  getSecurityToken() {
    const userToken: any = this._webStorageService.getData('generateSecurityToken');
    if (!userToken) {
      const login = {
        'UserName': 'Sweetgingeruser',
        'UserPassword': 'Sweetgingeruser123',
        'DevId': '0e91d83d-32c5-4858-b1bc-74c3cbae8802',
        'AppId': 'a9bdcb5c-ae88-4a4e-bf7d-692eda18140b',
        'ProgramCode': 'SweetGinger'
      };

      let responseData: any;
      // this.loginService.generateSecurityToken('/api/GenerateSecurityToken',

      this.loginService.generateSecurityToken('http://lpaaswebapi.easyrewardz.com/api/GenerateSecurityToken',
        login).subscribe(
        data => responseData = data,
        error => {
          console.error('api ERROR');
        },
        () => {
          console.log('responseData', responseData);
          this._webStorageService.saveData('generateSecurityToken', responseData.Token);

        });
    }

  }
}
