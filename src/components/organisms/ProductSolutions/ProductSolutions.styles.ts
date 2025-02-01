import styled from 'styled-components';

import Slider from 'components/molecules/Slider';
import WpImage from 'components/atoms/WpImage';

import { media } from 'theme/media';

export const StyledWrapper = styled.div`
  max-width: 1717px;
  margin: 40px auto 60px;
  padding-inline: ${({ theme }) => theme.gap.side};

  ${media.up('lg')} {
    margin-block: 100px 120px;
  }
`;

export const StyledSlider = styled(Slider)`
  margin-top: 30px;

  & .swiper-slide {
    height: 100%;
  }
`;

export const StyledSolutionCard = styled.div`
  background-color: ${({ theme }) => theme.colors.heavenlyWhite};
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.billowyClouds};
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100%;
  align-content: start;
`;

export const StyledSolutionCardContent = styled.div`
  padding: 40px;
  display: grid;
  gap: 40px;
`;

export const StyledCardImage = styled(WpImage)`
  border-radius: 10px 10px 0 0;
  overflow: hidden;
  height: 320px;
`;
