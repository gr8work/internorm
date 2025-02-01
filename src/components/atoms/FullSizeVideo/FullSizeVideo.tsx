import React from 'react';

import { StyledVideoIframe, StyledVideoWrapper } from './FullSizeVideo.styles';

export type PresentationVideoType = {
  videoId: string;
};
const FullSizeVideo = ({ videoId }: PresentationVideoType) => (
  <StyledVideoWrapper>
    <StyledVideoIframe
      width="100%"
      height="100%"
      src={`https://player.vimeo.com/video/${videoId}`}
      title="player vimeo"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </StyledVideoWrapper>
);
export default FullSizeVideo;
