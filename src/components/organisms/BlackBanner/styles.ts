import { media } from 'theme/media';
import styled, { css } from 'styled-components';
import WpImage from 'components/atoms/WpImage';

export const WrapperBannerBlack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grayBar};

  ${media.up('lg')} {
    flex-direction: row;
  }
`;

export const StyledContainer = styled.div<{ isWarrantyPage?: boolean }>`
  max-width: 1717px;
  margin-inline: auto;
  overflow: hidden;

  ${media.up('lg')} {
    margin-top: 100px;
    max-height: 662px;
    border-radius: 10px;
  }

  ${({ isWarrantyPage }) =>
    isWarrantyPage &&
    css`
      margin-block: 60px;

      ${media.up('lg')} {
        margin-block: 100px;
      }
    `}
`;

export const StyledWpImage = styled(WpImage)`
  max-height: calc(300px + 20vw);

  ${media.up('lg')} {
    height: 662px;
  }
`;
