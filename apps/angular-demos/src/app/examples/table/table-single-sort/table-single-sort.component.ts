import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';

export interface Task {
  id?:string;
  code?:string;
  name?:string;
  description?:string;
  weight?:number;
  status?:string;
  category?:string;
  image?:string;
  priority?:number;
  dateCreated?:Date;
}

@Component({
  selector: 'demo-table-single-sort',
  template: `
    <div>
    <fds-table [columns]="cols" [value]="tasks"
      [scrollable]="true" scrollHeight="400px"
      (onRowSelect)="onRowSelect($event)" dataKey="code"
      (selectionChange)="onSelectionChange($event)"
      tableStyleClass="fds--table" (onHeaderCheckboxToggle)="onHeaderCheckboxToggle($event)">
        <ng-template fdsTemplate="caption">
          <caption class="d--block text--left h4">Dynamic Table with Single Sort, Scrolling, Row Select and Table Styles</caption>
        </ng-template>
        <ng-template fdsTemplate="header" let-columns>
        <tr>
            <th style="width: 3rem">
              <fds-tableHeaderCheckbox></fds-tableHeaderCheckbox>
            </th>
            <th *ngFor="let col of columns" [fdsSortableColumn]="col.field">
              {{col.header}} <fds-sortIcon [field]="col.field"></fds-sortIcon>
            </th>
            <th>&nbsp;</th>
          </tr>
        </ng-template>
        <ng-template fdsTemplate="body" let-rowData let-columns="columns">
          <tr>
            <td>
              <fds-tableCheckbox [value]="rowData"></fds-tableCheckbox>
            </td>
            <td *ngFor="let col of columns">
              {{ col.field ===  'weight'
                ? (rowData[col.field] | percent)
                : (col.field ===  'dateCreated'
                  ?  (rowData[col.field] | date)
                  : rowData[col.field])
              }}
            </td>
            <td>
              <fds-button className="btn btn--tooltip text--primary" (onClick)="selectTask(rowData)">Edit</fds-button>
            </td>
          </tr>
        </ng-template>
      </fds-table>
    </div>
  `,
  styles: [
  ]
})
export class TableSingleSortComponent implements OnInit {

  tasks: Task[];
  cols: any[];
  selectedTask: Task;

  constructor(private tableService: TableService) { }

  ngOnInit(): void {
    this.tableService.getTasks().then(data => this.tasks = data);

    this.cols = [
        { field: 'code', header: 'Code' },
        { field: 'name', header: 'Name' },
        { field: 'category', header: 'Category' },
        { field: 'weight', header: 'Weight' },
        { field: 'dateCreated', header: 'DateCreated' }
    ];
  }

  selectTask(task: Task) {
    console.log('Edit Clicked: ', task);
  }

  onRowSelect(event) {
    console.log('Single Checkbox Checked: ', event);
  }
  
  onHeaderCheckboxToggle(event) {
    console.log('On Header Checkbox Checked: ', event);
  }

  onSelectionChange(event) {
    console.log('On selection: ', event);
  }

}
