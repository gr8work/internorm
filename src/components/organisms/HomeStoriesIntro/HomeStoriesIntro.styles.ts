import LinkWrap from 'components/atoms/LinkWrap';
import styled from 'styled-components';
import { media } from 'theme/media';

import Title from 'components/atoms/Title';
import Text from 'components/atoms/Text';

export const StyledLinkWrap = styled(LinkWrap)`
  color: ${({ theme }) => theme.colors.redLink};
`;

export const StyledWrapper = styled.section`
  padding-top: 15px;
  text-align: center;
  display: grid;
  place-items: center;
  margin-bottom: 100px;

  ${media.up('lg')} {
    text-align: left;
    margin-bottom: 150px;
  }
`;

export const StyledHeading = styled(Title)`
  margin-bottom: 25px;
  padding-inline: ${({ theme }) => theme.gap.side};

  & * {
    font-weight: 300;
  }

  ${media.up('lg')} {
    margin-bottom: 46px;
  }
`;

export const StyledDescription = styled(Text)`
  max-width: 1136px;
  margin-bottom: 50px;
  padding: 0;
  padding-inline: ${({ theme }) => theme.gap.side};
  font-size: 18px;

  ${media.up('lg')} {
    margin-bottom: 70px;
  }

  & strong {
    font-weight: 700;
  }

  & a {
    color: ${({ theme }) => theme.colors.redLink};
  }
`;

export const StyledYoutube = styled.iframe`
  width: 100vw;
  height: 100%;
  aspect-ratio: 16 / 9;
  max-height: 720px;
  max-width: 1920px;
  margin-inline: auto;
`;

export const StyledText = styled(Text)`
  margin-top: 20px;

  ${media.up('lg')} {
    margin-top: 50px;
  }
`;
