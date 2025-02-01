import styled from 'styled-components';
import { media } from 'theme/media';

import Slider from 'components/molecules/Slider';
import WpImage from 'components/atoms/WpImage';

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 1776px;
  padding: 0 30px 100px;
  display: flex;
  flex-direction: column;
  margin-inline: auto;

  ${media.up('lg')} {
    flex-direction: row;
  }
`;

const StyledSlider = styled(Slider)`
  height: 100%;
  margin-bottom: 30px;

  ${media.up('lg')} {
    margin-bottom: 0;
    height: 547px;
    width: calc(70% - 3em);
  }
`;

const StyledMap = styled.div`
  width: 100%;
  height: 547px;
  display: flex;
  justify-content: center;
  align-items: end;
  padding-bottom: 80px;
  position: relative;

  ${media.up('lg')} {
    height: 547px;
    width: 30%;
  }
`;

const StyledMapImage = styled(WpImage)`
  position: absolute;
  inset: 0;
  z-index: -1;
`;

const StyledWpImage = styled(WpImage)`
  height: 547px;
`;

export { StyledWrapper, StyledSlider, StyledMap, StyledMapImage, StyledWpImage };
