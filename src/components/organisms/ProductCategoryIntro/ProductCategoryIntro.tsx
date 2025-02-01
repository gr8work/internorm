import React from 'react';

import type { WpImageType } from 'components/atoms/WpImage';

import {
  StyledDescription,
  StyledHeading,
  StyledWpImage,
  StyledWrapper,
} from './ProductCategoryIntro.styles';
import FadeIn from 'components/atoms/FadeIn';

export type ProductCategoryType = {
  title: string;
  text?: string;
  wpImage?: WpImageType;
  isHomeStories?: boolean;
};

const ProductCategoryIntro = ({
  title,
  text,
  wpImage,
  isHomeStories = false,
}: ProductCategoryType) => (
  <StyledWrapper aria-labelledby={isHomeStories ? 'home-stories' : 'intro-heading'}>
    <FadeIn>
      <StyledHeading
        id={isHomeStories ? 'home-stories' : 'intro-heading'}
        {...{ title, type: 'intro' }}
      />
    </FadeIn>
    <FadeIn custom={{ transition: { delay: 0.2 } }}>
      {text && <StyledDescription {...{ text }} />}
    </FadeIn>
    <FadeIn custom={{ transition: { delay: 0.4 } }}>
      {wpImage ? <StyledWpImage {...wpImage} /> : null}
    </FadeIn>
  </StyledWrapper>
);

export default ProductCategoryIntro;
