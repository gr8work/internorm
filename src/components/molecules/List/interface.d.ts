import { TreeInterface } from "hooks/useFlatListToHierarchical";

export interface IList {
  type?: string;
  items?: TreeInterface[];
  className?: string;
  index?: number;
  handleClick?: function;
  changedIndexList?: function;
}

export interface IListWrapper {
  type: string;
}