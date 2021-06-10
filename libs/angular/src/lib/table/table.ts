import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  AfterViewInit,
  AfterContentInit,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  ContentChildren,
  TemplateRef,
  SimpleChanges,
  OnDestroy,
  ChangeDetectorRef,
  Directive,
  HostListener,
  QueryList,
  NgZone
} from '@angular/core';
import { Subscription } from 'rxjs';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Template } from '../shared/template.directive';
import { ObjectUtils, DomHandler, BlockableUI } from '../shared/helpers';
import { SortMeta, TableState } from './table.helpers';
import { TableService } from './table.service';

@Component({
  selector: 'fds-table',
  template: `
    <div
      #container
      [ngStyle]="style"
      [class]="styleClass"
      [ngClass]="{
        'fds-datatable fds-component': true,
        'fds-datatable-hoverable-rows': rowHover || selectionMode,
        'fds-datatable-auto-layout': autoLayout,
        'fds-datatable-scrollable': scrollable,
        'fds-datatable-responsive': responsive
      }"
    >
      <div
        class="fds-datatable-loading-overlay fds-component-overlay"
        *ngIf="loading && showLoader"
      >
        <i [class]="'fds-datatable-loading-icon ' + loadingIcon"></i>
      </div>
      <div *ngIf="captionTemplate" class="fds-datatable-header">
        <ng-container *ngTemplateOutlet="captionTemplate"></ng-container>
      </div>

      <div class="fds-datatable-wrapper" *ngIf="!scrollable">
        <table
          role="grid"
          #table
          [ngClass]="tableStyleClass"
          [ngStyle]="tableStyle"
        >
          <thead class="fds-datatable-thead">
            <ng-container
              *ngTemplateOutlet="
                headerTemplate;
                context: { $implicit: columns }
              "
            ></ng-container>
          </thead>
          <tbody
            class="fds-datatable-tbody"
            [fdsTableBody]="columns"
            [fdsTableBodyTemplate]="bodyTemplate"
          ></tbody>
        </table>
      </div>

      <div class="fds-datatable-scrollable-wrapper" *ngIf="scrollable">
        <div
          class="fds-datatable-scrollable-view"
          #scrollableView
          [fdsScrollableView]="columns"
          [scrollHeight]="scrollHeight"
        ></div>
      </div>
    </div>
  `,
  providers: [TableService],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./table.scss']
})
export class Table
  implements OnInit, AfterViewInit, AfterContentInit, BlockableUI, OnChanges {
  @Input() style: any;

  @Input() styleClass: string;

  @Input() tableStyle: any;

  @Input() tableStyleClass: string;

  @Input() defaultSortOrder: number = 1;

  @Input() sortMode: string = 'single';

  @Input() selectionMode: string;

  @Output() selectionChange: EventEmitter<any> = new EventEmitter();

  @Input() dataKey: string;

  @Input() metaKeySelection: boolean;

  @Input() rowTrackBy: Function = (index: number, item: any) => item;

  @Input() lazy: boolean = false;

  @Input() lazyLoadOnInit: boolean = true;

  @Input() compareSelectionBy: string = 'deepEquals';

  @Input() scrollable: boolean;

  @Input() scrollHeight: string;

  // @Input() virtualScroll: boolean;

  @Input() virtualScrollDelay: number = 250;

  @Input() virtualRowHeight: number = 28;

  @Input() responsive: boolean;

  @Input() loading: boolean;

  @Input() loadingIcon: string = 'icon-spinner';

  @Input() showLoader: boolean = true;

  @Input() rowHover: boolean;

  @Input() customSort: boolean;

  @Input() autoLayout: boolean;

  @Input() stateKey: string;

  @Input() stateStorage: string = 'session';

  @Output() onHeaderCheckboxToggle: EventEmitter<any> = new EventEmitter();

  @Output() onRowSelect: EventEmitter<any> = new EventEmitter();

  @Output() onRowUnselect: EventEmitter<any> = new EventEmitter();

  @Output() onSort: EventEmitter<any> = new EventEmitter();

  @Output() onLazyLoad: EventEmitter<any> = new EventEmitter();

  @Output() sortFunction: EventEmitter<any> = new EventEmitter();

  @Output() onStateSave: EventEmitter<any> = new EventEmitter();

  @Output() onStateRestore: EventEmitter<any> = new EventEmitter();

  @ViewChild('container') containerViewChild: ElementRef;

  @ViewChild('table') tableViewChild: ElementRef;

  @ViewChild('scrollableView') scrollableViewChild;

  @ViewChild('scrollableFrozenView') scrollableFrozenViewChild;

  @ContentChildren(Template) templates: QueryList<Template>;

  _value: any[] = [];

  _columns: any[];

  _first: number = 0;

  _rows: number;

  headerTemplate: TemplateRef<any>;

  bodyTemplate: TemplateRef<any>;

  captionTemplate: TemplateRef<any>;

  loadingBodyTemplate: TemplateRef<any>;

  frozenRowsTemplate: TemplateRef<any>;

  emptyMessageTemplate: TemplateRef<any>;

  selectionKeys: any = {};

  _multiSortMeta: SortMeta[];

  _sortField: string;

  _sortOrder: number = 1;

  preventSelectionSetterPropagation: boolean;

  _selection: any;

  anchorRowIndex: number;

  rangeRowIndex: number;

  initialized: boolean;

  rowTouched: boolean;

  restoringSort: boolean;

  stateRestored: boolean;

  tableWidthState: string;

  constructor(
    public el: ElementRef,
    public zone: NgZone,
    public tableService: TableService,
    public cd: ChangeDetectorRef
  ) // public filterService: FilterService
  {}

  ngOnInit() {
    if (this.lazy && this.lazyLoadOnInit) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    }

    this.initialized = true;
  }

  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'caption':
          this.captionTemplate = item.template;
          break;

        case 'header':
          this.headerTemplate = item.template;
          break;

        case 'body':
          this.bodyTemplate = item.template;
          break;

        case 'loadingbody':
          this.loadingBodyTemplate = item.template;
          break;

        case 'frozenrows':
          this.frozenRowsTemplate = item.template;
          break;

        case 'emptymessage':
          this.emptyMessageTemplate = item.template;
          break;
      }
    });
  }

  ngAfterViewInit() {}

  ngOnChanges(simpleChange: SimpleChanges) {
    if (simpleChange.value) {
      if (this.isStateful() && !this.stateRestored) {
        this.restoreState();
      }

      this._value = simpleChange.value.currentValue;

      if (!this.lazy) {
        if (this.sortMode == 'single' && this.sortField) this.sortSingle();
        else if (this.sortMode == 'multiple' && this.multiSortMeta)
          this.sortMultiple();
      }

      this.tableService.onValueChange(simpleChange.value.currentValue);
    }

    if (simpleChange.columns) {
      this._columns = simpleChange.columns.currentValue;
      this.tableService.onColumnsChange(simpleChange.columns.currentValue);
    }

    if (simpleChange.sortField) {
      this._sortField = simpleChange.sortField.currentValue;

      //avoid triggering lazy load prior to lazy initialization at onInit
      if (!this.lazy || this.initialized) {
        if (this.sortMode === 'single') {
          this.sortSingle();
        }
      }
    }

    if (simpleChange.sortOrder) {
      this._sortOrder = simpleChange.sortOrder.currentValue;

      //avoid triggering lazy load prior to lazy initialization at onInit
      if (!this.lazy || this.initialized) {
        if (this.sortMode === 'single') {
          this.sortSingle();
        }
      }
    }

    if (simpleChange.multiSortMeta) {
      this._multiSortMeta = simpleChange.multiSortMeta.currentValue;
      if (this.sortMode === 'multiple' && (this.initialized || !this.lazy)) {
        this.sortMultiple();
      }
    }

    if (simpleChange.selection) {
      this._selection = simpleChange.selection.currentValue;

      if (!this.preventSelectionSetterPropagation) {
        this.updateSelectionKeys();
        this.tableService.onSelectionChange();
      }
      this.preventSelectionSetterPropagation = false;
    }
  }

  @Input() get value(): any[] {
    return this._value;
  }
  set value(val: any[]) {
    this._value = val;
  }

  @Input() get columns(): any[] {
    return this._columns;
  }
  set columns(cols: any[]) {
    this._columns = cols;
  }

  @Input() get first(): number {
    return this._first;
  }
  set first(val: number) {
    this._first = val;
  }

  @Input() get rows(): number {
    return this._rows;
  }
  set rows(val: number) {
    this._rows = val;
  }

  @Input() get sortField(): string {
    return this._sortField;
  }

  set sortField(val: string) {
    this._sortField = val;
  }

  @Input() get sortOrder(): number {
    return this._sortOrder;
  }
  set sortOrder(val: number) {
    this._sortOrder = val;
  }

  @Input() get multiSortMeta(): SortMeta[] {
    return this._multiSortMeta;
  }

  set multiSortMeta(val: SortMeta[]) {
    this._multiSortMeta = val;
  }

  @Input() get selection(): any {
    return this._selection;
  }

  set selection(val: any) {
    this._selection = val;
  }

  updateSelectionKeys() {
    if (this.dataKey && this._selection) {
      this.selectionKeys = {};
      if (Array.isArray(this._selection)) {
        for (let data of this._selection) {
          this.selectionKeys[
            String(ObjectUtils.resolveFieldData(data, this.dataKey))
          ] = 1;
        }
      } else {
        this.selectionKeys[
          String(ObjectUtils.resolveFieldData(this._selection, this.dataKey))
        ] = 1;
      }
    }
  }

  sort(event) {
    let originalEvent = event.originalEvent;

    if (this.sortMode === 'single') {
      this._sortOrder =
        this.sortField === event.field
          ? this.sortOrder * -1
          : this.defaultSortOrder;
      this._sortField = event.field;

      this.sortSingle();
    }
    if (this.sortMode === 'multiple') {
      let metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
      let sortMeta = this.getSortMeta(event.field);

      if (sortMeta) {
        if (!metaKey) {
          this._multiSortMeta = [
            { field: event.field, order: sortMeta.order * -1 }
          ];
        } else {
          sortMeta.order = sortMeta.order * -1;
        }
      } else {
        if (!metaKey || !this.multiSortMeta) {
          this._multiSortMeta = [];
        }
        this._multiSortMeta.push({
          field: event.field,
          order: this.defaultSortOrder
        });
      }

      this.sortMultiple();
    }

    if (this.isStateful()) {
      this.saveState();
    }

    this.anchorRowIndex = null;
  }

  sortSingle() {
    if (this.sortField && this.sortOrder) {
      if (this.restoringSort) {
        this.restoringSort = false;
      }

      if (this.lazy) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      } else if (this.value) {
        if (this.customSort) {
          this.sortFunction.emit({
            data: this.value,
            mode: this.sortMode,
            field: this.sortField,
            order: this.sortOrder
          });
        } else {
          this.value.sort((data1, data2) => {
            let value1 = ObjectUtils.resolveFieldData(data1, this.sortField);
            let value2 = ObjectUtils.resolveFieldData(data2, this.sortField);
            let result = null;

            if (value1 == null && value2 != null) result = -1;
            else if (value1 != null && value2 == null) result = 1;
            else if (value1 == null && value2 == null) result = 0;
            else if (typeof value1 === 'string' && typeof value2 === 'string')
              result = value1.localeCompare(value2);
            else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

            return this.sortOrder * result;
          });

          this._value = [...this.value];
        }
      }

      let sortMeta: SortMeta = {
        field: this.sortField,
        order: this.sortOrder
      };

      this.onSort.emit(sortMeta);
      this.tableService.onSort(sortMeta);
    }
  }

  sortMultiple() {
    if (this.multiSortMeta) {
      if (this.lazy) {
        this.onLazyLoad.emit(this.createLazyLoadMetadata());
      } else if (this.value) {
        if (this.customSort) {
          this.sortFunction.emit({
            data: this.value,
            mode: this.sortMode,
            multiSortMeta: this.multiSortMeta
          });
        } else {
          this.value.sort((data1, data2) => {
            return this.multisortField(data1, data2, this.multiSortMeta, 0);
          });

          this._value = [...this.value];
        }
      }

      this.onSort.emit({
        multisortmeta: this.multiSortMeta
      });
      this.tableService.onSort(this.multiSortMeta);
    }
  }

  multisortField(data1, data2, multiSortMeta, index) {
    let value1 = ObjectUtils.resolveFieldData(
      data1,
      multiSortMeta[index].field
    );
    let value2 = ObjectUtils.resolveFieldData(
      data2,
      multiSortMeta[index].field
    );
    let result = null;

    if (value1 == null && value2 != null) result = -1;
    else if (value1 != null && value2 == null) result = 1;
    else if (value1 == null && value2 == null) result = 0;
    else if (typeof value1 == 'string' || value1 instanceof String) {
      if (value1.localeCompare && value1 != value2) {
        return multiSortMeta[index].order * value1.localeCompare(value2);
      }
    } else {
      result = value1 < value2 ? -1 : 1;
    }

    if (value1 == value2) {
      return multiSortMeta.length - 1 > index
        ? this.multisortField(data1, data2, multiSortMeta, index + 1)
        : 0;
    }

    return multiSortMeta[index].order * result;
  }

  getSortMeta(field: string) {
    if (this.multiSortMeta && this.multiSortMeta.length) {
      for (let i = 0; i < this.multiSortMeta.length; i++) {
        if (this.multiSortMeta[i].field === field) {
          return this.multiSortMeta[i];
        }
      }
    }

    return null;
  }

  isSorted(field: string) {
    if (this.sortMode === 'single') {
      return this.sortField && this.sortField === field;
    } else if (this.sortMode === 'multiple') {
      let sorted = false;
      if (this.multiSortMeta) {
        for (let i = 0; i < this.multiSortMeta.length; i++) {
          if (this.multiSortMeta[i].field == field) {
            sorted = true;
            break;
          }
        }
      }
      return sorted;
    }
  }

  handleRowClick(event) {
    let target = <HTMLElement>event.originalEvent.target;
    let targetNode = target.nodeName;
    let parentNode = target.parentElement && target.parentElement.nodeName;
    if (
      targetNode == 'INPUT' ||
      targetNode == 'BUTTON' ||
      targetNode == 'A' ||
      parentNode == 'INPUT' ||
      parentNode == 'BUTTON' ||
      parentNode == 'A' ||
      DomHandler.hasClass(event.originalEvent.target, 'fds-clickable')
    ) {
      return;
    }

    if (this.selectionMode) {
      this.preventSelectionSetterPropagation = true;
      if (
        this.isMultipleSelectionMode() &&
        event.originalEvent.shiftKey &&
        this.anchorRowIndex != null
      ) {
        DomHandler.clearSelection();
        if (this.rangeRowIndex != null) {
          this.clearSelectionRange(event.originalEvent);
        }

        this.rangeRowIndex = event.rowIndex;
      } else {
        let rowData = event.rowData;
        let selected = this.isSelected(rowData);
        let metaSelection = this.rowTouched ? false : this.metaKeySelection;
        let dataKeyValue = this.dataKey
          ? String(ObjectUtils.resolveFieldData(rowData, this.dataKey))
          : null;
        this.anchorRowIndex = event.rowIndex;
        this.rangeRowIndex = event.rowIndex;

        if (metaSelection) {
          let metaKey =
            event.originalEvent.metaKey || event.originalEvent.ctrlKey;

          if (selected && metaKey) {
            if (this.isSingleSelectionMode()) {
              this._selection = null;
              this.selectionKeys = {};
              this.selectionChange.emit(null);
            } else {
              let selectionIndex = this.findIndexInSelection(rowData);
              this._selection = this.selection.filter(
                (val, i) => i != selectionIndex
              );
              this.selectionChange.emit(this.selection);
              if (dataKeyValue) {
                delete this.selectionKeys[dataKeyValue];
              }
            }

            this.onRowUnselect.emit({
              originalEvent: event.originalEvent,
              data: rowData,
              type: 'row'
            });
          } else {
            if (this.isSingleSelectionMode()) {
              this._selection = rowData;
              this.selectionChange.emit(rowData);
              if (dataKeyValue) {
                this.selectionKeys = {};
                this.selectionKeys[dataKeyValue] = 1;
              }
            } else if (this.isMultipleSelectionMode()) {
              if (metaKey) {
                this._selection = this.selection || [];
              } else {
                this._selection = [];
                this.selectionKeys = {};
              }

              this._selection = [...this.selection, rowData];
              this.selectionChange.emit(this.selection);
              if (dataKeyValue) {
                this.selectionKeys[dataKeyValue] = 1;
              }
            }

            this.onRowSelect.emit({
              originalEvent: event.originalEvent,
              data: rowData,
              type: 'row',
              index: event.rowIndex
            });
          }
        } else {
          if (this.selectionMode === 'single') {
            if (selected) {
              this._selection = null;
              this.selectionKeys = {};
              this.selectionChange.emit(this.selection);
              this.onRowUnselect.emit({
                originalEvent: event.originalEvent,
                data: rowData,
                type: 'row',
                index: event.rowIndex
              });
            } else {
              this._selection = rowData;
              this.selectionChange.emit(this.selection);
              this.onRowSelect.emit({
                originalEvent: event.originalEvent,
                data: rowData,
                type: 'row',
                index: event.rowIndex
              });
              if (dataKeyValue) {
                this.selectionKeys = {};
                this.selectionKeys[dataKeyValue] = 1;
              }
            }
          } else if (this.selectionMode === 'multiple') {
            if (selected) {
              let selectionIndex = this.findIndexInSelection(rowData);
              this._selection = this.selection.filter(
                (val, i) => i != selectionIndex
              );
              this.selectionChange.emit(this.selection);
              this.onRowUnselect.emit({
                originalEvent: event.originalEvent,
                data: rowData,
                type: 'row',
                index: event.rowIndex
              });
              if (dataKeyValue) {
                delete this.selectionKeys[dataKeyValue];
              }
            } else {
              this._selection = this.selection
                ? [...this.selection, rowData]
                : [rowData];
              this.selectionChange.emit(this.selection);
              this.onRowSelect.emit({
                originalEvent: event.originalEvent,
                data: rowData,
                type: 'row',
                index: event.rowIndex
              });
              if (dataKeyValue) {
                this.selectionKeys[dataKeyValue] = 1;
              }
            }
          }
        }
      }

      this.tableService.onSelectionChange();

      if (this.isStateful()) {
        this.saveState();
      }
    }

    this.rowTouched = false;
  }

  handleRowTouchEnd(event) {
    this.rowTouched = true;
  }

  clearSelectionRange(event: MouseEvent) {
    let rangeStart, rangeEnd;

    if (this.rangeRowIndex > this.anchorRowIndex) {
      rangeStart = this.anchorRowIndex;
      rangeEnd = this.rangeRowIndex;
    } else if (this.rangeRowIndex < this.anchorRowIndex) {
      rangeStart = this.rangeRowIndex;
      rangeEnd = this.anchorRowIndex;
    } else {
      rangeStart = this.rangeRowIndex;
      rangeEnd = this.rangeRowIndex;
    }

    for (let i = rangeStart; i <= rangeEnd; i++) {
      let rangeRowData = this.value[i];
      let selectionIndex = this.findIndexInSelection(rangeRowData);
      this._selection = this.selection.filter((val, i) => i != selectionIndex);
      let dataKeyValue: string = this.dataKey
        ? String(ObjectUtils.resolveFieldData(rangeRowData, this.dataKey))
        : null;
      if (dataKeyValue) {
        delete this.selectionKeys[dataKeyValue];
      }
      this.onRowUnselect.emit({
        originalEvent: event,
        data: rangeRowData,
        type: 'row'
      });
    }
  }

  isSelected(rowData) {
    if (rowData && this.selection) {
      if (this.dataKey) {
        return (
          this.selectionKeys[
            ObjectUtils.resolveFieldData(rowData, this.dataKey)
          ] !== undefined
        );
      } else {
        if (this.selection instanceof Array)
          return this.findIndexInSelection(rowData) > -1;
        else return this.equals(rowData, this.selection);
      }
    }

    return false;
  }

  findIndexInSelection(rowData: any) {
    let index: number = -1;
    if (this.selection && this.selection.length) {
      for (let i = 0; i < this.selection.length; i++) {
        if (this.equals(rowData, this.selection[i])) {
          index = i;
          break;
        }
      }
    }

    return index;
  }

  toggleRowWithCheckbox(event, rowData: any) {
    this.selection = this.selection || [];
    let selected = this.isSelected(rowData);
    let dataKeyValue = this.dataKey
      ? String(ObjectUtils.resolveFieldData(rowData, this.dataKey))
      : null;
    this.preventSelectionSetterPropagation = true;

    if (selected) {
      let selectionIndex = this.findIndexInSelection(rowData);
      this._selection = this.selection.filter((val, i) => i != selectionIndex);
      this.selectionChange.emit(this.selection);
      this.onRowUnselect.emit({
        originalEvent: event.originalEvent,
        index: event.rowIndex,
        data: rowData,
        type: 'checkbox'
      });
      if (dataKeyValue) {
        delete this.selectionKeys[dataKeyValue];
      }
    } else {
      this._selection = this.selection
        ? [...this.selection, rowData]
        : [rowData];
      this.selectionChange.emit(this.selection);
      this.onRowSelect.emit({
        originalEvent: event.originalEvent,
        index: event.rowIndex,
        data: rowData,
        type: 'checkbox'
      });
      if (dataKeyValue) {
        this.selectionKeys[dataKeyValue] = 1;
      }
    }

    this.tableService.onSelectionChange();

    if (this.isStateful()) {
      this.saveState();
    }
  }

  toggleRowsWithCheckbox(event: Event, check: boolean) {
    this._selection = check ? this.value.slice() : [];
    this.preventSelectionSetterPropagation = true;
    this.updateSelectionKeys();
    this.selectionChange.emit(this._selection);
    this.tableService.onSelectionChange();
    this.onHeaderCheckboxToggle.emit({
      originalEvent: event,
      checked: check,
      data: this._selection
    });

    if (this.isStateful()) {
      this.saveState();
    }
  }

  equals(data1, data2) {
    return this.compareSelectionBy === 'equals'
      ? data1 === data2
      : ObjectUtils.equals(data1, data2, this.dataKey);
  }

  createLazyLoadMetadata(): any {
    return {
      first: this.first,
      rows: this.rows,
      sortField: this.sortField,
      sortOrder: this.sortOrder,
      multiSortMeta: this.multiSortMeta
    };
  }

  public clear() {
    this._sortField = null;
    this._sortOrder = this.defaultSortOrder;
    this._multiSortMeta = null;
    this.tableService.onSort(null);

    this.tableService.onResetChange();

    this.first = 0;

    if (this.lazy) {
      this.onLazyLoad.emit(this.createLazyLoadMetadata());
    }
  }

  public reset() {
    this.clear();
  }

  public resetScrollTop() {
    this.scrollTo({ top: 0 });
  }

  public scrollTo(options) {
    if (this.scrollableViewChild) {
      this.scrollableViewChild.scrollTo(options);
    }

    if (this.scrollableFrozenViewChild) {
      this.scrollableFrozenViewChild.scrollTo(options);
    }
  }

  isSingleSelectionMode() {
    return this.selectionMode === 'single';
  }

  isMultipleSelectionMode() {
    return this.selectionMode === 'multiple';
  }

  findParentScrollableView(column) {
    if (column) {
      let parent = column.parentElement;
      while (
        parent &&
        !DomHandler.hasClass(parent, 'fds-datatable-scrollable-view')
      ) {
        parent = parent.parentElement;
      }

      return parent;
    } else {
      return null;
    }
  }

  isEmpty() {
    let data = this.value;
    return data == null || data.length == 0;
  }

  getBlockableElement(): HTMLElement {
    return this.el.nativeElement.children[0];
  }

  getStorage() {
    switch (this.stateStorage) {
      case 'local':
        return window.localStorage;

      case 'session':
        return window.sessionStorage;

      default:
        throw new Error(
          this.stateStorage +
            ' is not a valid value for the state storage, supported values are "local" and "session".'
        );
    }
  }

  isStateful() {
    return this.stateKey != null;
  }

  saveState() {
    const storage = this.getStorage();
    let state: TableState = {};

    if (this.sortField) {
      state.sortField = this.sortField;
      state.sortOrder = this.sortOrder;
    }

    if (this.multiSortMeta) {
      state.multiSortMeta = this.multiSortMeta;
    }

    if (this.selection) {
      state.selection = this.selection;
    }

    if (Object.keys(state).length) {
      storage.setItem(this.stateKey, JSON.stringify(state));
    }

    this.onStateSave.emit(state);
  }

  clearState() {
    const storage = this.getStorage();

    if (this.stateKey) {
      storage.removeItem(this.stateKey);
    }
  }

  restoreState() {
    const storage = this.getStorage();
    const stateString = storage.getItem(this.stateKey);
    const dateFormat = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;
    const reviver = function (key, value) {
      if (typeof value === 'string' && dateFormat.test(value)) {
        return new Date(value);
      }

      return value;
    };

    if (stateString) {
      let state: TableState = JSON.parse(stateString, reviver);

      if (state.sortField) {
        this.restoringSort = true;
        this._sortField = state.sortField;
        this._sortOrder = state.sortOrder;
      }

      if (state.multiSortMeta) {
        this.restoringSort = true;
        this._multiSortMeta = state.multiSortMeta;
      }

      if (state.selection) {
        Promise.resolve(null).then(() =>
          this.selectionChange.emit(state.selection)
        );
      }

      this.stateRestored = true;

      this.onStateRestore.emit(state);
    }
  }

  saveColumnWidths(state) {
    let widths = [];
    let headers = DomHandler.find(
      this.containerViewChild.nativeElement,
      '.fds-datatable-thead > tr:first-child > th'
    );
    headers.map(header => widths.push(DomHandler.getOuterWidth(header)));
    state.columnWidths = widths.join(',');
  }

  findColumnByKey(key) {
    if (this.columns) {
      for (let col of this.columns) {
        if (col.key === key || col.field === key) return col;
        else continue;
      }
    } else {
      return null;
    }
  }

  ngOnDestroy() {
    this.initialized = null;
  }
}

