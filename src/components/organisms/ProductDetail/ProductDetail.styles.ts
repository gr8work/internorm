import styled, { css } from 'styled-components';
import ScrollContainer from 'react-indiana-drag-scroll';

import { media } from 'theme/media';
import { CustomThemeColorType } from 'theme/styled';
import Button from 'components/atoms/Button';
import Slider from 'components/molecules/Slider';
import Title from 'components/atoms/Title';
import ReactTooltip from 'react-tooltip';
import WpImage from 'components/atoms/WpImage';

export const StyledReactTooltip = styled(ReactTooltip)`
  filter: drop-shadow(0 13px 16px rgba(0, 0, 0, 0.16));
  width: 50%;
  max-width: 338px;
  opacity: 1;

  &.__react_component_tooltip {
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 2;
    color: ${({ theme }) => theme.colors.grayBar};

    &.show {
      opacity: 1;
    }
  }
`;

export const StyledCategoriesListScroll = styled(ScrollContainer)`
  grid-area: stylistic-lines;
  list-style-type: none;
  display: flex;
  gap: 10px;
  flex-basis: 100%;
  margin-bottom: 25px;

  ${media.up('lg')} {
    margin-left: 40px;
  }
`;

type SelectedCategoryType = {
  isSelected: boolean;
  activeColor: CustomThemeColorType;
};

export const StyledCategory = styled.button<SelectedCategoryType>`
  border: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.gray};
  padding: 5px 30px;
  border-radius: 14px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  width: max-content;

  &:hover {
    background-color: ${({ theme, activeColor }) => theme.colors[activeColor]};
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.8;
  }

  ${({ isSelected, activeColor }) =>
    isSelected &&
    css`
      background-color: ${({ theme }) => theme.colors[activeColor]};
      color: ${({ theme }) => theme.colors.white};
      opacity: 0.8;
    `}
`;

export const StyledWrapper = styled.div`
  padding-inline: ${({ theme }) => theme.gap.side};
  position: relative;
  display: grid;
  column-gap: 100px;
  max-width: 1717px;
  margin-inline: auto;
  grid-template-areas:
    'stylistic-lines'
    'slider'
    'content1';

  ${media.up('lg')} {
    grid-template-areas:
      'stylistic-lines .'
      'slider content1';
    grid-template-columns: repeat(2, 1fr);
  }

  &::before {
    content: '';
    width: 64px;
    height: 70px;
    position: absolute;
    top: 0;
    right: 0;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 1) 60%,
      rgba(255, 255, 255, 1) 100%
    );
  }
`;

export const StyledContent = styled.div`
  display: grid;
  padding-block: 50px 70px;
  grid-area: content1;

  ${media.up('lg')} {
    padding-block: 0 170px;
  }
`;

export const StyledStats = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-block: 50px 30px;

  ${media.up('lg')} {
    margin-block: 120px 60px;
    gap: 40px;
  }
`;

export const StyledStat = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const StyledStatText = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 2;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.grayBar};
`;

export const StyledButton = styled(Button)`
  width: max-content;
  margin-top: 45px;

  ${media.up('lg')} {
    margin-top: 60px;
  }
`;

export const StyledBadges = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
`;

export const StyledSlider = styled(Slider)`
  grid-area: slider;
  height: 284px;

  ${media.up('md')} {
    height: 462px;
  }

  ${media.up('lg')} {
    height: 662px;
  }
`;

export const StyledPreview = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
  background-color: ${({ theme }) => theme.colors.alabaster};
  border: 1px solid ${({ theme }) => theme.colors.heavenlyWhite};

  & > * {
    mix-blend-mode: multiply;
  }
`;

export const StyledPreviewImage = styled(WpImage)`
  width: 80%;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 20px;

  ${media.up('lg')} {
    margin-bottom: 40px;
  }
`;

export const StyledBadge = styled(WpImage)`
  max-width: 150px;
`;
