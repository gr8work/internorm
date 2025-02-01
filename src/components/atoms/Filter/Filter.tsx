import React from 'react';
import { ButtonFilterItem } from './Filter.styles';

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export type FilterType = {
  title: string;
  isActive: boolean;
  onClick: React.MouseEventHandler;
};
const Filter = ({ title, isActive, onClick }: FilterType) => (
  <ButtonFilterItem onClick={onClick} className={title} isActive={isActive}>
    <span>{capitalize(title)}</span>
  </ButtonFilterItem>
);

export default Filter;
