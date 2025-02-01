export interface IButton {
  type?: string;
  text: string;
  link?:
    | string
    | {
        url: string;
        target?: string;
      };
  ariaLabel?: string;
  className?: string;
  handleClick?: any;
}

export interface IButtonWrapper {
  boxtype: string;
}

export type ButtonType = {
  label: string;
  ariaLabel?: string;
  type?: string;
  link?:
    | string
    | {
        url: string;
        traget?: string;
      };
};
