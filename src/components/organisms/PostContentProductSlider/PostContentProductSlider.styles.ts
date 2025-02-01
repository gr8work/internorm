import Slider from 'components/molecules/Slider';
import styled from 'styled-components';
import { media } from 'theme/media';

export const StyledWrapper = styled.div`
  max-width: 1920px;
  margin: 0 auto 50px;
  background-color: ${({ theme }) => theme.colors.billowyClouds};
  display: flex;
  flex-direction: column;
  padding: 25px 30px 40px;

  ${media.up('lg')} {
    padding: 65px 75px;
    margin-bottom: 70px;
  }

  ${media.up('xl')} {
    padding: 65px 179px 75px 74px;
  }
`;

export const StyledCardSlider = styled(Slider)`
  flex-shrink: 0;
`;

export const StyledProducts = styled.div`
  width: 100%;
  height: 100%;
`;
