import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'otp',
  templateUrl: './otp.component.html'
})
export class OtpComponent {
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

  enter() {
    this.router.navigate(['/index']);
  }
}
