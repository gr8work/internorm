import styled from 'styled-components';
import Container from 'components/atoms/Container';
import { media } from 'theme/media';

export const ContainerArticle = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;

  ${media.up('lg')} {
    flex-direction: row;
  }
`;

export const WrapperContentArticle = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  align-items: center;

  ${media.up('lg')} {
    flex-direction: row;
    max-width: 1136px;
  }
`;

export const WrapperAuthor = styled.div`
  max-width: 190px;
  width: 100%;
  font-size: 14px;
  line-height: 21px;
  margin-block: 20px;
  color: ${({ theme }) => theme.colors.grayBar};

  ${media.up('lg')} {
    align-self: start;
    margin-block: 0;
  }
`;

export const WrapperArticleContent = styled.div`
  max-width: 844px;
  min-height: 400px;
`;