@Component({
  selector: '[fdsTableBody]',
  template: `
    <ng-container>
      <ng-template
        ngFor
        let-rowData
        let-rowIndex="index"
        [ngForOf]="dt.value"
        [ngForTrackBy]="dt.rowTrackBy"
      >
        <ng-container
          *ngTemplateOutlet="
            template;
            context: {
              $implicit: rowData,
              rowIndex: rowIndex,
              columns: columns
            }
          "
        ></ng-container>
      </ng-template>
    </ng-container>
    <ng-container *ngIf="dt.loading">
      <ng-container
        *ngTemplateOutlet="
          dt.loadingBodyTemplate;
          context: { $implicit: columns }
        "
      ></ng-container>
    </ng-container>
    <ng-container *ngIf="dt.isEmpty() && !dt.loading">
      <ng-container
        *ngTemplateOutlet="
          dt.emptyMessageTemplate;
          context: { $implicit: columns }
        "
      ></ng-container>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None
})
export class TableBody implements OnDestroy {
  @Input('fdsTableBody') columns: any[];

  @Input('fdsTableBodyTemplate') template: TemplateRef<any>;

  subscription: Subscription;

  constructor(public dt: Table) {}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

@Component({
  selector: '[fdsScrollableView]',
  template: `
    <div #scrollHeader class="fds-datatable-scrollable-header">
      <div #scrollHeaderBox class="fds-datatable-scrollable-header-box">
        <table
          class="fds-datatable-scrollable-header-table"
          [ngClass]="dt.tableStyleClass"
          [ngStyle]="dt.tableStyle"
        >
          <thead class="fds-datatable-thead">
            <ng-container
              *ngTemplateOutlet="
                dt.headerTemplate;
                context: { $implicit: columns }
              "
            ></ng-container>
          </thead>
        </table>
      </div>
    </div>
    <ng-container>
      <div
        #scrollBody
        class="fds-datatable-scrollable-body"
        [ngStyle]="{
          'max-height': dt.scrollHeight !== 'flex' ? scrollHeight : undefined,
          'overflow-y': dt.scrollHeight ? 'scroll' : undefined
        }"
      >
        <table
          #scrollTable
          [class]="dt.tableStyleClass"
          [ngStyle]="dt.tableStyle"
        >
          <tbody
            class="fds-datatable-tbody"
            [fdsTableBody]="columns"
            [fdsTableBodyTemplate]="dt.bodyTemplate"
          ></tbody>
        </table>
      </div>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None
})
export class ScrollableView implements AfterViewInit, OnDestroy {
  @Input('fdsScrollableView') columns: any[];

