import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fds-demo-table',
  template: `
    <table>
      <thead>
        <tr>
          <th scope="col" *ngFor="let head of items[0] | keys">{{ head }}</th>
        </tr>
      </thead>
      <tr *ngFor="let item of items">
        <td *ngFor="let list of item | keys">{{ item[list] }}</td>
      </tr>
    </table>
  `,
  styles: []
})
export class TablesComponent implements OnInit {
  constructor() {}

  items = [
    {
      Category: '3.4',
      January: '6.0',
      February: '22-30-390',
      March: '9.8',
      April: '23423'
    },
    {
      Category: '3.4',
      January: '6.0',
      February: '22-30-390',
      March: '9.1',
      April: '23423'
    },
    {
      Category: '3.4',
      January: '6.0',
      February: '22-30-390',
      March: '9.4',
      April: '23423'
    },
    {
      Category: '3.4',
      January: '6.0',
      February: '22-30-390',
      March: '9.4',
      April: '8786'
    },
    {
      Category: '3.4',
      January: '6.0',
      February: '22-30-390',
      March: '9.4',
      April: '23423'
    }
  ];

  ngOnInit(): void {}
}
