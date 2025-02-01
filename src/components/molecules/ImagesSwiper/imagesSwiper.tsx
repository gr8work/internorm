import React, { FC, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IImagesSwiper } from './interface';
import { Wrapper, SoloSlide, StyledArrowMore } from './styles';

import 'swiper/css';
import Text from 'components/atoms/Text';
import NavigationSlider from 'components/molecules/NavigationSlider';
import SliderArrow from 'components/atoms/SliderArrow';
import WpImage from 'components/atoms/WpImage';
import FadeIn from 'components/atoms/FadeIn';
import ImageHover from 'components/atoms/ImageHover';
import LinkWrapContent from 'components/atoms/LinkWrappContent';
import { Autoplay } from 'swiper';

export const ImagesSwiper: FC<IImagesSwiper> = ({ items, type }) => {
  const [activeSliderId, changeSliderId] = useState(0);

  return (
    <Wrapper>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000 }}
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
        {items.map(({ image, title, content, link }) => (
          <SwiperSlide key={title}>
            <FadeIn>
              <SoloSlide>
                {image && !link?.url ? (
                  <ImageHover>
                    <WpImage {...image} />
                  </ImageHover>
                ) : (
                  <LinkWrapContent {...{ link }}>
                    {image ? (
                      <ImageHover>
                        <WpImage {...image} />
                      </ImageHover>
                    ) : null}
                  </LinkWrapContent>
                )}
                {link?.url ? (
                  <LinkWrapContent {...{ link }}>
                    <Text type={type !== 'white' ? 'red-title' : 'dark-title'} text={title} />
                  </LinkWrapContent>
                ) : (
                  <Text type={type !== 'white' ? 'red-title' : 'dark-title'} text={title} />
                )}

                <Text type={type !== 'white' ? 'white' : 'form-text'} text={content} />
                {link?.url ? <StyledArrowMore {...{ link, type }} /> : null}
              </SoloSlide>
            </FadeIn>
          </SwiperSlide>
        ))}
        <NavigationSlider sliders={items} activeIndex={activeSliderId} />
        <SliderArrow side="prev" type={type !== 'white' ? 'light' : 'dark'} />
        <SliderArrow side="next" type={type !== 'white' ? 'light' : 'dark'} />
      </Swiper>
    </Wrapper>
  );
};