  @ViewChild('scrollHeader') scrollHeaderViewChild: ElementRef;

  @ViewChild('scrollHeaderBox') scrollHeaderBoxViewChild: ElementRef;

  @ViewChild('scrollBody') scrollBodyViewChild: ElementRef;

  @ViewChild('scrollTable') scrollTableViewChild: ElementRef;

  @ViewChild(CdkVirtualScrollViewport)
  virtualScrollBody: CdkVirtualScrollViewport;

  // headerScrollListener: any;

  bodyScrollListener: any;

  frozenSiblingBody: HTMLDivElement;

  preventBodyScrollPropagation: boolean;

  _scrollHeight: string;

  virtualScrollTimeout: any;

  virtualPage: number;

  @Input() get scrollHeight(): string {
    return this._scrollHeight;
  }
  set scrollHeight(val: string) {
    this._scrollHeight = val;
    if (val != null && (val.includes('%') || val.includes('calc'))) {
      console.log(
        'Percentage scroll height calculation is removed in favor of the more performant CSS based flex mode, use scrollHeight="flex" instead.'
      );
    }
  }

  constructor(public dt: Table, public el: ElementRef, public zone: NgZone) {}

  ngAfterViewInit() {
    let scrollBarWidth = DomHandler.calculateScrollbarWidth();
    this.scrollHeaderBoxViewChild.nativeElement.style.paddingRight =
      scrollBarWidth + 'px';
  }

