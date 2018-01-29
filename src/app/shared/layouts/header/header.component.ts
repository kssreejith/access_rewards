import { Component, ViewChild, HostListener, Inject } from '@angular/core';
import { SideMenuComponent } from 'app/shared/layouts/side-menu/side-menu.component';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from 'app/window.service';
import { WebStorageService } from 'app/shared/services/web-storage.service';

@Component({
  selector: 'ur-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @ViewChild(SideMenuComponent)

  public showSideMenu = false;
  public searchMenu = false;
  public navIsFixed = false;
  public loggedIn: any;

  @Inject(DOCUMENT) private document: Document;
  @Inject(WINDOW) private window: Window;
  constructor(private _webStorageService: WebStorageService) {
    this.loggedIn = this._webStorageService.getData('generateSecurityToken');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    console.log('hereeee')
    const number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if (number > 100) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && number < 10) {
      this.navIsFixed = false;
    }
  }
  showNav(status) {
    console.log('sfdsdf');
    this.showSideMenu = status;

  }

  showSearchMenu(status) {
    console.log('sfdsdf');
    this.searchMenu = status;

  }


}
