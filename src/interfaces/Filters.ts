export interface GenericFilters {
  columnFilters: {id: string; value: string}[];
  setColumnFilters: React.Dispatch<
    React.SetStateAction<{id: string; value: string}[]>
  >;
}

export interface PopoverPagination {
  paginationSize: number;
  setPagination: React.Dispatch<
    React.SetStateAction<{pageIndex: number; pageSize: number}>
  >;
}

export interface PopoverItemInterface {
  item: string;
  setColumnFilters: React.Dispatch<
    React.SetStateAction<{id: string; value: string}[]>
  >;
  isActive: boolean;
  filterId: string;
}

export interface GenericPopovers extends GenericFilters {
  filterId: string;
  options: string[];
}

export interface FiltersInterface extends GenericFilters, PopoverPagination {}