  unbindEvents() {
    if (this.scrollBodyViewChild && this.scrollBodyViewChild.nativeElement) {
      this.scrollBodyViewChild.nativeElement.removeEventListener(
        'scroll',
        this.bodyScrollListener
      );
    }

    if (this.virtualScrollBody && this.virtualScrollBody.getElementRef()) {
      this.virtualScrollBody
        .getElementRef()
        .nativeElement.removeEventListener('scroll', this.bodyScrollListener);
    }
  }

  onHeaderScroll() {
    const scrollLeft = this.scrollHeaderViewChild.nativeElement.scrollLeft;

    this.scrollBodyViewChild.nativeElement.scrollLeft = scrollLeft;

    this.preventBodyScrollPropagation = true;
  }

  onBodyScroll(event) {
    if (this.preventBodyScrollPropagation) {
      this.preventBodyScrollPropagation = false;
      return;
    }

    if (
      this.scrollHeaderViewChild &&
      this.scrollHeaderViewChild.nativeElement
    ) {
      this.scrollHeaderBoxViewChild.nativeElement.style.marginLeft =
        -1 * event.target.scrollLeft + 'px';
    }

    if (this.frozenSiblingBody) {
      this.frozenSiblingBody.scrollTop = event.target.scrollTop;
    }
  }

