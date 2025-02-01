import LinkWrap from 'components/atoms/LinkWrap';
import styled from 'styled-components';
import { media } from 'theme/media';

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
  max-width: 825px;
  margin-bottom: 50px;
  padding: 0;

  ${media.up('lg')} {
    margin-bottom: 80px;
  }

  & strong {
    font-size: 20px;
    font-weight: 700;
  }

  & a {
    color: ${({ theme }) => theme.colors.redLink};
  }
`;

export const StyledWpImage = styled(WpImage)`
  margin-bottom: 50px;
  max-width: 1717px;
  min-height: 308px;
  width: calc(100vw - 80px);

  ${media.up('lg')} {
    height: 639px;
    margin-bottom: 80px;
  }
`;
