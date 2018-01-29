import { Component } from '@angular/core';
import { LoginService } from 'app/shared/services/login.service';

@Component({
  selector: 'guardian',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(
    public loginService: LoginService
  ) {

  }

}
