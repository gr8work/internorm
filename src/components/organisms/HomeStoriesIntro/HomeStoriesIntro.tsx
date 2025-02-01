import React from 'react';

import FadeIn from 'components/atoms/FadeIn';

import {
  StyledDescription,
  StyledHeading,
  StyledWrapper,
  StyledYoutube,
} from './HomeStoriesIntro.styles';

export type HomeStoriesIntroType = {
  title: string;
  text?: string;
  videoId?: string;
};

const HomeStoriesIntro = ({ title, text, videoId }: HomeStoriesIntroType) => (
  <StyledWrapper aria-labelledby="intro-heading">
    <FadeIn>
      <StyledHeading id="intro-heading" {...{ title, type: 'intro' }} />
    </FadeIn>
    <FadeIn custom={{ transition: { delay: 0.2 } }}>
      {text && <StyledDescription {...{ text }} />}
    </FadeIn>
    <FadeIn custom={{ transition: { delay: 0.4 } }}>
      {videoId ? (
        <StyledYoutube
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : null}
    </FadeIn>
  </StyledWrapper>
);

export default HomeStoriesIntro;
