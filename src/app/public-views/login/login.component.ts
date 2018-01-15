import { Component } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public showSideMenu = false;
  public searchMenu = false;

  constructor(
    public router: Router
  ) {

  }

  showNav(status) {
    console.log("sfdsdf");
    this.showSideMenu = status;

  }

  showSearchMenu(status) {
    console.log("sfdsdf");
    this.searchMenu = status;

  }

  login() {
    this.router.navigate(['/otp']);
  }
}
