import { TreeInterface } from "hooks/useFlatListToHierarchical";

export interface ISideBar {
  items: TreeInterface[];
  text: string;
  questionText: string;
  questionTo: string;
  isOpen: boolean;
  index: number;
  changedIndex: function;
}
