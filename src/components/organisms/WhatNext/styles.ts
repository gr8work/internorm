import styled from 'styled-components';
import { media } from 'theme/media';

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grayBar};
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 60px 0 78px;
  margin: 0 auto;
  ${media.up('lg')} {
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1200px;
    padding: 60px 0 110px;
    justify-content: space-between;
  }
  ${media.up('xl')} {
    max-width: 1426px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 30px;
  ${media.up('lg')} {
    max-width: 322px;
    margin: 0;
    padding: 0;
  }
`;

export { Wrapper, Box, Content };
