import { Injectable } from '@angular/core';
import { AppConfigurationService } from './app-configuration.service';
import { WebStorageService } from './web-storage.service';
@Injectable()
export class AuthService {

    /** Constructor function */
    constructor(private _appConfig: AppConfigurationService,
        private _webStorageService: WebStorageService) {
    };
    /**For saving the user data */
    public onLogin(loginData: any): void {
        this._webStorageService.saveData('user', loginData.userData);
        this._webStorageService.saveData('masterData', loginData.masterData);

    }
    /**For remove the user data */
    public onLogOut(): void {
        this._webStorageService.removeData('user');
        this._webStorageService.removeData('masterData');
    }


}
