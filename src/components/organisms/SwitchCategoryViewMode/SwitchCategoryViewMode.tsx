import React from 'react';

import Switch, { SwitchType } from 'components/molecules/Switch';

import {
  StyledSwitchWrapper,
  StyledText,
  StyledTitle,
  StyledType,
  StyledWrapper,
} from './SwitchCategoryViewMode.styles';

export type SwitchCategoryViewModeType = {
  text: string;
  modes: {
    firstTitle: string;
    firstDescription: string;
    secondTitle: string;
    secondDescription: string;
  };
  backgroundColor?: SwitchCategoryBackgroundColorType;
};

export type SwitchCategoryViewModeProps = {
  isSwitchPressed: SwitchType['isSwitchPressed'];
  toggleIsSwitchPressed: SwitchType['toggleIsSwitchPressed'];
} & SwitchCategoryViewModeType;

export type ViewVariantType = 'product' | 'architecture';

export interface CategoryViewWrapperStyle {
  backgroundColor: SwitchCategoryBackgroundColorType;
}

export type SwitchCategoryBackgroundColorType = 'default' | 'billowyClouds' | 'alabaster' | 'white';

const SwitchCategoryViewMode = ({
  text,
  modes: { firstTitle, firstDescription, secondTitle, secondDescription },
  isSwitchPressed,
  toggleIsSwitchPressed,
  backgroundColor = 'default',
}: SwitchCategoryViewModeProps) => (
  <StyledWrapper backgroundColor={backgroundColor} aria-labelledby="section-title">
    <StyledTitle id="section-title">{text}</StyledTitle>
    <StyledSwitchWrapper>
      <Switch {...{ isSwitchPressed, toggleIsSwitchPressed }} />
      <StyledType area={`type-${0}`}>{firstTitle}</StyledType>
      <StyledText area={`text-${0}`}>{firstDescription}</StyledText>
      <StyledType area={`type-${1}`}>{secondTitle}</StyledType>
      <StyledText area={`text-${1}`}>{secondDescription}</StyledText>
    </StyledSwitchWrapper>
  </StyledWrapper>
);

export default SwitchCategoryViewMode;
