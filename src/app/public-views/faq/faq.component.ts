import { Component } from '@angular/core';

@Component({
  selector: 'faq',
  templateUrl: './faq.component.html'
})
export class FaqComponent {
  reload() {
    window.location.href = '/index';
  }
}
