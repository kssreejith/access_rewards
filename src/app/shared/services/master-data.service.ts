import { Injectable } from '@angular/core';
import { AppConfigurationService } from './app-configuration.service';
import { WebStorageService } from './web-storage.service';
declare var _: any;
@Injectable()
export class MasterDataService {

    /** Constructor function */
    constructor(private _appConfig: AppConfigurationService,
        private _webStorageService: WebStorageService) {
    };
    /**For geting the  the master data */
    public getMasterData(key: any): object {
        const masterData = this._webStorageService.getData('masterData');
        if (masterData) {
            return masterData[key];
        } else {
            return [{
                '_id': null,
                'value': 'Error'
            }];
        }
    }
    /**function for retrieving master data object */
    public getMasterObjectById(objectList, id): object {
        const selectedObject = _.find(objectList, { '_id': id });
        return selectedObject;
    }
    /**function for retrieving master data object */
    public getMasterObjectByCode(objectList, code): object {
        const selectedObject = _.find(objectList, { 'code': code });
        return selectedObject;
    }
}
