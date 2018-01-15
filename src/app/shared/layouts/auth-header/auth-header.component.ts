import { Component } from '@angular/core';

@Component({
  selector: 'auth-header',
  templateUrl: './auth-header.component.html'
})
export class AuthHeaderComponent {
  

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
