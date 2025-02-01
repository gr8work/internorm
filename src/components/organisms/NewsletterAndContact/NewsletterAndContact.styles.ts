import styled from 'styled-components';
import Container from 'components/atoms/Container';
import { media } from 'theme/media';

export const ContainerNewsletterAndContact = styled(Container)`
  display: flex;
  flex-direction: column;
  max-width: 1720px;
  margin-block: 30px;

  ${media.up('lg')} {
    flex-direction: row;
    margin-block: 68px 100px;
  }

  ${media.down('lg')} {
    padding-top: 20px;
  }
`;
