import { Injectable } from '@angular/core';
@Injectable()
export class LocalMaterDataService {
  /** date filter */
  public timeRangeFilter: any[] = [
    {
      id: '1hour',
      text: 'Last 60 Minutes'
    },
    {
      id: '2hour',
      text: 'Last 2 Hours'
    },
    {
      id: '4hour',
      text: 'Last 4 Hours'
    },
    {
      id: '8hour',
      text: 'Last 8 Hours'
    },
    {
      id: '24hour',
      text: 'Last 24 Hours'
    },
    {
      id: '7days',
      text: 'Last 7 Days'
    },
    {
      id: '30days',
      text: ' Last 30 Days'
    },
    {
      id: 'custom',
      text: 'Custom Range'
    }
  ];
}
