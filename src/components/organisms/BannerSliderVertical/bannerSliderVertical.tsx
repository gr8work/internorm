import React, { useRef } from 'react';

import prevIcon from 'assets/icons/slider-arrow-left.svg';
import nextIcon from 'assets/icons/slider-arrow-right.svg';

import BannerSliderVerticalDescription from 'components/molecules/BannerSliderVerticalDescription';
import {
  ContainerBannerSliderVertical,
  PaginationSliderVertical,
  StyledArrowIcon,
  StyledWpImage,
  WrapperBannerSliderVertical,
} from './styles';
import Slider from 'react-slick';
import { ISlideVerticalListProps } from 'data/interfaces';

export const SliderVerticalPagination = (i: number) => <span>{i + 1}</span>;
export const BannerSliderVertical = ({
  type = 'light',
  banners,
  customBg,
}: ISlideVerticalListProps) => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: true,
    arrows: false,
    speed: 550,
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: true,
    vertical: true,
    swipe: true,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
    cssEase: 'linear',

    responsive: [
      {
        breakpoint: 1240,
        settings: {
          arrows: false,
          verticalSwiping: false,
          vertical: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const dotsXd = (dots: React.ReactNode) => (
    <PaginationSliderVertical className="arrows">
      <StyledArrowIcon src={prevIcon} type="16" handleClick={sliderRef?.current?.slickPrev} />
      <ul> {dots} </ul>
      <StyledArrowIcon src={nextIcon} type="16" handleClick={sliderRef?.current?.slickNext} />
    </PaginationSliderVertical>
  );

  return (
    <ContainerBannerSliderVertical type={type} data-custom-bg={customBg}>
      <Slider
        ref={sliderRef}
        {...settings}
        customPaging={SliderVerticalPagination}
        appendDots={dotsXd}
      >
        {banners.map(
          ({ image, primaryButton, secondaryButton, subTitle, description, title, author }) => (
            <div key={`${title}-${description}`}>
              <WrapperBannerSliderVertical>
                <BannerSliderVerticalDescription
                  description={description}
                  buttonText={primaryButton.label}
                  linkText={secondaryButton.label}
                  linkTo={
                    typeof secondaryButton?.link !== 'string'
                      ? secondaryButton.link?.url
                      : secondaryButton?.link
                  }
                  buttonLink={
                    typeof primaryButton?.link !== 'string'
                      ? primaryButton.link?.url
                      : primaryButton?.link
                  }
                  subTitle={subTitle}
                  title={title}
                  typeLink={type === 'light' ? 'text-dark-link-arrow' : undefined}
                  typeText={type === 'light' ? 'vertical-slider-dark' : 'vertical-slider-white'}
                  typeTitle={type === 'light' ? undefined : 'white'}
                  author={author}
                />
                <StyledWpImage {...image} />
              </WrapperBannerSliderVertical>
            </div>
          )
        )}
      </Slider>
    </ContainerBannerSliderVertical>
  );
};
