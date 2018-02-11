import { Component, ViewChild, HostListener, Inject, ViewContainerRef } from '@angular/core';
import { SideMenuComponent } from 'app/shared/layouts/side-menu/side-menu.component';
import { DOCUMENT } from '@angular/platform-browser';
import { WindowRefService } from 'app/window.service';
import { WebStorageService } from 'app/shared/services/web-storage.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


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

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WindowRefService) private window: Window,
    private _webStorageService: WebStorageService,
    public router: Router,
    public toastr: ToastsManager,
    public vcr: ViewContainerRef
  ) {
    this.loggedIn = this._webStorageService.getData('mobile');
    this.toastr.setRootViewContainerRef(vcr);

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

  logout() {
    this.toastr.success('Logged Out Successfully', 'Success!');
    setTimeout(() => {
      this._webStorageService.removeData('mobile');
      this.router.navigate(['/index']);
    }, 1000);

  }


}
