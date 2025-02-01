import React from 'react';

import type { CustomThemeColorType } from 'theme/styled';
import StudioIcon from 'assets/icons/studio.svg';
import AmbienteIcon from 'assets/icons/ambiente.svg';
import HomeSoftIcon from 'assets/icons/home-soft.svg';
import HomePureIcon from 'assets/icons/home-pure.svg';

import WpImage, { WpImageType } from 'components/atoms/WpImage';
import Icon from 'components/atoms/Icon';
import { ViewVariantType } from 'components/organisms/SwitchCategoryViewMode';

import {
  StyledBar,
  StyledProductImageWrapper,
  StyledLogo,
  StyledProductWrapper,
  StyledArchitectureWrapper,
  StyledArichtectureImage,
  StyledFirstImage,
  StyledSecondImage,
} from './StylisticLineSlide.styles';

export type StylisticLineSlideType = {
  images: {
    product: {
      firstImage: WpImageType;
      secondImage: WpImageType;
    };
    architecture: {
      image: WpImageType;
    };
  };
  bar: {
    color: CustomThemeColorType;
    tag: string;
    text: string;
  };
};

export type StylisticLineSlideProps = {
  viewVariant: ViewVariantType;
} & StylisticLineSlideType;

const iconsMap = {
  studio: StudioIcon,
  ambiente: AmbienteIcon,
  'home-soft': HomeSoftIcon,
  'home-pure': HomePureIcon,
};

const StylisticLineSlide = ({ images, bar, viewVariant }: StylisticLineSlideProps) => {
  const stylisticLineName = bar.tag.trim().toLowerCase().split(' ').join('-');

  const renderBar = (
    <StyledBar color={bar.color}>
      <StyledLogo>
        <Icon src={iconsMap[stylisticLineName]} />
        <p>{bar.tag}</p>
      </StyledLogo>
      <p>{bar.text}</p>
    </StyledBar>
  );

  return viewVariant === 'product' ? (
    <StyledProductWrapper key={`${bar.tag}-product`}>
      <StyledProductImageWrapper>
        <StyledFirstImage
          key={`${images.product.firstImage.altText}-${bar.tag}-first`}
          {...images.product.firstImage}
          objectFit="contain"
        />
        <StyledSecondImage
          key={`${images.product.secondImage.altText}-${bar.tag}-second`}
          {...images.product.secondImage}
          objectFit="contain"
        />
      </StyledProductImageWrapper>
      {renderBar}
    </StyledProductWrapper>
  ) : (
    <StyledArchitectureWrapper key={`${bar.tag}-architecture`}>
      <StyledArichtectureImage
        key={`${images.architecture.image.altText}-${bar.tag}-architecture`}
        {...images.architecture.image}
      />
      {renderBar}
    </StyledArchitectureWrapper>
  );
};

export default StylisticLineSlide;
