import { Component, Renderer2 } from '@angular/core';
import { LoginService } from 'app/shared/services/login.service';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'Access Rewards',
  templateUrl: './app.component.html'
})
export class AppComponent {
  previousUrl: string;

  constructor(
    public loginService: LoginService,
    private router: Router,
    private renderer: Renderer2
  ) {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          console.log('event.url.slice(1)', event.url.slice(1))
          if (event.url.slice(1) === 'index' || event.url.slice(1) === '' ) {
            (<HTMLInputElement>document.getElementById('authenticationOuterIdentityBlock')).style.display = 'block';

          } else {
            (<HTMLInputElement>document.getElementById('authenticationOuterIdentityBlock')).style.display = 'none';

          }
        }
      });

  }

}
