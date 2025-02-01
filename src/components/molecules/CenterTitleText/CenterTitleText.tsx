import React from 'react';
import {
  CenterTitleTextWrapper,
  WrapperContent,
} from 'components/molecules/CenterTitleText/CenterTitleText.styles';
import FadeIn from 'components/atoms/FadeIn';

export interface CenterTextTitleProp {
  type: TypeBackgroundTextTitle;
  title: string;
  descriptionText: string;
  id?: string;
}

export interface BackgroundTextTitlePropStyle {
  type: TypeBackgroundTextTitle;
}

export type TypeBackgroundTextTitle =
  | 'default'
  | 'billowyClouds'
  | 'alabaster'
  | 'white'
  | 'lighter-small';

const CenterTitleText = ({ type = 'default', title, descriptionText, id }: CenterTextTitleProp) => (
  <CenterTitleTextWrapper type={type} id={id || ''}>
    <WrapperContent>
      <FadeIn>
        <h3>{title}</h3>
      </FadeIn>
      <FadeIn>
        <p>{descriptionText}</p>
      </FadeIn>
    </WrapperContent>
  </CenterTitleTextWrapper>
);
export default CenterTitleText;
