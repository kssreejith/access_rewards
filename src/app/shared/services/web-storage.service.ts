import { Injectable } from '@angular/core';
import { AppConfigurationService } from './app-configuration.service';
@Injectable()
export class WebStorageService {
    private _keyPrefix: string;
    private _localStorage: boolean;
    /** Constructor function */
    constructor(private _appConfig: AppConfigurationService) {
        this._keyPrefix = _appConfig.storageKeyPrefix;
        this._localStorage = _appConfig.localStorage;
    };

    /** for saving the data to the web storage  */
    public saveData(key: string, data: object, sessionData?: boolean): any {
        const storageKey = this._keyPrefix + key;
        if (this._localStorage && !sessionData) {
            localStorage.setItem(storageKey, JSON.stringify(data));
        } else {
            sessionStorage.setItem(storageKey, JSON.stringify(data));
        }
    }

    /** for getting the data from  the web storage  */
    public getData(key: string, sessionData?: boolean): object {
        const storageKey = this._keyPrefix + key;
        let storageData: string;
        if (this._localStorage && !sessionData) {
            storageData = localStorage.getItem(storageKey);
        } else {
            storageData = sessionStorage.getItem(storageKey);
        }
        if (storageData) {
            return JSON.parse(storageData);
        } else {
            return {};
        }
    }

    /** for removing the data from  the web storage  */
    public removeData(key: string, sessionData?: boolean): void {
        const storageKey = this._keyPrefix + key;
        if (this._localStorage && !sessionData) {
           localStorage.removeItem(storageKey);
        } else {
           sessionStorage.removeItem(storageKey);
        }

    }

}
