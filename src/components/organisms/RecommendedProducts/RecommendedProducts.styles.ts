import styled from 'styled-components';
import Container from 'components/atoms/Container';
import { media } from 'theme/media';

export const RecommendedProductsBackground = styled.div`
  background: ${({ theme }) => theme.colors.billowyClouds}; ;
`;
export const ContainerRecommendedProducts = styled(Container)`
  max-width: 955px;
  padding-block: 20px;

  ${media.up('lg')} {
    padding-block: 60px;
    padding-left: 204px;
  }
`;
export const WrapperProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px 0;
  padding-top: 20px;

  ${media.up('lg')} {
    gap: 19px;
  }
`;
export const WrapperProductItem = styled.div`
  max-width: 305px;
  height: 100%;
  width: calc(100% / 2 - 16px);
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${media.up('lg')} {
    width: calc(100% / 3 - 19px);
  }
`;
