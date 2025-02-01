import React from 'react';

import { WpImageType } from 'components/atoms/WpImage';

import { StyledImage, StyledText, StyledTitle, StyledWrapper } from './LightAccents.styles';
import FadeIn from 'components/atoms/FadeIn';

export type LightAccentsType = {
  subTitle: string;
  title: string;
  text: string;
  image: WpImageType;
};

const LightAccents = ({ subTitle, title, text, image }: LightAccentsType) => (
  <StyledWrapper>
    <StyledImage {...image} />
    <FadeIn>
      <StyledTitle {...{ subTitle, title, type: 'white' }} />
    </FadeIn>
    <FadeIn>
      <StyledText {...{ text, type: 'white' }} />
    </FadeIn>
  </StyledWrapper>
);

export default LightAccents;