  onScrollIndexChange(index: number) {
    if (this.dt.lazy) {
      if (this.virtualScrollTimeout) {
        clearTimeout(this.virtualScrollTimeout);
      }

      this.virtualScrollTimeout = setTimeout(() => {
        let page = Math.floor(index / this.dt.rows);
        let virtualScrollOffset = page === 0 ? 0 : (page - 1) * this.dt.rows;
        let virtualScrollChunkSize =
          page === 0 ? this.dt.rows * 2 : this.dt.rows * 3;

        if (page !== this.virtualPage) {
          this.virtualPage = page;
          this.dt.onLazyLoad.emit({
            first: virtualScrollOffset,
            rows: virtualScrollChunkSize,
            sortField: this.dt.sortField,
            sortOrder: this.dt.sortOrder,
            multiSortMeta: this.dt.multiSortMeta
          });
        }
      }, this.dt.virtualScrollDelay);
    }
  }

  scrollTo(options): void {
    if (this.virtualScrollBody) {
      this.virtualScrollBody.scrollTo(options);
    } else {
      if (this.scrollBodyViewChild.nativeElement.scrollTo) {
        this.scrollBodyViewChild.nativeElement.scrollTo(options);
      } else {
        this.scrollBodyViewChild.nativeElement.scrollLeft = options.left;
        this.scrollBodyViewChild.nativeElement.scrollTop = options.top;
      }
    }
  }

