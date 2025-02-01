import { media } from 'theme/media';
import styled from 'styled-components';

export const WrapperDescription = styled.div`
  padding: 10px 24px 62px 24px;
  background: ${({ theme }) => theme.colors.grayBar};

  button,
  a {
    margin-top: 38px;
  }

  p {
    margin-top: 20px;
  }

  ${media.up('lg')} {
    padding: 3%;
    max-width: 51%;

    h4 {
      font-size: 40px;
    }
  }

  ${media.up('xl')} {
    padding: 76px;
    border-radius: 0 10px 10px 0;
  }
`;
