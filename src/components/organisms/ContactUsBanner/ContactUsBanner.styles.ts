import styled from 'styled-components';
import Text from 'components/atoms/Text';
import Button from 'components/atoms/Button';

import { media } from 'theme/media';
import WpImage from 'components/atoms/WpImage';

export const StyledButton = styled(Button)`
  flex-shrink: 0;
  margin-bottom: 45px;
  opacity: 0.8;

  &[data-variant='default'] {
    margin-inline: ${({ theme }) => theme.gap.side};

    ${media.up('lg')} {
      margin: 0 ${({ theme }) => theme.gap.side} 0 0;
    }
  }

  &[data-variant='inspirations'] {
    margin-block: ${({ theme }) => theme.gap.side};

    ${media.up('lg')} {
      margin: 0 0 ${({ theme }) => theme.gap.side} 0;
    }
  }
`;

export const StyledWrapper = styled.div`
  margin-block: 40px;
  background-color: ${({ theme }) => theme.colors.billowyClouds};
  max-width: 1920px;
  margin-inline: auto;
  display: grid;

  ${media.up('lg')} {
    margin-block: 70px;
    gap: 60px;
    grid-template-columns: minmax(300px, 732px) minmax(auto, 642px) max-content;
    align-items: center;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding-block: 40px;
  padding-inline: ${({ theme }) => theme.gap.side};

  ${media.up('lg')} {
    gap: 40px;
  }
`;

export const StyledText = styled(Text)`
  font-size: 14px;
  letter-spacing: 1px;
`;

export const StyledWpImage = styled(WpImage)`
  height: 510px;
`;