  ngOnDestroy() {
    this.unbindEvents();
    this.frozenSiblingBody = null;
  }
}

@Directive({
  selector: '[fdsSortableColumn]',
  host: {
    '[class.fds-sortable-column]': 'isEnabled()',
    '[class.fds-highlight]': 'sorted',
    '[attr.tabindex]': 'isEnabled() ? "0" : null',
    '[attr.role]': '"columnheader"',
    '[attr.aria-sort]': 'sortOrder'
  }
})
export class SortableColumn implements OnInit, OnDestroy {
  @Input('fdsSortableColumn') field: string;

  @Input() fdsSortableColumnDisabled: boolean;

  sorted: boolean;

  sortOrder: string;

  subscription: Subscription;

  constructor(public dt: Table) {
    if (this.isEnabled()) {
      this.subscription = this.dt.tableService.sortSource$.subscribe(
        sortMeta => {
          this.updateSortState();
        }
      );
    }
  }

  ngOnInit() {
    if (this.isEnabled()) {
      this.updateSortState();
    }
  }

  updateSortState() {
    this.sorted = this.dt.isSorted(this.field);
    this.sortOrder = this.sorted
      ? this.dt.sortOrder === 1
        ? 'ascending'
        : 'descending'
      : 'none';
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent) {
    if (this.isEnabled()) {
      this.updateSortState();
      this.dt.sort({
        originalEvent: event,
        field: this.field
      });

      DomHandler.clearSelection();
    }
  }

