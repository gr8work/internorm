import React, { useState } from 'react';

import {
  StyledContainer,
  StyledContent,
  StyledText,
  StyledWrapper,
  StyledTitle,
  StyledImageButton,
} from './EventVideo.styles';
import FadeIn from 'components/atoms/FadeIn';
import VideoComponent from 'components/molecules/VideoComponent';
import WpImage, { WpImageType } from 'components/atoms/WpImage';

export type EventVideoType = {
  subTitle: string;
  title: string;
  text: string;
  videoId: string;
  videoImage: WpImageType;
};

const EventVideo = ({ subTitle, title, text, videoId, videoImage }: EventVideoType) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <StyledWrapper>
      {isOpen && videoId && (
        <VideoComponent type="youtube" id={videoId} handleClick={() => setOpen(false)} />
      )}
      <StyledContainer>
        <StyledImageButton onClick={() => setOpen(true)}>
          <WpImage {...videoImage} />
        </StyledImageButton>
        <StyledContent>
          <FadeIn>
            <StyledTitle {...{ subTitle, title, type: 'product-title' }} />
          </FadeIn>
          <FadeIn>
            <StyledText {...{ text }} />
          </FadeIn>
        </StyledContent>
      </StyledContainer>
    </StyledWrapper>
  );
};

export default EventVideo;
