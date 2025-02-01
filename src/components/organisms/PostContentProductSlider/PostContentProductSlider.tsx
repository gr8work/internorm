import React from 'react';

import { ContentThemeSliderRecommendedProducts } from 'components/organisms/PostContentRenderer';

import { StyledCardSlider, StyledProducts, StyledWrapper } from './PostContentProductSlider.styles';

import { SliderType } from 'components/molecules/Slider';
import ProductCard from 'components/molecules/ProductCard';

const PostContentProductSlider = ({
  sliderRecommendedProducts: { heading, products },
}: ContentThemeSliderRecommendedProducts) => {
  const cardSliderOptions: SliderType['options'] = {
    slidesPerView: 1,
    spaceBetween: 30,
  };

  const cardSlides = products?.map((product) => (
    <ProductCard key={product.title} {...product} {...{ variant: 'secondary', heading }} />
  ));

  return (
    <StyledWrapper>
      <StyledProducts>
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

export default PostContentProductSlider;
