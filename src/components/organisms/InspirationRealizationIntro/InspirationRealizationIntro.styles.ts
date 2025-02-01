import styled from 'styled-components';
import { media } from 'theme/media';

import Slider from 'components/molecules/Slider';
import LinkWrap from 'components/atoms/LinkWrap';
import Title from 'components/atoms/Title';
import Text from 'components/atoms/Text';
import WpImage from 'components/atoms/WpImage';

export const StyledLinkWrap = styled(LinkWrap)`
  color: ${({ theme }) => theme.colors.redLink};
`;

export const StyledWrapper = styled.section`
  padding: 15px 30px 0;
  text-align: center;
  display: grid;
  place-items: center;
`;

export const StyledHeading = styled(Title)`
  margin-bottom: 25px;

  ${media.up('lg')} {
    margin-bottom: 46px;
  }
`;

export const StyledDescription = styled(Text)`
  max-width: 1136px;
  margin-bottom: 50px;
  padding: 0;

  ${media.up('lg')} {
    margin-bottom: 80px;
  }

  & strong {
    font-size: 18px;
    font-weight: 700;
  }

  & a {
    color: ${({ theme }) => theme.colors.redLink};
  }
`;

export const StyledWpImage = styled(WpImage)`
  height: 308px;

  ${media.up('md')} {
    height: 500px;
  }

  ${media.up('lg')} {
    height: 748px;
  }
`;

export const StyledSlider = styled(Slider)`
  max-width: 1426px;
  height: 100%;
  margin-inline: auto;
`;
