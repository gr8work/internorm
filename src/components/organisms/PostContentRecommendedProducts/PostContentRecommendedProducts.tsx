import ProductCard from 'components/molecules/ProductCard';
import { SliderType } from 'components/molecules/Slider';
import React from 'react';
import { breakpointsObject } from 'theme/breakpoints';
import { ContentThemeRecommendedProducts } from 'components/organisms/PostContentRenderer';
import {
  StyledCardSlider,
  StyledHeading,
  StyledProducts,
  StyledWrapper,
} from './PostContentRecommendedProducts.styles';

const PostContentRecommendedProducts = ({
  recommendedProducts,
}: ContentThemeRecommendedProducts) => {
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

  const cardSlides = recommendedProducts?.products?.map((product) => (
    <ProductCard key={product.title} {...product} />
  ));

  return (
    <StyledWrapper>
      <StyledProducts>
        {recommendedProducts?.heading ? (
          <StyledHeading>{recommendedProducts.heading}</StyledHeading>
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
  );
};

export default PostContentRecommendedProducts;
