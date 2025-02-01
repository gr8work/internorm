import styled from 'styled-components';
import { media } from 'theme/media';

import WpImage from 'components/atoms/WpImage';

export const WrapperAuthor = styled.div`
  max-width: 190px;
  width: 100%;
  font-size: 14px;
  font-weight: 300;
  line-height: 21px;
  margin-block: 20px;
  color: ${({ theme }) => theme.colors.grayBar};

  strong {
    font-weight: 700;
  }

  ${media.up('lg')} {
    align-self: start;
    margin-block: 0;
  }
`;

export const Avatar = styled(WpImage)`
  max-width: 70px;
  max-height: 70px;
  margin-bottom: 17px;
  border-radius: 100%;
`;
