import Slider from 'components/molecules/Slider';
import styled from 'styled-components';
import { media } from 'theme/media';

export const StyledWrapper = styled.div`
  margin: 0 auto 50px;
  position: relative;
  background-color: ${({ theme }) => theme.colors.billowyClouds};
  display: flex;
  flex-direction: column;
  padding-block: 25px 40px;

  &::before {
    content: '';
    position: absolute;
    height: 100%;
    width: 200vmax;
    top: 0;
    left: 50%;
    translate: calc(-50% - 146px);
    background-color: ${({ theme }) => theme.colors.billowyClouds};
    z-index: -1;
  }

  ${media.up('lg')} {
    padding-block: 65px 74px;
    margin-bottom: 70px;
  }
`;

export const StyledCardSlider = styled(Slider)`
  flex-shrink: 0;
`;

export const StyledProducts = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledHeading = styled.p`
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.grayBar};
  text-transform: uppercase;
  margin-bottom: 20px;
`;
