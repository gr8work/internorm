import styled from 'styled-components';
import { media } from 'theme/media';
import WpImage from 'components/atoms/WpImage';

export const ContainerOurBackground = styled.div`
  background-color: ${({ theme }) => theme.colors.billowyClouds};
  ${media.up('lg')} {
    min-height: 100%;
  }
`;
export const RowOurProductsBanner = styled.div`
  display: flex;
  flex-direction: column;

  ${media.up('lg')} {
    flex-direction: row;
    align-items: center;
  }
`;
export const ColumnTextOurProductsBanner = styled.div`
  order: 1;

  ${media.up('lg')} {
    width: 48%;
    height: calc(100vh * 1.11);
    display: flex;
    margin-right: 1%;
    margin-left: 1%;
  }
`;
export const ColumnImageOurProductsBanner = styled.div`
  display: flex;
  justify-content: center;
  order: 0;

  ${media.up('lg')} {
    order: 2;
    width: 50%;
    display: none;
  }
`;
export const WrapContainerBanners = styled.div`
  height: 100%;
  max-height: 1010px;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  ${media.up('lg')} {
    height: 48vw;
    max-height: 950px;
  }
`;

export const StyledWpImage = styled(WpImage)`
  min-height: 400px;

  ${media.up('lg')} {
    min-height: 952px;
  }
`;
