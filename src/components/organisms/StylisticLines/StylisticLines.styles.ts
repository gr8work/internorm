import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { media } from 'theme/media';

import Container from 'components/atoms/Container';
import Text from 'components/atoms/Text';

export const StyledWrapper = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  margin-block: 40px;
  overflow: hidden;

  ${media.up('lg')} {
    gap: 30px;
    margin-block: 69px 120px;
  }
`;

export const StyledText = styled(Text)`
  max-width: 645px;
`;

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  margin-inline: auto;
`;

export const StyledPagination = styled.div`
  max-width: 939px;
  width: 100% !important;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;

  &::before {
    content: '';
    right: -30px;
    top: 0;
    height: 100%;
    width: 64px;
    position: absolute;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 1) 60%,
      rgba(255, 255, 255, 1) 100%
    );
    z-index: 1;

    ${media.up('md')} {
      display: none;
    }
  }

  &::after {
    content: '';
    position: absolute;
    border-bottom: 1.5px solid ${({ theme }) => theme.colors.heavenlyWhite};
    bottom: -20px;
    left: 0;
    right: 0;
    z-index: -1;
  }

  ${media.up('md')} {
    gap: 40px;
  }

  ${media.up('lg')} {
    gap: 80px;
  }

  .swiper-pagination-bullet {
    flex-shrink: 0;
    padding: 10px 30px;
    background-color: transparent;
    border: none;
    font-family: ${({ theme }) => theme.font};
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 2px;
    cursor: pointer;
    position: relative;
    translate: -40px;
    width: max-content;
    height: max-content;
    color: ${({ theme }) => theme.colors.grayBar};

    ${media.up('md')} {
      translate: 0;
    }
  }

  .swiper-pagination-bullet-color-blue::after {
    background-color: ${({ theme }) => theme.colors.blue};
  }

  .swiper-pagination-bullet-color-green::after {
    background-color: ${({ theme }) => theme.colors.green};
  }

  .swiper-pagination-bullet-color-brown::after {
    background-color: ${({ theme }) => theme.colors.brown};
  }

  .swiper-pagination-bullet-active::after {
    content: '';
    width: 50%;
    height: 2.5px;
    position: absolute;
    bottom: -20px;
    left: 50%;
    translate: -50%;
  }

  &.swiper-pagination-bullets-dynamic {
    overflow: visible;

    .swiper-pagination-bullet-active-next,
    .swiper-pagination-bullet-active-next-next,
    .swiper-pagination-bullet-active-prev,
    .swiper-pagination-bullet-active-prev-prev {
      transform: scale(1);
    }
  }
`;
