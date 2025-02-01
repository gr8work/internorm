import type { ReactNode } from 'react';

const useFlatListToHierarchical = (data: DataInterface[], child?: boolean) => {

  let tree:TreeInterface[] = [];

  data.forEach((item) => {
    if(item.parentId === null || child){
      const { id, label, cssClasses, uri, childItems, title } = item;
      tree = [...tree, {id, children: label, to: uri, type: cssClasses.length ? cssClasses[0] : '', isLink: title === null,  items: childItems ? useFlatListToHierarchical(childItems.nodes, true) : []}]
    }
  })

  return tree;
}

interface DataInterface {
  id: string;
  label: string;
  cssClasses: string[];
  parentId?: string;
  uri: string;
  title?: boolean;
  childItems: {nodes: DataInterface[]};
}

interface TreeInterface {
  id: string;
  children: string | ReactNode;
  to?: string;
  type?: string;
  isLink?: boolean;
  items?: TreeInterface[];
}

export { useFlatListToHierarchical, TreeInterface }
