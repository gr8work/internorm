import type { ReactNode } from 'react';

export interface IBanner {
  background: IBackground;
  children?: ReactNode;
  type?: string;
}

export interface IBannerWrapper {
  background: IBackground;
  type?: string;
}

export interface IBackground {
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}
