import React from 'react';
import SoloLocation from 'components/molecules/SoloLocation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { IAboutLocations } from './interface';
import { StyledWrapper, StyledContent, StyledList } from './styles';

import 'swiper/css';
import FadeIn from 'components/atoms/FadeIn';

const AboutLocations = ({ title, items = [] }: IAboutLocations) => (
  <StyledWrapper>
    <StyledContent>
      <FadeIn asEl="h6">{title}</FadeIn>
      <StyledList>
        <Swiper
          breakpoints={{
            440: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 4,
            },
          }}
          slidesPerView={1}
          spaceBetween={40}
        >
          {items?.map((item, index) => (
            <SwiperSlide key={index}>
              <FadeIn>
                <SoloLocation {...item} />
              </FadeIn>
            </SwiperSlide>
          ))}
        </Swiper>
      </StyledList>
    </StyledContent>
  </StyledWrapper>
);

export default AboutLocations;
