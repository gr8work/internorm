import ArrowMore from 'components/atoms/ArrowMore';
import Title from 'components/atoms/Title';
import WpImage from 'components/atoms/WpImage';
import styled from 'styled-components';
import { media } from 'theme/media';
import Text from 'components/atoms/Text';
import { Swiper } from 'swiper/react';
import { motion } from 'framer-motion';

export const StyledWrapper = styled.div`
  max-width: 1717px;
  width: 100%;
  display: grid;
  margin-inline: auto;
  padding-inline: 30px;
  grid-template-areas:
    'main-slider'
    'content'
    'thumbs-slider'
    'pagination';

  ${media.up('lg')} {
    grid-template-areas:
      'main-slider main-slider'
      'content thumbs-slider'
      'pagination pagination';
    grid-template-columns: 44.5% 55.5%;
  }
`;

export const StyledMoreInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.grayBar};
  width: 100%;
  height: max-content;
  grid-area: content;
`;

export const StyledContent = styled(motion.div)`
  display: grid;
  padding: 40px 60px;

  ${media.up('lg')} {
    grid-template-columns: 40% 60%;
    gap: 20px;
  }
`;

export const StyledCardText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 30px;
  font-weight: 300;

  transition: scale 0.3s ease-in-out;
`;

export const StyledDescription = styled(Text)`
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 104px;

  & * * {
    font-weight: 300;
  }
`;

export const StyledCard = styled.button`
  width: 100%;
  height: 235px;
  background-color: transparent;
  border: none;
  display: flex;
  cursor: pointer;
  display: grid;
  place-items: center;
  position: relative;

  &:hover ${StyledCardText} {
    scale: 1.04;
  }
`;

export const StyledAboutStory = styled.div`
  display: grid;
  gap: 35px;
`;

export const StyledCardImage = styled(WpImage)`
  filter: brightness(0.6);
  z-index: -1;
  position: absolute;
  inset: 0;
`;

export const StyledStoryTitle = styled(Title)`
  gap: 8px;

  & > * {
    font-size: 30px;
    line-height: 40px;
    font-weight: 300;
  }
`;

export const StyledMainSlider = styled(Swiper)`
  width: 100%;
  min-height: 235px;
  height: 100%;
  grid-area: main-slider;
  aspect-ratio: 2;
  max-height: 500px;
`;

export const StyledThumbsSlider = styled(Swiper)`
  grid-area: thumbs-slider;
  width: 100%;
  height: 235px;
`;

export const StyledArrowMore = styled(ArrowMore)`
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    color: ${({ theme }) => theme.colors.pink};
  }
`;

export const StyledImage = styled(WpImage)`
  width: 100%;
  height: 100%;
`;

export const StyledControls = styled.div`
  margin-top: 30px;
  grid-area: pagination;
  justify-self: end;
  display: flex;
  align-items: center;

  .custom-prev,
  .custom-next {
    cursor: pointer;
  }

  .custom-pagination {
    display: flex;
    align-items: center;

    .swiper-pagination-bullet {
      width: 16px;
      height: 16px;
      border-radius: 16px;
      background-color: transparent;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      color: ${({ theme }) => theme.colors.gray};
      cursor: pointer;
      opacity: 1;
    }

    .swiper-pagination-bullet-active {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.redLink};
    }
  }
`;
