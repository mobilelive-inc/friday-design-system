import { Component, OnInit } from '@angular/core';
import { Task } from '../table-single-sort/table-single-sort.component';
import { TableService } from '../table.service';

@Component({
  selector: 'demo-dark-table-head',
  template: `
    <fds-table tableStyleClass="fds--table" [value]="tasks">
      // TODO: @Kashif please use this (fds--table--thead--dark) class on thead Tag 
      <ng-template fdsTemplate="header">
        <tr>
          <th>Code</th>
          <th>Name</th>
          <th>Category</th>
          <th>Weight</th>
        </tr>
      </ng-template>
      <ng-template fdsTemplate="body" let-task>
        <tr>
          <td> {{task.code}}</td>
          <td> {{task.name}}</td>
          <td> {{task.category}}</td>
          <td> {{task.weight}}</td>
        </tr>
      </ng-template>
    </fds-table>
  `,
  styles: [
  ]
})
export class DarkTableHeadComponent implements OnInit {
  tasks: Task[];

  constructor(private tableService: TableService) { }

  ngOnInit(): void {
    this.tableService.getTasks().then(data => this.tasks = data);
  }

}
