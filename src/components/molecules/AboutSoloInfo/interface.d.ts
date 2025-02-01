export interface IAboutSoloInfo {
  title: string;
  items: Item[];
  linkText?: string;
  link?: {
    url: string;
    target: string;
  };
}

interface Item {
  text: string;
  bold: boolean;
}
