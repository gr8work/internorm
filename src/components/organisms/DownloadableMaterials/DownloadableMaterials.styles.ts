import styled from 'styled-components';

import WpImage from 'components/atoms/WpImage';
import Icon from 'components/atoms/Icon';

import { media } from 'theme/media';
import Text from 'components/atoms/Text';

export const StyledWrapper = styled.div`
  padding: 20px ${({ theme }) => theme.gap.side};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 40px;

  ${media.up('lg')} {
    padding-top: 100px;
    flex-direction: row;
    margin-inline: auto;
    max-width: 1486px;
  }
`;

export const StyledImage = styled(WpImage)`
  width: 100%;
  align-self: center;
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  ${media.up('lg')} {
    gap: 54px;
    max-width: 50%;
  }
`;

export const StyledMaterialList = styled.ul`
  list-style-type: none;
  max-width: 871px;
  margin-inline: auto;
`;

export const StyledMaterialFile = styled.div`
  display: grid;
  grid-template-areas:
    'pdf fileName download'
    'pdf fileName fileSize';
  gap: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  padding-block: 40px;
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

  &:hover {
    color: ${({ theme }) => theme.colors.grayBar};
  }
`;

export const StyledText = styled(Text)`
  font-size: 14px;
  line-height: 28px;
`;
