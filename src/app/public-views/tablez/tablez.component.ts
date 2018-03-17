import { Component } from '@angular/core';
import { AppSettings } from 'app/app.constant';
@Component({
  selector: 'tablez',
  templateUrl: './tablez.component.html'
})

export class TablezComponent {
  public configConstant = AppSettings;
}

