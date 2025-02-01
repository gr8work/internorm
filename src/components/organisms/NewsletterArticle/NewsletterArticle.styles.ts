import styled from 'styled-components';
import Container from 'components/atoms/Container';
import { media } from 'theme/media';
import WpImage from 'components/atoms/WpImage';

export const ContainerNewsletterArticle = styled(Container)`
  display: flex;
  background: ${({ theme }) => theme.colors.heavenlyWhite};
`;

export const WrapperNewsletter = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.heavenlyWhite};
  position: relative;
  height: 426px;

  ${media.up('lg')} {
    flex-direction: row;
  }
`;

export const WrapperContentNewsletter = styled.div`
  background: ${({ theme }) => theme.colors.heavenlyWhite};
  padding: 26px 30px;
  gap: 16px;
  display: flex;
  flex-direction: column;

  ${media.up('lg')} {
    padding: 60px 25px 66px 109px;
  }

  ${media.up('xl')} {
    padding: 60px 25px 66px;
  }

  ${media.up('xxl')} {
    padding-left: 109px;
  }
`;

export const StyledWpImage = styled(WpImage)`
  display: none;

  ${media.up('xl')} {
    display: block;
  }
`;
