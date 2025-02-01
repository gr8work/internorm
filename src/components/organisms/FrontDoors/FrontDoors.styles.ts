import Slider from 'components/molecules/Slider';
import styled, { css } from 'styled-components';
import { media } from 'theme/media';
import { FrontDoorsType } from './FrontDoors';

export const StyledSlider = styled(Slider)`
  margin-bottom: 50px;
  height: 100%;
  max-height: 854px;

  ${media.up('lg')} {
    margin-bottom: 0;
  }
`;

export const StyledContent = styled.div<{
  isCategorySectionReverse: FrontDoorsType['isCategorySectionReverse'];
}>`
  display: grid;
  gap: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGray};

  ${media.up('lg')} {
    grid-template-columns: repeat(2, 1fr);
    gap: 101px;
  }

  ${({ isCategorySectionReverse }) =>
    isCategorySectionReverse &&
    css`
      ${StyledSlider} {
        order: -1;
      }
    `}
`;

export const StyledSlideBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 485px;

  ${media.up('lg')} {
    height: 854px;
  }
`;

export const StyledModels = styled.div`
  display: grid;
  gap: 40px;
  padding-bottom: 40px;

  ${media.up('lg')} {
    padding-bottom: 80px;
  }
`;
