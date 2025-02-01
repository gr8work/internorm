import Slider from 'components/molecules/Slider';
import styled from 'styled-components';
import { media } from 'theme/media';
import WpImage from 'components/atoms/WpImage';

export const StyledContent = styled.div`
  display: grid;
  gap: 40px;
  padding-top: 40px;

  ${media.up('lg')} {
    grid-template-columns: repeat(2, 1fr);
    gap: 101px;
    padding-top: 80px;
  }
`;

export const StyledSlideBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 100%;
`;

export const StyledSlider = styled(Slider)`
  margin-bottom: 50px;
  height: 100%;
  max-height: 854px;

  ${media.up('lg')} {
    margin-bottom: 0;
  }
`;

export const StyledModels = styled.div`
  display: grid;
  gap: 40px;
`;

export const StyledImage = styled(WpImage)`
  max-height: 485px;
  height: 485px;
`;
