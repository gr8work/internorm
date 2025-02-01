import styled from 'styled-components';
import { media } from 'theme/media';

import Title from 'components/atoms/Title';
import Slider from 'components/molecules/Slider';
import Text from 'components/atoms/Text';
import Icon from 'components/atoms/Icon';
import WpImage from 'components/atoms/WpImage';
import TagSlider from 'components/molecules/TagSlider';

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.heavenlyWhite};
  padding-block: 40px;

  ${media.up('lg')} {
    padding-block: 50px;
  }
`;

export const StyledSectionTitle = styled(Title)`
  text-align: center;
  margin-bottom: 40px;
  padding-inline: ${({ theme }) => theme.gap.side};
`;

export const StyledFullWidthSlider = styled(Slider)`
  max-width: 1920px;
  margin-inline: auto;
`;

export const StyledAboutContent = styled.div`
  padding: 20px ${({ theme }) => theme.gap.side} 0;
  display: flex;
  flex-direction: column;

  ${media.up('lg')} {
    flex-direction: row-reverse;
    max-width: 1717px;
    gap: 100px;
    margin-inline: auto;
    padding-top: 80px;

    & > * {
      flex-basis: 50%;
    }
  }
`;

export const StyledAboutText = styled(Text)`
  margin-block: 40px;
  font-size: 14px;
  line-height: 2;
  font-weight: 400;

  strong {
    font-weight: 700;
    font-size: 16px;
  }
`;

export const StyledArrowIcon = styled(Icon)`
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  right: 20px;
`;

export const StyledFullWidthWpImage = styled(WpImage)`
  min-height: 530px;
  aspect-ratio: 16 / 9;
  max-height: 790px;
`;

export const StyledAboutWpImage = styled(WpImage)`
  min-height: 340px;
  aspect-ratio: 16 / 9;

  ${media.up('lg')} {
    min-height: 793px;
  }
`;

export const StyledTagSlider = styled(TagSlider)`
  margin-bottom: 30px;
`;
