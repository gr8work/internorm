import React, { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IImagesSwiperLabels } from './interface';
import { Wrapper, SoloSlide } from 'components/molecules/ImagesSwiper/styles';

import 'swiper/css';

import Text from 'components/atoms/Text';
import NavigationSlider from 'components/molecules/NavigationSlider';
import SliderArrow from 'components/atoms/SliderArrow';
import WpImage from 'components/atoms/WpImage';
import ITecBadge from 'components/atoms/ITecBadge';
import FadeIn from 'components/atoms/FadeIn';
import ArrowMore from 'components/atoms/ArrowMore';
import LinkWrapContent from 'components/atoms/LinkWrappContent';
import ImageHover from 'components/atoms/ImageHover';
import { Autoplay } from 'swiper';

export const ImagesSwiperLabels: FC<IImagesSwiperLabels> = ({ items }) => {
  const [activeSliderId, changeSliderId] = useState(0);

  return (
    <Wrapper>
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2.5,
          },
          1440: {
            slidesPerView: 3.5,
          },
        }}
        slidesPerView={1}
        onSlideChange={({ activeIndex }) => changeSliderId(activeIndex)}
      >
        {items.map(({ image, content, secondTextLabel, mainTextLabel, link }, index) => (
          <SwiperSlide key={mainTextLabel + secondTextLabel + index}>
            <SoloSlide>
              {image && link ? (
                <LinkWrapContent link={link.uri}>
                  {image ? (
                    <ImageHover>
                      <WpImage {...image} />
                    </ImageHover>
                  ) : null}
                </LinkWrapContent>
              ) : (
                <ImageHover>{image ? <WpImage {...image} /> : null}</ImageHover>
              )}
              {link ? (
                <LinkWrapContent link={link.uri}>
                  <FadeIn>
                    <ITecBadge {...{ mainTextLabel, secondTextLabel }} />
                  </FadeIn>
                </LinkWrapContent>
              ) : (
                <FadeIn>
                  <ITecBadge {...{ mainTextLabel, secondTextLabel }} />
                </FadeIn>
              )}

              <FadeIn>
                <Text type="slider-text" text={content} />
              </FadeIn>
              {link ? (
                <FadeIn>
                  <ArrowMore link={link.uri} />
                </FadeIn>
              ) : null}
            </SoloSlide>
          </SwiperSlide>
        ))}
        <NavigationSlider sliders={items} activeIndex={activeSliderId} />
        <SliderArrow side="prev" type="dark" />
        <SliderArrow side="next" type="dark" />
      </Swiper>
    </Wrapper>
  );
};
