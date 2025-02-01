import styled from 'styled-components';
import { media } from 'theme/media';

import Text from 'components/atoms/Text';
import Button from 'components/atoms/Button';

export const StyledWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grayBar};
`;

export const StyledContent = styled.div`
  display: grid;

  ${media.up('lg')} {
    max-width: 468px;
    margin-left: auto;
  }
`;

export const StyledYoutube = styled.iframe`
  min-height: 206px;
  aspect-ratio: 16 / 9;

  ${media.up('lg')} {
    max-width: 724px;
  }
`;

export const StyledText = styled(Text)`
  margin-top: 20px;

  ${media.up('lg')} {
    margin-top: 32px;
  }
`;

export const StyledContainer = styled.div`
  max-width: 1920px;
  margin-inline: auto;
  padding: 40px ${({ theme }) => theme.gap.side} 70px;
  display: grid;
  width: 100%;
  align-items: center;
  gap: 30px;

  ${media.up('lg')} {
    grid-template-columns: repeat(2, 1fr);
    gap: 93px;
    padding-block: 100px;
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 20px;

  ${media.up('lg')} {
    margin-top: 48px;
  }
`;
