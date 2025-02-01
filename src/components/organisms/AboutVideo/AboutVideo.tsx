import React from 'react';
import { IAboutVideo } from './interface';
import { StyledWrapper } from './styles';

import Title from 'components/atoms/Title';
import FadeIn from 'components/atoms/FadeIn';

const AboutVideo = ({ videoId, subTitle, title }: IAboutVideo) => (
  <StyledWrapper as={FadeIn}>
    <iframe src={`https://www.youtube.com/embed/${videoId}`} title={title} />
    <Title subTitle={subTitle} title={title} />
  </StyledWrapper>
);

export default AboutVideo;
