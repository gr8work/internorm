import React, { useEffect, useState } from 'react';
import { Pagination, Autoplay } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import StylisticLineSlide, {
  StylisticLineSlideType,
} from 'components/molecules/StylisticLineSlide';
import Title from 'components/atoms/Title';

import 'swiper/css';

import { StyledPagination, StyledSwiper, StyledText, StyledWrapper } from './StylisticLines.styles';
import { breakpointsObject } from 'theme/breakpoints';
import { ViewVariantType } from 'components/organisms/SwitchCategoryViewMode';
import useWindowSize from 'hooks/useWindowSize';
import FadeIn from 'components/atoms/FadeIn';

export type StylisticLinesType = {
  slides: StylisticLineSlideType[];
  viewVariant: ViewVariantType;
  heading?: string;
  text?: string;
};

const StylisticLines = ({ heading, text, slides, viewVariant }: StylisticLinesType) => {
  const paginationTags = slides.map(({ bar }) => bar.tag);
  const paginationColors = slides.map(({ bar }) => bar.color);
  const [isDynamicBullets, setIsDynamicBullets] = useState(true);
  const { windowWidth } = useWindowSize();

  useEffect(() => {
    if (windowWidth && windowWidth >= breakpointsObject.md) {
      setIsDynamicBullets(false);
    } else {
      setIsDynamicBullets(true);
    }
  }, [windowWidth]);

  return (
    <StyledWrapper asEl="section" aria-labelledby="section-title">
      <FadeIn>
        {heading ? <Title id="section-title" title={heading} type="section" /> : null}
      </FadeIn>
      <FadeIn>{text ? <StyledText text={text} /> : null}</FadeIn>
      <StyledPagination className="stylistic-lines-pagination" />
      <StyledSwiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          [breakpointsObject.md]: {
            pagination: {
              dynamicBullets: false,
            },
          },
        }}
        pagination={{
          clickable: true,
          dynamicBullets: isDynamicBullets,
          dynamicMainBullets: 1,
          el: '.stylistic-lines-pagination',
          renderBullet(index, className) {
            return `<button class="${className} swiper-pagination-bullet-color-${paginationColors[index]}">${paginationTags[index]}</button>`;
          },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.bar.tag}>
            <StylisticLineSlide {...slide} {...{ viewVariant }} />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </StyledWrapper>
  );
};

export default StylisticLines;
