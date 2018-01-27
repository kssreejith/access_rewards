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

  }
}
