import { Component } from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public showSideMenu = false;
  public searchMenu = false;

  constructor() {

  }

  showNav(status) {
    console.log("sfdsdf");
    this.showSideMenu = status;

  }

  showSearchMenu(status) {
    console.log("sfdsdf");
    this.searchMenu = status;

  }
}
