import { Injectable } from '@angular/core';
@Injectable()
export class AppConfigurationService {
    /** BaseHttp service */
    public apiSuccessCodes: any[] = [200, 201];
    public apiErrorCodes: any[] = [404];

    /** Webstorage service */
    public storageKeyPrefix = 'yra_';
    public localStorage = true; // default is local storage for session storage use value as false

    /** General */
    public platform = 'webPortal';
  
}
