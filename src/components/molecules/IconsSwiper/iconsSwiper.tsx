import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IIconsSwiper } from './interface';
import { Wrapper, SoloSlide } from './styles';

import 'swiper/css';
import Icon from 'components/atoms/Icon';
import Text from 'components/atoms/Text';
import List from 'components/molecules/List';

export const IconsSwiper: FC<IIconsSwiper> = ({ type, items }) => (
  <Wrapper>
    <Swiper
      spaceBetween={5}
      breakpoints={{
        576: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        1440: {
          slidesPerView: 6,
        },
      }}
      slidesPerView={1.6}
    >
      {items.map(({ icon, text, list }, index) => (
        <SwiperSlide key={index}>
          <SoloSlide last={index === items.length - 1}>
            <Icon src={icon.src} type={icon.type} />
            {text && <Text type="swiper-icons" text={text} />}
            {list && <List items={list.items} type="swiper-icons" />}
          </SoloSlide>
        </SwiperSlide>
      ))}
    </Swiper>
  </Wrapper>
);
