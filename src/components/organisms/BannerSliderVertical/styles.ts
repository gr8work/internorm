import styled, { css } from 'styled-components';
import { media } from 'theme/media';
import { ISlideVerticalWrapper } from 'data/interfaces';
import WpImage from 'components/atoms/WpImage';

import Icon from 'components/atoms/Icon';

export const StyledArrowIcon = styled(Icon)``;

export const ContainerBannerSliderVertical = styled.div<ISlideVerticalWrapper>`
  .slick-vertical .slick-slide {
    border: 0;
  }

  .slick-active {
    z-index: 1;
  }

  ${media.up('lg')} {
    height: 966px;
  }

  ${({ type }) => {
    switch (type) {
      case 'dark':
        return css`
          background-color: ${({ theme }) => theme.colors.grayBar};
          color: white !important;
          padding-bottom: 52px;

          ${media.up('lg')} {
            padding-bottom: 100px;
          }
        `;
      default:
        return css`
          background: ${({ theme }) => theme.colors.heavenlyWhite};
        `;
    }
  }}

  &[data-custom-bg="white"] {
    background: ${({ theme }) => theme.colors.white};
  }
`;
export const WrapperBannerSliderVertical = styled.div`
  margin-inline: auto;
  max-width: 1920px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  ${media.up('lg')} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
  }
`;
export const PaginationSliderVertical = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: max-content;

  ${media.up('lg')} {
    flex-direction: column;

    ${StyledArrowIcon} {
      rotate: 90deg;
    }
  }

  &.slick-dots {
    bottom: 26px;
    left: 30px;
    width: fit-content;
  }

  ul {
    display: flex;
    flex-direction: row;

    li {
      color: ${({ theme }) => theme.colors.gray};
      font-size: 14px;
      margin: 5px;

      &.slick-active {
        background: ${({ theme }) => theme.colors.redLink};
        border-radius: 50%;
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }

  span {
    line-height: 22px;
  }

  ${media.up('lg')} {
    &.slick-dots {
      left: 47%;
    }

    ul {
      flex-direction: column;
    }
  }
`;

export const StyledWpImage = styled(WpImage)`
  height: 417px;

  ${media.up('lg')} {
    height: 966px;
  }
`;
