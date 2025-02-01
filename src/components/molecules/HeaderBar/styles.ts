import styled from 'styled-components';
import { media } from 'theme/media';

const Wrapper = styled.div`
  width: 100%;
  height: 38px;
  padding: 0 30px;
  background: ${({ theme }) => theme.colors.grayBar};
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  ${media.up('lg')} {
    padding: 0 110px;
    ul {
      justify-content: end;
      gap: 0 70px;
    }
  }
`;

export { Wrapper };
