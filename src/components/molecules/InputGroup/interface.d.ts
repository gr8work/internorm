export interface IInputGroup {
  text?: string;
  value?: string;
  error?: string;
  type?: string;
  input?: IInput;
  checked?: boolean;
  items?: IInput[];
  handleChange: any;
}

interface IInput {
  text?: string;
  name: string;
  type: string;
  error?: string;
  value?: string;
  placeholder?: string;
  checked?: boolean;
}

export interface IInputGroupWrapper {
  type?: string;
}

export interface IInputGroupList {
  type?: string;
}
