import BigArrowLeftIcon from 'assets/icon-components/BigArrowLeftIcon';
import BigArrowRightRedIcon from 'assets/icon-components/BigArrowRightRedIcon';
import BigArrowRightSecondaryIcon from 'assets/icon-components/BigArrowRightSecondaryIcon';
import styled from 'styled-components';
import { media } from 'theme/media';
import { ISliderArrow } from './interface';

export const StyledPrevArrow = styled(BigArrowLeftIcon)`
  position: absolute;
  inset: 0;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
`;

export const StyledNextHoverArrowSecondary = styled(BigArrowRightSecondaryIcon)`
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;

export const StylePrevHoverArrowSecondary = styled(StyledNextHoverArrowSecondary)`
  rotate: 180deg;
`;

export const StyledNextArrow = styled(StyledPrevArrow)`
  rotate: 180deg;
`;

export const StyledNextHoverArrow = styled(BigArrowRightRedIcon)`
  position: absolute;
  inset: 0;
  opacity: 0;
  color: ${({ theme }) => theme.colors.redLink};
  transition: opacity 0.3s ease-in-out;
`;

export const StyledPrevHoverArrow = styled(StyledNextHoverArrow)`
  rotate: 180deg;
`;

const Wrapper = styled.button<ISliderArrow>`
  border: 0;
  background-color: transparent;
  width: 80px;
  height: 80px;
  position: absolute;
  cursor: pointer;
  top: 170px;
  display: none;
  z-index: 2;
  color: ${({ theme }) => theme.colors.white};
  transition: color 0.3s ease-in-out;
  ${({ side }) => (side === 'prev' ? 'left: 100px;' : 'right: 100px;')}

  &[data-type='dark'] {
    color: ${({ theme }) => theme.colors.grayBar};
  }

  &[data-type='light-secondary'] {
    top: 210px;
  }

  &:hover {
    ${StyledNextHoverArrow} {
      opacity: 1;
    }

    ${StyledNextHoverArrowSecondary} {
      opacity: 1;
    }

    ${StyledPrevArrow} {
      opacity: 0;
    }
  }

  ${media.up('lg')} {
    display: block;
  }
`;

export { Wrapper };
