import React from 'react';
import { StyledWrapper } from './styles';
import { IAboutInfo } from './interface';

import AboutSoloInfo from 'components/molecules/AboutSoloInfo';
import AboutHoursList from 'components/molecules/AboutHoursList';
import FadeIn from 'components/atoms/FadeIn';

const AboutInfo = ({ hours, infos }: IAboutInfo) => (
  <StyledWrapper>
    {infos?.map((info, index) => (
      <AboutSoloInfo {...info} key={index} />
    ))}
    <FadeIn>
      <AboutHoursList {...hours} />
    </FadeIn>
  </StyledWrapper>
);

export default AboutInfo;
