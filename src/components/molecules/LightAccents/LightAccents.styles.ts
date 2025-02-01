import styled from 'styled-components';

import Title from 'components/atoms/Title';
import Text from 'components/atoms/Text';
import WpImage from 'components/atoms/WpImage';

import { media } from 'theme/media';

export const StyledWrapper = styled.div`
  margin-top: 40px;
  width: 100%;
  max-width: 1486px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${media.up('lg')} {
    margin-top: 60px;
    min-height: 381px;
  }

  ${media.up('xl')} {
    min-height: 461px;
  }

  ${media.up('xxl')} {
    min-height: 591px;
  }
`;

export const StyledTitle = styled(Title)`
  padding-inline: ${({ theme }) => theme.gap.side};

  ${media.up('lg')} {
    margin-top: 80px;
    max-width: 584px;
  }

  ${media.up('xxl')} {
    margin-top: 140px;
  }
`;

export const StyledText = styled(Text)`
  padding-inline: ${({ theme }) => theme.gap.side};

  ${media.up('lg')} {
    max-width: 545px;
  }
`;

export const StyledImage = styled(WpImage)`
  max-width: 961px;
  margin-inline: auto;

  ${media.up('lg')} {
    position: absolute;
    right: -40px;
    bottom: -40px;
    max-width: 691px;
    height: auto;
  }

  ${media.up('xl')} {
    max-width: 761px;
  }

  ${media.up('xxl')} {
    max-width: 961px;
  }
`;
