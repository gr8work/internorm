import { ReactNode } from 'react';

export interface ILink {
  to: string;
  type?: string;
  children: string | ReactNode;
  target?: string;
}

export interface ICustomLink {
  type: string;
}
