import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { WebStorageService } from './shared/services/web-storage.service';

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private _webStorageService: WebStorageService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log("heree",
        )

        if ((this._webStorageService.getData('mobile') && (Object.keys(this._webStorageService.getData('mobile')).length === 0))) {
            this.router.navigate(['/index']);
            return false;

        } else {
            return true;

        }
    }
}
