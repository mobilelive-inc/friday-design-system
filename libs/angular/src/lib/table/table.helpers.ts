export interface FilterMetadata {
  value?: any;
  matchMode?: string;
  operator?: string;
}

export interface SortMeta {
  field: string;
  order: number;
}

export interface TableState {
  first?: number;
  rows?: number;
  sortField?: string;
  sortOrder?: number;
  multiSortMeta?: SortMeta[];
  filters?: { [s: string]: FilterMetadata | FilterMetadata[] };
  columnWidths?: string;
  tableWidth?: string;
  selection?: any;
  columnOrder?: string[];
  expandedRowKeys?: { [s: string]: boolean };
}
