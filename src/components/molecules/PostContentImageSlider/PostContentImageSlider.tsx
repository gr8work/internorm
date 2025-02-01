import React from 'react';

import { ContentThemeImageSlider } from 'components/organisms/PostContentRenderer';
import styled from 'styled-components';
import Slider from 'components/molecules/Slider';
import WpImage from 'components/atoms/WpImage';
import { media } from 'theme/media';

const StyledSlider = styled(Slider)`
  margin: 0 auto 50px;
  max-width: 1137px;

  ${media.up('lg')} {
    margin-bottom: 70px;
  }
`;

const StyledWpImage = styled(WpImage)`
  height: 600px;
`;

const PostContentImageSlider = ({ imageSlider }: ContentThemeImageSlider) => {
  const slides = imageSlider.map((slide) => (
    <StyledWpImage key={slide.image.altText} {...slide.image} />
  ));

  return <StyledSlider {...{ slides, variant: 'secondary' }} />;
};

export default PostContentImageSlider;
