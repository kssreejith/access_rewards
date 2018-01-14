import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class BroadcastService {
  private loader = new Subject<any>();
  private alertText = new Subject<any>();
  alertSource = this.alertText.asObservable();
  loaderSource = this.loader.asObservable();
  /*** ALERT */

  broadcastAlert(alertType: any, alertData: any) {
    this.alertText.next({ alertType, alertData });
  }
  /*** /LAODER */

  broadcastLoader(showLoader: boolean) {
    this.loader.next(showLoader);
  }


}

