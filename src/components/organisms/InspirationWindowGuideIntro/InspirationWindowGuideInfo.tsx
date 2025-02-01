import React from 'react';

import type { WpImageType } from 'components/atoms/WpImage';
import FadeIn from 'components/atoms/FadeIn';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  StyledDate,
  StyledDescription,
  StyledHeading,
  StyledWpImage,
  StyledWrapper,
  WrapperTagsContainer,
  WrapTextTag,
} from './InspirationWindowGuideInfo.styles';
import { handleScrollToSection } from 'utils/handleScrollToSection';
import accents from 'remove-accents';

export type WindowGuideInfoType = {
  title: string;
  headingTags: string[];
  date: string;
  text?: string;
  image?: WpImageType;
};

const InspirationWindowGuideInfo = ({
  title,
  text,
  image,
  date,
  headingTags = [],
}: WindowGuideInfoType) => (
  <StyledWrapper aria-labelledby="intro-heading">
    <FadeIn>
      <StyledHeading id="intro-heading" {...{ title, type: 'intro' }} />
    </FadeIn>
    <FadeIn custom={{ transition: { delay: 0.2 } }}>
      {date && <StyledDate type="red-data" text={date} />}
    </FadeIn>
    <FadeIn custom={{ transition: { delay: 0.2 } }}>
      <WrapperTagsContainer>
        <Swiper
          breakpoints={{
            700: {
              slidesPerView: 5,
            },
            576: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={10}
          slidesPerView={1.5}
        >
          {headingTags.map((tag, index) => {
            const linkTo = `#${accents.remove(
              tag.toLowerCase().replaceAll(' ', '-').replaceAll('?', '')
            )}`;

            return (
              <SwiperSlide key={index}>
                <WrapTextTag
                  onClick={handleScrollToSection}
                  url={linkTo}
                  lastElement={index === headingTags.length - 1}
                >
                  {tag}
                </WrapTextTag>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </WrapperTagsContainer>
    </FadeIn>
    <FadeIn custom={{ transition: { delay: 0.2 } }}>
      {text && <StyledDescription {...{ text }} />}
    </FadeIn>
    <FadeIn custom={{ transition: { delay: 0.4 } }}>
      {image ? <StyledWpImage {...image} /> : null}
    </FadeIn>
  </StyledWrapper>
);

export default InspirationWindowGuideInfo;
