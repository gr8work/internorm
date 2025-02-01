import styled from 'styled-components';

import { media } from 'theme/media';
import WpImage from 'components/atoms/WpImage';
import Text from 'components/atoms/Text';

export const StyledImage = styled(WpImage)`
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 1;
  background-color: ${({ theme }) => theme.colors.white};

  ${media.up('md')} {
    max-width: 464px;
  }
`;

export const StyledText = styled(Text)`
  font-size: 14px;
  line-height: 26px;
  font-weight: 300;
  letter-spacing: 0.5px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;

  &[data-variant='primary'] {
    flex-direction: column;
  }

  &[data-variant='secondary'] {
    gap: 30px;
    justify-content: center;

    ${media.up('md')} {
      gap: 50px;
      flex-direction: row;
    }

    ${StyledText} {
      margin-block: 20px;
    }
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 612px;
`;

export const StyledCategory = styled.p`
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.redLink};
`;

export const StyledHeading = styled.p`
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.grayBar};
  text-transform: uppercase;
`;
