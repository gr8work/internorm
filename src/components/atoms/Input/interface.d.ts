export interface IInput extends IInputWrapper {
  text?: string;
  value?: string;
  checked?: boolean;
  handleChange: any;
  className?: string;
}

export interface IInputWrapper {
  name: string;
  type: string;
  error?: string;
  placeholder?: string;
}
