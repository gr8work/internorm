import React from 'react';

import { IAboutSlider } from './interface';
import { StyledWrapper, StyledSlider, StyledMap, StyledMapImage, StyledWpImage } from './styles';
import Button from 'components/atoms/Button';

const AboutSlider = ({ map, images, button }: IAboutSlider) => {
  const slides = images?.map(({ image }) => (
    <StyledWpImage key={image.altText} {...image} objectFit="cover" />
  ));

  return (
    <StyledWrapper>
      {slides ? (
        <StyledSlider
          options={{ slidesPerView: 1, spaceBetween: 30 }}
          {...{ slides, variant: 'primary' }}
        />
      ) : null}
      <StyledMap>
        <StyledMapImage {...map} />
        <Button text={button.label} link={button.link} />
      </StyledMap>
    </StyledWrapper>
  );
};

export default AboutSlider;
