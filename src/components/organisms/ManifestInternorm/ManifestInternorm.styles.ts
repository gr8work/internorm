import WpImage from 'components/atoms/WpImage';
import styled, { css } from 'styled-components';
import { media } from 'theme/media';

export const StyledWrapper = styled.div`
  position: relative;
  padding-inline: 30px;
`;

export const StyledBackgroundImage = styled(WpImage)`
  background-color: ${({ theme }) => theme.colors.heavenlyWhite};
  position: absolute;
  inset: 0;
  z-index: -1;
`;

export const StyledContainer = styled.div`
  max-width: 1002px;
  margin-inline: auto;
  padding-block: 100px;
  text-align: center;
  display: grid;
  place-items: center;

  ${media.up('lg')} {
    rotate: 354deg;
  }
`;

export const StyledAboveCiteText = styled.p`
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

export const StyledCite = styled.cite`
  display: flex;
  margin-inline: auto;
  font-style: normal;
  max-width: 799px;

  h2,
  h3,
  h4,
  p {
    font-family: ${({ theme }) => theme.secondFont};
    font-size: 34px;
    line-height: 40px;
    font-weight: 300;

    ${media.up('lg')} {
      font-size: 54px;
      line-height: 60px;
    }

    strong {
      font-weight: 700;
    }

    span {
      font-size: 62px;
      color: ${({ theme }) => theme.colors.redLink};

      ${media.up('lg')} {
        font-size: 124px;
      }
    }
  }
`;

export const StyledCiteAuthor = styled(StyledAboveCiteText)`
  color: ${({ theme }) => theme.colors.redLink};
  margin-top: 20px;
`;

export const StyledMoreButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  margin-top: 60px;
  font-weight: 700;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.grayBar};
  line-height: 16px;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.redLink};
  }

  & svg {
    display: block;
    width: 16px;
    height: 16px;
    margin-left: 10px;
    rotate: 90deg;
  }

  &[data-open='true'] {
    & svg {
      rotate: 270deg;
    }
  }
`;

export const StyledSeparator = styled.div`
  margin-top: 30px;
  height: 8px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.redLink};
`;

export const StyledHiddenText = styled.div<{ isOpen: boolean; height: string }>`
  margin-top: 30px;
  max-height: 0;
  overflow: hidden;
  transition: all 0.3s ease-in-out;

  ${({ isOpen, height }) =>
    isOpen &&
    css`
      max-height: ${height};
    `};

  p,
  h2,
  h3,
  h4,
  h5 {
    font-family: ${({ theme }) => theme.secondFont};

    strong {
      font-weight: 700;
    }
  }

  p {
    font-size: 18px;
    line-height: 32px;
  }

  h2,
  h3,
  h4,
  h5 {
    font-weight: 300;
    font-size: 28px;
    line-height: 34px;

    ${media.up('lg')} {
      font-size: 40px;
      line-height: 60px;
    }
  }
`;
