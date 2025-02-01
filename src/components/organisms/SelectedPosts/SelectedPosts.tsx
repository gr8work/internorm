import React from 'react';

import SelectedPostCard, { SelectedPostType } from 'components/molecules/SelectedPostCard';
import { StyledCardSlider, StyledHeading, StyledWrapper } from './SelectedPosts.styles';
import { SliderType } from 'components/molecules/Slider';
import { breakpointsObject } from 'theme/breakpoints';
import Container from 'components/atoms/Container';

export type SelectedPostsType = {
  posts: SelectedPostType[];
  heading?: string;
  variant?: 'window-guide' | 'home-stories' | 'realizations' | 'inspirations';
};

const SelectedPosts = ({ variant = 'home-stories', heading, posts = [] }: SelectedPostsType) => {
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

  const cardSliderOptionsSecondary: SliderType['options'] = {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      [breakpointsObject.md]: {
        slidesPerView: 2,
      },
    },
  };

  const slides = posts
    ?.map((post) => {
      if (!post.title && !post.featuredImage) return null;

      return <SelectedPostCard key={post.title} {...post} {...{ variant }} />;
    })
    .filter((post) => post != null);

  return slides ? (
    <Container>
      <StyledWrapper data-variant={variant}>
        <StyledHeading>{heading}</StyledHeading>
        <StyledCardSlider
          {...{
            slides,
            options: variant === 'window-guide' ? cardSliderOptionsSecondary : cardSliderOptions,
            variant: 'secondary',
          }}
        />
      </StyledWrapper>
    </Container>
  ) : null;
};

export default SelectedPosts;
