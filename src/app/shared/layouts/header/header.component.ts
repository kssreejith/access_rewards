import { Component, ViewChild } from '@angular/core';
import { SideMenuComponent } from 'app/shared/layouts/side-menu/side-menu.component';

@Component({
  selector: 'ur-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @ViewChild(SideMenuComponent)

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
