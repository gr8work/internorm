import React, { FC } from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { IParallax } from './interface';
import { Wrapper } from './styles';

export const Parallax: FC<IParallax> = ({ image, type, handleClick }) => (
  <Wrapper type={type} onClick={() => handleClick()}>
    <ParallaxBanner className="parallax-banner">
      <ParallaxBannerLayer speed={-15}>{image}</ParallaxBannerLayer>
    </ParallaxBanner>
  </Wrapper>
);
