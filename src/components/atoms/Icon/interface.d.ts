import type { LengthUnitType } from 'types';

export interface IIcon {
  src: string;
  type?: string;
  width?: LengthUnitType;
  height?: LengthUnitType;
  backgroundSize?: string;
  className?: string;
  handleClick?: () => void;
}
