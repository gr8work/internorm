import React from 'react';

import Link from 'components/atoms/Link';
import RichText from 'components/atoms/RichText';

import { ISoloLocation } from './interface';
import { StyledImage, StyledWrapper, StyledContent, StyledContentText } from './styles';
import WpImage from 'components/atoms/WpImage';
import { getFitWpUrl } from 'utils/getFitWpLink';

const SoloLocation = ({ image, title, content, link }: ISoloLocation) => (
  <StyledWrapper>
    <StyledImage>
      <WpImage {...image} />
    </StyledImage>
    <StyledContent>
      <StyledContentText>
        <p className="title">{title}</p>
        <RichText html={content} />
      </StyledContentText>
      <Link to={getFitWpUrl(link)} type="text-white-link-arrow">
        WIĘCEJ
      </Link>
    </StyledContent>
  </StyledWrapper>
);

export default SoloLocation;
