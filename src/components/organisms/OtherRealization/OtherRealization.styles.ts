import styled from 'styled-components';
import { media } from 'theme/media';
import Container from 'components/atoms/Container';
import Title from 'components/atoms/Title';

export const ContainerRealization = styled(Container)`
  max-width: 1280px;
  margin: auto;
  margin-block: 26px;

  ${media.up('lg')} {
    margin-block: 100px 70px;
  }
`;

export const WrapRealizations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;

  ${media.up('lg')} {
    flex-wrap: wrap;
    flex-direction: row;
  }
`;
export const CartRealization = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  img {
    border-radius: 10px;
  }
`;
export const TitleStyle = styled(Title)`
  margin-block: 20px 46px;
`;
