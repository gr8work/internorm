import LinkWrap from 'components/atoms/LinkWrap';
import styled, { css } from 'styled-components';
import { media } from 'theme/media';
import Text from 'components/atoms/Text';

import Title from 'components/atoms/Title';
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

  h1 {
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
  text-align: start;
  font-weight: 700;
  font-size: 18px;

  ${media.up('lg')} {
    margin-bottom: 65px;
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
  margin-bottom: 50px;
  max-width: 1136px;
  width: 100%;
  min-height: 308px;

  ${media.up('md')} {
    aspect-ratio: 16 / 7;
  }

  ${media.up('lg')} {
    margin-bottom: 80px;
    height: 513px;
  }
`;

export const WrapTextTag = styled(LinkWrap)<{ lastElement: boolean }>`
  display: flex;
  width: fit-content;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.grayBar};

  &:hover {
    color: ${({ theme }) => theme.colors.redLink};

    &:after {
      color: ${({ theme }) => theme.colors.grayBar};
    }
  }

  &::after {
    content: '|';
    margin-left: 20px;
  }

  ${({ lastElement }) =>
    lastElement &&
    css`
      &::after {
        display: none;
      }
    `}
`;

export const WrapperTagsText = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
`;

export const WrapperTagsContainer = styled.div`
  margin-top: 57px;
  margin-bottom: 46px;
  width: calc(100vw - 100px);

  .swiper-wrapper {
    align-items: center;
  }

  ${media.up('lg')} {
    max-width: 1136px;
  }
`;

export const StyledDate = styled(Text)`
  margin-top: -10px;
  text-transform: uppercase;
  letter-spacing: 2px;
`;
