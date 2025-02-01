import styled from 'styled-components';

import WpImage from 'components/atoms/WpImage';
import Icon from 'components/atoms/Icon';

import { media } from 'theme/media';
import Text from 'components/atoms/Text';
import Pagination from 'components/molecules/Pagination';
import DownloadMaterial from 'components/organisms/DownloadMaterial';

export const StyledWrapper = styled.div`
  padding: 20px ${({ theme }) => theme.gap.side};
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 40px;
  position: relative;
  max-width: 1920px;
  margin-inline: auto;

  ${media.up('lg')} {
    padding-top: 100px;
    flex-direction: row;
  }

  ${media.up('xl')} {
    padding-inline: unset;
  }
`;

export const StyledPagination = styled(Pagination)`
  margin-inline: unset;
  margin-top: 40px;

  ${media.up('lg')} {
    margin-top: 70px;
  }
`;

export const StyledImage = styled(WpImage)`
  max-width: 680px;
  max-height: 627px;
  position: relative;
  right: -30px;

  align-self: end;

  ${media.up('lg')} {
    position: absolute;
    right: -60px;
    top: 60px;
    z-index: -1;
    width: 680px;
    height: 627px;
  }
`;

export const StyledContainer = styled.div`
  max-width: 1426px;
  margin-inline: auto;
  width: 100%;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  ${media.up('lg')} {
    gap: 54px;
    max-width: 871px;
  }
`;

export const StyledMaterialList = styled.ul`
  list-style-type: none;
`;

export const StyledMaterialFile = styled.div`
  display: grid;
  grid-template-areas:
    'pdf fileName download'
    'pdf fileName fileSize';

  gap: 20px;

  padding-top: 40px;
  text-transform: uppercase;
  grid-template-columns: max-content 1fr max-content;
  align-items: start;

  ${media.up('lg')} {
    grid-template-areas: 'pdf fileName fileSize download';
    align-items: center;
    padding-inline: ${({ theme }) => theme.gap.side};
    gap: 40px;
  }
`;

export const StyledItem = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const StyledFileName = styled.p`
  grid-area: fileName;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.grayBar};
  line-height: 2;
`;

export const StyledFileSize = styled.p`
  grid-area: fileSize;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.lightGray};
`;

export const StyledPdfIcon = styled(Icon)`
  grid-area: pdf;
`;

export const StyledDownloadIcon = styled(Icon)`
  grid-area: download;
`;

export const StyledDownloadLink = styled.a`
  color: ${({ theme }) => theme.colors.redLink};
  justify-self: end;
  transition: color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.grayBar};
  }
`;

export const StyledText = styled(Text)`
  font-size: 14px;
  line-height: 28px;
`;

export const StyledDownloadMaterial = styled(DownloadMaterial)`
  margin-top: 16px;
`;

export const StyledMaterialFileWrapper = styled.div``;
