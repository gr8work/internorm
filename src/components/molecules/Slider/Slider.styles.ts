import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { media } from 'theme/media';

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  &[data-variant='secondaryRight'] {
    align-items: end;
  }

  &[data-variant='secondaryLeft'] {
    align-items: start;
  }

  &[data-variant='primary'] {
    ${media.up('lg')} {
      flex-direction: row-reverse;
      align-items: end;
    }
  }

  &[data-variant='tertiary'] {
    height: 138px;
    justify-content: center;
    width: 100%;
  }
`;

export const StyledSliderWrapper = styled.div`
  display: grid;
  width: 100%;
`;
