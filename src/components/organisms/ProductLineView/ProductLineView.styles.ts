import styled from 'styled-components';
import { media } from 'theme/media';

import Button from 'components/atoms/Button';
import Text from 'components/atoms/Text';
import Title from 'components/atoms/Title';
import Slider from 'components/molecules/Slider';
import WpImage from 'components/atoms/WpImage';

export const StyledSlider = styled(Slider)`
  margin-bottom: 50px;
  height: 100%;
  max-height: 577px;
  border-radius: 10px;

  ${media.up('lg')} {
    margin-bottom: 0;
  }
`;

export const StyledWrapper = styled.div`
  display: grid;
  text-align: left;
  padding-block: 40px 80px;
  border-top: 1px solid ${({ theme }) => theme.colors.lightGray};

  ${media.up('lg')} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    gap: 100px;
    align-items: start;
    padding-block: 80px 40px;
  }

  ${media.up('xl')} {
    grid-template-columns: minmax(auto, 639px) minmax(auto, 688px);
  }

  &[data-variant='insulating-windows'] {
    border-top: none;
    padding-top: unset;

    ${StyledSlider} {
      ${media.up('lg')} {
        order: 1;
      }
    }
  }
`;

export const StyledSlideBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.catskillWhite};
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
`;

export const StyledContent = styled.div`
  display: grid;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 30px;

  ${media.up('lg')} {
    margin-bottom: 40px;
  }
`;

export const StyledText = styled(Text)`
  margin-bottom: 50px;
  padding: 0;

  ${media.up('lg')} {
    margin-bottom: 30px;
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  margin-bottom: 50px;

  ${media.up('sm')} {
    max-width: max-content;
  }

  ${media.up('lg')} {
    margin-bottom: 40px;
  }
`;

export const StyledWpImage = styled(WpImage)`
  height: 100%;
  width: 100%;
`;
