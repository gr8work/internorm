import React from 'react';

import { WpImageType } from 'components/atoms/WpImage';
import {
  StyledCite,
  StyledCiteAuthor,
  StyledLogo,
  StyledOpinion,
  StyledPartnerLogo,
  StyledPartnersSlider,
  StyledSubTitle,
  StyledWrapper,
} from './OurPartners.styles';
import Slider from 'components/molecules/Slider';
import RichText from 'components/atoms/RichText';
import LinkWrap from 'components/atoms/LinkWrap';
import { sliderOptions } from './OurPartners.constants';

export type OurPartnerType = {
  subTitle: string;
  opinionList: {
    opinionText: string;
    author: string;
    logo: WpImageType;
  }[];
  partnersList: {
    link: {
      url: string;
      target: string;
    };
    logo: WpImageType;
  }[];
};

const OurPartners = ({ subTitle, opinionList = [], partnersList = [] }: OurPartnerType) => {
  const cardSlides = opinionList.map((opinion, index) => {
    const citeWithSign = opinion.opinionText
      .replace('<h2>', '<h2><span>„</span>')
      .replace('<p>', '<p><span>„</span>')
      .replace('<h3>', '<h3><span>„</span>');

    return (
      <StyledOpinion key={index}>
        <StyledCite>
          <RichText {...{ html: citeWithSign }} />
        </StyledCite>
        <StyledLogo {...opinion.logo} objectFit="contain" />
        <StyledCiteAuthor>{opinion.author}</StyledCiteAuthor>
      </StyledOpinion>
    );
  });

  const logoSlides = partnersList.map((partner, index) => (
    <LinkWrap
      key={partner.link.url + index}
      {...{ url: partner.link.url, target: partner.link.target }}
    >
      <StyledPartnerLogo {...partner.logo} />
    </LinkWrap>
  ));

  return (
    <StyledWrapper>
      <StyledSubTitle>{subTitle}</StyledSubTitle>
      <Slider {...{ slides: cardSlides, variant: 'secondary' }} />
      <StyledPartnersSlider
        {...{ slides: logoSlides, options: sliderOptions(logoSlides.length) }}
      />
    </StyledWrapper>
  );
};

export default OurPartners;
