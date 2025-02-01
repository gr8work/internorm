import React from 'react';

import Title from 'components/atoms/Title';

import {
  StyledButton,
  StyledContainer,
  StyledContent,
  StyledText,
  StyledWrapper,
  StyledYoutube,
} from './PresentationVideo.styles';
import FadeIn from 'components/atoms/FadeIn';
import { ButtonType } from 'components/atoms/Button';

export type PresentationVideoType = {
  subTitle: string;
  title: string;
  text: string;
  videoId: string;
  button?: ButtonType;
};

const PresentationVideo = ({ subTitle, title, text, videoId, button }: PresentationVideoType) => (
  <StyledWrapper>
    <StyledContainer>
      <StyledContent>
        <FadeIn>
          <Title {...{ subTitle, title, type: 'red-opacity' }} />
        </FadeIn>
        <FadeIn>
          <StyledText {...{ text, type: 'white-big' }} />
        </FadeIn>
        {button ? (
          <FadeIn>
            <StyledButton
              {...{ text: button.label, ariaLabel: button.ariaLabel, link: button.link }}
            />
          </FadeIn>
        ) : null}
      </StyledContent>
      <StyledYoutube
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </StyledContainer>
  </StyledWrapper>
);

export default PresentationVideo;
