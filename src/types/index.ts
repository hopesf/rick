import { MultiValue } from 'react-select';

export interface IlistItem {
  id: number;
  name: string;
  image: string;
  episode: string;
  selected?: boolean;
}

export interface IListPeopleItemProps {
  item: IlistItem;
  query: string;
}

export interface IListPeopleProps {
  data: any;
  handleScroll: Function;
  status: string;
  query: string;
}

export interface IapiResponsePagesResults {
  id: number;
  name: string;
  image: string;
  episode: string[];
  url: string;
  created: string;
  selected?: boolean;
}

export interface IapiResponsePages {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: null | string;
  };
  results: [IapiResponsePagesResults];
}

export interface IapiResponse {
  pages: [IapiResponsePages];
  pageParams: [];
}

export interface ISelectOption {
  value: string;
  label: string;
}

export interface ISearchPeopleProps {
  listData: IapiResponsePagesResults[];
  setSelectedOptions: any;
  setQuery: any;
}
