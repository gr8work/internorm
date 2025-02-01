import styled, { css } from 'styled-components';

import WpImage from 'components/atoms/WpImage';
import { media } from 'theme/media';

export const StyledWrapper = styled.article<{ isReversed: boolean }>`
  --container-width: 1137px;

  display: flex;
  flex-direction: column;
  margin: 0 auto 50px;
  gap: 30px;
  max-width: var(--container-width);

  ${media.up('lg')} {
    flex-direction: row;
    gap: 50px;
    margin-bottom: 70px;
  }

  ${({ isReversed }) =>
    isReversed &&
    css`
      flex-direction: column-reverse;

      ${media.up('lg')} {
        flex-direction: row-reverse;
      }
    `}
`;

export const StyledWpImage = styled(WpImage)`
  max-height: 540px;
  flex-shrink: 0;

  ${media.up('lg')} {
    height: 453px;
    width: 474px;
  }
`;

export const StyledText = styled.div`
  padding-inline: ${({ theme }) => theme.gap.side};

  ${media.up('lg')} {
    padding-inline: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 30px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.grayBar};
    line-height: 1.2;
    margin-bottom: 22px;

    & strong {
      font-weight: 700;
    }

    ${media.up('lg')} {
      margin-bottom: 44px;
    }
  }

  p {
    font-size: 16px;
    font-weight: 300;
    line-height: 2;
    letter-spacing: 0.5px;
    color: ${({ theme }) => theme.colors.grayBar};

    & strong {
      font-weight: 700;
    }
  }

  blockquote {
    background-color: ${({ theme }) => theme.colors.lynxWhite};
    padding: 20px 64px;
    border-left: 6px solid ${({ theme }) => theme.colors.redLink};
    margin-bottom: 20px;

    ${media.up('lg')} {
      margin-bottom: 40px;
    }

    & p {
      font-weight: 700;
      color: ${({ theme }) => theme.colors.redLink};
      letter-spacing: 0.8px;
    }
  }
`;
