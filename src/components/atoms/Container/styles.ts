import styled from 'styled-components';
import { media } from 'theme/media';

const Wrapper = styled.div`
  width: 100%;
  margin-inline: auto;
  max-width: 100%;
  padding-inline: ${({ theme }) => theme.gap.side};

  ${media.up('lg')} {
    max-width: 1200px;
    padding: 0;
  }

  ${media.up('xl')} {
    max-width: 1426px;
    margin-inline: auto;
  }
`;

export { Wrapper };
