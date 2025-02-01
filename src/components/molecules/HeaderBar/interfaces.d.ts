export interface IHeaderBar {
  items: Items[];
}

interface Items {
  id?: integer;
  label: string;
  uri: string;
}
