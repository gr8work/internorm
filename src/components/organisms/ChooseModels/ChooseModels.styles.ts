import styled, { css } from 'styled-components';
import { media } from 'theme/media';

import Button from 'components/atoms/Button';
import Title from 'components/atoms/Title';
import { ChooseModelsType } from './ChooseModels';
import WpImage from 'components/atoms/WpImage';
import Slider from 'components/molecules/Slider';

export const StyledSubTitle = styled(Title)`
  p {
    font-weight: 700;
  }
`;

export const StyledPriceText = styled.p`
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.grayBar};
  align-self: flex-end;

  & strong {
    font-size: 20px;
    font-weight: 700;
    font-family: ${({ theme }) => theme.secondFont};
    margin-left: 10px;

    & sup {
      font-size: 14px;
      margin-left: 4px;
    }
  }
`;

export const StyledTitle = styled.h4`
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.gray};
  transition: color 0.3s ease-in-out;
`;

export const StyledDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray};
  padding: 20px 20px 0 0;
  position: relative;
  top: -20px;
  font-weight: 700;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};
  transition: color 0.3s ease-in-out;
`;

export const StyledMoreButton = styled(Button)<{ isSelected: boolean }>`
  margin: auto 30px 0 0;
  visibility: hidden;
  width: max-content;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  margin-top: auto;

  ${({ isSelected }) =>
    isSelected &&
    css`
      visibility: visible;
      opacity: 1;
    `}
`;

export const StyledChooseButton = styled.button<{ isSelected: boolean }>`
  border: 0;
  text-align: left;
  cursor: pointer;
  background-color: transparent;
  padding: 20px 20px 20px 0;
  position: relative;
  height: fit-content;
  width: 100%;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 40%;
    border-bottom: 2px solid ${({ theme }) => theme.colors.redLink};
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
`;

export const StyledModelImage = styled(WpImage)`
  height: 200px;
  min-width: 255px;
  padding-right: 30px;
`;

export const StyledModel = styled.button<{ isSelected: boolean }>`
  display: flex;
  height: 100%;
  flex-direction: column;
  gap: 20px;
  border: none;
  background-color: transparent;
  text-align: left;
  cursor: pointer;

  &:hover {
    ${StyledTitle}, ${StyledDescription} {
      color: ${({ theme }) => theme.colors.grayBar};
    }

    ${StyledChooseButton}::after {
      opacity: 1;
    }
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      ${StyledTitle}, ${StyledDescription} {
        color: ${({ theme }) => theme.colors.grayBar};
      }

      ${StyledChooseButton}::after {
        opacity: 1;
      }
    `}
`;

export const StyledWrapper = styled.div<{ variant: ChooseModelsType['variant'] }>`
  display: grid;
  gap: 10px;
  width: 100%;
  height: max-content;
  margin-inline: auto;

  ${({ variant }) =>
    variant === 'category' &&
    css`
      padding: 40px 0 40px ${({ theme }) => theme.gap.side};
      max-width: 1486px;

      ${media.up('lg')} {
        padding-block: 100px;
      }

      ${media.up('xl')} {
        padding-right: ${({ theme }) => theme.gap.side};
      }

      ${StyledSubTitle} {
        margin-bottom: 80px;
      }
    `}

  ${({ variant }) =>
    variant === 'doors' &&
    css`
      ${StyledModelImage} {
        padding: 0;
        height: 245px;
        min-width: unset;
      }

      ${StyledDescription}, ${StyledPriceText} {
        padding-right: 20px;
      }
    `};
`;

export const StyledSlider = styled(Slider)`
  .swiper-slide {
    height: 100%;
  }
`;