  @HostListener('keydown.enter', ['$event'])
  onEnterKey(event: MouseEvent) {
    this.onClick(event);
  }

  isEnabled() {
    return this.fdsSortableColumnDisabled !== true;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

@Component({
  selector: 'fds-sortIcon',
  template: `
    <span
      class="fds-sortable-column-icon"
      [ngClass]="{
        'icon-arrowupward': sortOrder === 1,
        'icon-arrowdownward': sortOrder === -1,
        'icon-unfold-more': sortOrder === 0
      }"
    ></span>
    <span *ngIf="isMultiSorted()" class="fds-sortable-column-badge">{{
      getMultiSortMetaIndex() + 1
    }}</span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SortIcon implements OnInit, OnDestroy {
  @Input() field: string;

  subscription: Subscription;

  sortOrder: number;

  constructor(public dt: Table, public cd: ChangeDetectorRef) {
    this.subscription = this.dt.tableService.sortSource$.subscribe(sortMeta => {
      this.updateSortState();
    });
  }

  ngOnInit() {
    this.updateSortState();
  }

  onClick(event) {
    event.preventDefault();
  }

  updateSortState() {
    if (this.dt.sortMode === 'single') {
      this.sortOrder = this.dt.isSorted(this.field) ? this.dt.sortOrder : 0;
    } else if (this.dt.sortMode === 'multiple') {
      let sortMeta = this.dt.getSortMeta(this.field);
      this.sortOrder = sortMeta ? sortMeta.order : 0;
    }

    this.cd.markForCheck();
  }

  getMultiSortMetaIndex() {
    let multiSortMeta = this.dt._multiSortMeta;
    let index = -1;

    if (multiSortMeta && this.dt.sortMode === 'multiple') {
      for (let i = 0; i < multiSortMeta.length; i++) {
        let meta = multiSortMeta[i];
        if (meta.field === this.field || meta.field === this.field) {
          index = i;
          break;
        }
      }
    }

    return index;
  }

  isMultiSorted() {
    return this.dt.sortMode === 'multiple' && this.getMultiSortMetaIndex() > -1;
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

@Component({
    selector: 'fds-tableCheckbox',
    template: `
        <div class="fds-checkbox fds-component" [ngClass]="{
            formCheck: true,
            'fds-checkbox-checked': checked,
            'fds-checkbox-disabled': disabled
          }" (click)="onClick($event)">
            <div class="checkBox checkBox--curved" [class.checkBox__bg]="checked" [class.disabled]="disabled">
                <input type="checkbox" [attr.id]="inputId" [attr.name]="name" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()" [disabled]="disabled"
                [attr.required]="required" [attr.aria-label]="ariaLabel">
                <span class="checkboxFake"></span>
            </div>
            <div #box [ngClass]="{'fds-checkbox-box fds-component':true,
                'fds-highlight':checked, 'fds-disabled':disabled}" role="checkbox" [attr.aria-checked]="checked">
            </div>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class TableCheckbox {
  @Input() disabled: boolean;

  @Input() value: any;

  @Input() index: number;

  @Input() inputId: string;

  @Input() name: string;

  @Input() required: boolean;

  @Input() ariaLabel: string;

  @ViewChild('box') boxViewChild: ElementRef;

  checked: boolean;

  subscription: Subscription;

  constructor(
    public dt: Table,
    public tableService: TableService,
    public cd: ChangeDetectorRef
  ) {
    this.subscription = this.dt.tableService.selectionSource$.subscribe(() => {
      this.checked = this.dt.isSelected(this.value);
      this.cd.markForCheck();
    });
  }

  ngOnInit() {
    this.checked = this.dt.isSelected(this.value);
  }

  onClick(event: Event) {
    if (!this.disabled) {
      this.dt.toggleRowWithCheckbox(
        {
          originalEvent: event,
          rowIndex: this.index
        },
        this.value
      );
    }
    DomHandler.clearSelection();
  }

  onFocus() {
    DomHandler.addClass(this.boxViewChild.nativeElement, 'fds-focus');
  }

  onBlur() {
    DomHandler.removeClass(this.boxViewChild.nativeElement, 'fds-focus');
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

@Component({
    selector: 'fds-tableHeaderCheckbox',
    template: `
        <div class="fds-checkbox fds-component" [ngClass]="{
            formCheck: true,
            'fds-checkbox-minus-checked': (checked && !allChecked),
            'fds-checkbox-all-checked': allChecked,
            'fds-checkbox-disabled': disabled
          }" (click)="onClick($event)">
            <div class="checkBox checkBox--curved" [class.checkBox__bg]="checked || allChecked" [class.disabled]="disabled">
                <input #cb type="checkbox" [attr.id]="inputId" [attr.name]="name" [checked]="checked" (focus)="onFocus()" (blur)="onBlur()"
                [disabled]="isDisabled()" [attr.aria-label]="ariaLabel">
                <span class="checkboxFake"></span>
            </div>
            <div #box [ngClass]="{'fds-checkbox-box':true,
                'fds-highlight':checked, 'fds-disabled': isDisabled()}" role="checkbox" [attr.aria-checked]="checked">
            </div>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class TableHeaderCheckbox {
  @ViewChild('box') boxViewChild: ElementRef;

  @Input() disabled: boolean;

  @Input() inputId: string;

  @Input() name: string;

  @Input() ariaLabel: string;

  checked: boolean;
  allChecked: boolean;

  selectionChangeSubscription: Subscription;

  valueChangeSubscription: Subscription;

  constructor(
    public dt: Table,
    public tableService: TableService,
    public cd: ChangeDetectorRef
  ) {
    this.valueChangeSubscription = this.dt.tableService.valueSource$.subscribe(
      () => {
        this.checked = this.updateCheckedState();
        this.allChecked = this.updateAllCheckedState();
      }
    );

    this.selectionChangeSubscription = this.dt.tableService.selectionSource$.subscribe(
      () => {
        this.checked = this.updateCheckedState();
        this.allChecked = this.updateAllCheckedState();
      }
    );
  }

  ngOnInit() {
    this.checked = this.updateCheckedState();
    this.allChecked = this.updateAllCheckedState();
  }

  onClick(event: Event) {
    if (!this.disabled) {
      if (this.dt.value && this.dt.value.length > 0) {
        this.dt.toggleRowsWithCheckbox(event, !this.checked);
      }
    }

    DomHandler.clearSelection();
  }

  onFocus() {
    DomHandler.addClass(this.boxViewChild.nativeElement, 'fds-focus');
  }

  onBlur() {
    DomHandler.removeClass(this.boxViewChild.nativeElement, 'fds-focus');
  }

  isDisabled() {
    return this.disabled || !this.dt.value || !this.dt.value.length;
  }

  ngOnDestroy() {
    if (this.selectionChangeSubscription) {
      this.selectionChangeSubscription.unsubscribe();
    }

    if (this.valueChangeSubscription) {
      this.valueChangeSubscription.unsubscribe();
    }
  }

  updateCheckedState() {
    this.cd.markForCheck();
    const val = this.dt.value;
    return (
      val && val.length > 0 && this.dt.selection && this.dt.selection.length > 0
      // && this.dt.selection.length !== val.length
    );
  }

  updateAllCheckedState() {
    this.cd.markForCheck();
    const val = this.dt.value;
    return (
      val &&
      val.length > 0 &&
      this.dt.selection &&
      this.dt.selection.length > 0 &&
      this.dt.selection.length === val.length
    );
  }
}
