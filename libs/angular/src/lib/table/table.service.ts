import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SortMeta } from './table.helpers';

@Injectable()
export class TableService {

    private sortSource = new Subject<SortMeta|SortMeta[]>();
    private selectionSource = new Subject();
    private valueSource = new Subject<any>();
    private columnsSource = new Subject();
    private resetSource = new Subject();

    sortSource$ = this.sortSource.asObservable();
    selectionSource$ = this.selectionSource.asObservable();
    valueSource$ = this.valueSource.asObservable();
    columnsSource$ = this.columnsSource.asObservable();
    resetSource$ = this.resetSource.asObservable();

    onSort(sortMeta: SortMeta|SortMeta[]) {
        this.sortSource.next(sortMeta);
    }

    onSelectionChange() {
        this.selectionSource.next();
    }

    onResetChange() {
        this.resetSource.next();
    }

    onValueChange(value: any) {
        this.valueSource.next(value);
    }

    onColumnsChange(columns: any[]) {
        this.columnsSource.next(columns);
    }
}