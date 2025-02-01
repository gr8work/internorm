import React from 'react';

import { ContentThemeProductsInRealization } from 'components/organisms/PostContentRenderer';

import {
  StyledCardSlider,
  StyledContactAs,
  StyledHeading,
  StyledProducts,
  StyledWrapper,
} from './PostContentProductsInRealization.styles';
import { breakpointsObject } from 'theme/breakpoints';

import { SliderType } from 'components/molecules/Slider';
import ProductCard from 'components/molecules/ProductCard';

const PostContentProductsInRealization = ({
  productsInRealizations,
}: Omit<ContentThemeProductsInRealization, 'fieldGroupName'>) => {
  const cardSliderOptions: SliderType['options'] = {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      [breakpointsObject.md]: {
        slidesPerView: 2,
      },
      [breakpointsObject.lg]: {
        slidesPerView: 3,
      },
    },
  };

  const cardSlides = productsInRealizations?.products?.map((product) => (
    <ProductCard key={product.title} {...product} />
  ));

  return productsInRealizations?.products ? (
    <StyledWrapper>
      <StyledContactAs
        {...productsInRealizations?.contactUsBox}
        {...{ backgroundColor: 'heavenlyWhite' }}
      />
      <StyledProducts>
        {productsInRealizations?.heading ? (
          <StyledHeading>{productsInRealizations.heading}</StyledHeading>
        ) : null}
        <StyledCardSlider
          {...{
            slides: cardSlides,
            options: cardSliderOptions,
            variant: 'secondary',
          }}
        />
      </StyledProducts>
    </StyledWrapper>
  ) : null;
};

export default PostContentProductsInRealization;
