import styled from 'styled-components';
import Container from 'components/atoms/Container';
import { media } from 'theme/media';

export const ContainerRelatedPosts = styled(Container)`
  max-width: 955px;

  ${media.up('lg')} {
    padding-left: 204px;
  }
`;
export const WrapRelatedPosts = styled.div`
  padding-block: 20px 60px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderColor};

  ${media.up('lg')} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 'post-0 post-1';
  }
`;
