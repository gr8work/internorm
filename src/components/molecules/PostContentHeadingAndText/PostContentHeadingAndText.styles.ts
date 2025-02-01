import styled from 'styled-components';

import { media } from 'theme/media';

export const StyledWrapper = styled.article`
  --container-width: 844px;

  display: flex;
  flex-direction: column;
  margin: 0 auto 50px;
  gap: 30px;
  max-width: var(--container-width);
`;

export const StyledText = styled.div`
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
      letter-spacing: 0.5px;
    }
  }
`;
