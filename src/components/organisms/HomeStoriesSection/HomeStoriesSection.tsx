import React, { useState } from 'react';
import { Thumbs, Autoplay, EffectFade, Pagination, Navigation } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import { breakpointsObject } from 'theme/breakpoints';
import { WpImageType } from 'components/atoms/WpImage';

import prevIcon from 'assets/icons/slider-arrow-left.svg';
import nextIcon from 'assets/icons/slider-arrow-right.svg';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {
  StyledWrapper,
  StyledCard,
  StyledAboutStory,
  StyledCardImage,
  StyledContent,
  StyledCardText,
  StyledStoryTitle,
  StyledArrowMore,
  StyledDescription,
  StyledMainSlider,
  StyledImage,
  StyledThumbsSlider,
  StyledMoreInfo,
  StyledControls,
} from './HomeStoriesSection.styles';

import Icon from 'components/atoms/Icon';

export type HomeStoriesSectionType = {
  homeStories: HomeStoryCardType[];
};

type HomeStoryCardType = {
  categories: {
    nodes: {
      name: string;
    }[];
  };
  title: string;
  featuredImage: {
    node: WpImageType;
  };
  linktToPost: string;
  postTemplate: {
    postTheme: {
      intro: {
        text: string;
      };
    }[];
  };
};

const HomeStoriesSection = ({ homeStories }: HomeStoriesSectionType) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeStory, setActiveStory] = useState(homeStories[0]);
  const [clickedIndex, setClickedIndex] = useState(0);
  const [flag, setFlag] = useState(false);

  const variants = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.5,
      },
    },
    hide: {
      y: -40,
      opacity: 0,
    },
  };

  console.log(homeStories.length);

  return (
    <StyledWrapper>
      <StyledMainSlider
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Thumbs, Autoplay, EffectFade, Pagination, Navigation]}
        autoplay={{ delay: 4000 }}
        effect="fade"
        pagination={{
          el: '.custom-pagination',
          clickable: true,
          renderBullet: (index, className) => `<button class="${className}">${index + 1}</button>`,
        }}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
          setActiveStory(homeStories[swiper.activeIndex]);
        }}
        onUpdate={(swiper) => {
          if (flag) {
            swiper.slideTo(clickedIndex);
            setFlag(false);
          }
        }}
      >
        {homeStories?.map((story) =>
          story.featuredImage ? (
            <SwiperSlide key={story.title}>
              <StyledImage {...story.featuredImage.node} />
            </SwiperSlide>
          ) : null
        )}
      </StyledMainSlider>
      <StyledMoreInfo>
        <StyledContent key={activeIndex} variants={variants} animate="show" initial="hide">
          <StyledStoryTitle
            type="white"
            subTitle={homeStories[activeIndex].categories.nodes[0].name}
            title={`<h3>${homeStories[activeIndex].title}</h3>`}
          />
          <StyledAboutStory>
            <StyledDescription
              type="white"
              text={homeStories[activeIndex].postTemplate.postTheme[0].intro.text}
            />
            <StyledArrowMore link={homeStories[activeIndex].linktToPost} />
          </StyledAboutStory>
        </StyledContent>
      </StyledMoreInfo>
      <StyledThumbsSlider
        onSwiper={setThumbsSwiper}
        slidesPerView={1}
        modules={[Thumbs, Autoplay]}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          [breakpointsObject.md]: {
            slidesPerView: homeStories.length > 2 ? 2 : 1,
            autoplay: { delay: 8000 },
          },
        }}
      >
        {homeStories
          .filter((story) => story.title !== activeStory.title)
          .map((story) =>
            story.featuredImage ? (
              <SwiperSlide key={story.title}>
                <StyledCard
                  onClick={() => {
                    const index = homeStories.findIndex(
                      (mainSliderStory) => mainSliderStory.title === story.title
                    );

                    setFlag(true);
                    setClickedIndex(index);
                  }}
                >
                  <StyledCardImage {...story.featuredImage.node} />
                  <StyledCardText>{story.title}</StyledCardText>
                </StyledCard>
              </SwiperSlide>
            ) : null
          )}
      </StyledThumbsSlider>
      <StyledControls>
        <Icon src={prevIcon} type="16" className="custom-prev" />
        <div className="custom-pagination" />
        <Icon src={nextIcon} type="16" className="custom-next" />
      </StyledControls>
    </StyledWrapper>
  );
};

export default HomeStoriesSection;
