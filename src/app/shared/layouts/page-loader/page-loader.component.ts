import { Component } from '@angular/core';
import { BroadcastService } from '../../services/broadcast.service';
@Component({
  selector: 'page-loader',
  templateUrl: './page-loader.component.html'
})
export class PageLoaderComponent {
  public showLoader: boolean;
  /**Contructor */
  constructor(private _broadcastService: BroadcastService) {
    this.showLoader = false;
    this._broadcastService.loaderSource.subscribe((showLoader) => {
      if (showLoader) {
        this.showLoader = true;
      } else {
        this.showLoader = false;
      }

    });
  }
}
