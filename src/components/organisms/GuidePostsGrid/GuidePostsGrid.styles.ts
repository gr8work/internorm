import styled from 'styled-components';
import Container from 'components/atoms/Container';
import { media } from 'theme/media';
import Pagination from 'components/molecules/Pagination';

export const WrapContainerPostGrid = styled(Container)`
  display: grid;
  grid-template: repeat(3, max-content) / repeat(2, 1fr);
  grid-template-areas:
    'post-0 post-0'
    'post-1 post-2'
    'pagination pagination';
  margin-bottom: 40px;
  column-gap: 20px;

  &.large {
    grid-template-areas:
      'post-0 post-0'
      'post-1 post-2'
      'post-3 post-4'
      'post-5 post-6'
      'post-7 post-8'
      'post-9 post-10'
      'post-11 post-12'
      'post-13 post-14'
      'post-15 post-16'
      'post-17 post-18'
      'post-19 post-20'
      'pagination pagination';
  }

  ${media.up('lg')} {
    display: grid;
    gap: 30px 90px;
    margin-bottom: 100px;
    grid-template: repeat(4, max-content) / repeat(3, 1fr);
    grid-template-areas:
      'post-0 post-0 newsletter'
      'post-1 post-2 post-3'
      'pagination pagination pagination';

    &.large {
      grid-template-areas:
        'post-0 post-0 newsletter'
        'post-1 post-2 post-3'
        'post-4 post-5 post-6'
        'post-7 post-8 post-9'
        'post-10 post-11 post-12'
        'post-13 post-14 post-15'
        'post-16 post-17 post-18'
        'post-19 post-20 post-21'
        'pagination pagination pagination';
    }

    &:first-child {
      grid-column: 1/3;
    }
  }
`;

export const WrapperItemPost = styled.div<{ index: number }>`
  height: 100%;
  grid-area: post-${({ index }) => index};
  margin-bottom: 60px;

  ${media.up('lg')} {
    margin-bottom: 0;
  }
`;

export const WrapperTagsFilter = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 30px;
  align-items: center;

  ${media.up('lg')} {
    margin-bottom: 60px;
    gap: 30px;
    align-items: center;
  }
`;

export const WrapperNewsletter = styled.div`
  background: ${({ theme }) => theme.colors.heavenlyWhite};
  padding: 60px 40px 88px;
  grid-area: newsletter;
  display: flex;
  align-self: start;
  flex-direction: column;
  gap: 26px;
  margin-block: 40px;

  ${media.up('lg')} {
    margin-top: 0;
  }
`;

export const WrapperActionNewsletter = styled.div`
  position: relative;

  input {
    max-width: calc(100% - 118px);
    border-radius: 21px 0 0 21px;
    height: 42px;
  }

  button {
    width: 118px;
    padding: 0;
    background-color: #f0494f;
    color: #ffffff;
    opacity: 1;
    font-size: 12px;
  }
`;

export const StyledPagination = styled(Pagination)`
  grid-area: pagination;

  ${media.up('lg')} {
    margin-top: 40px;
  }
`;
