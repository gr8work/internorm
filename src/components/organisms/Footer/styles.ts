import styled from 'styled-components';
import { media } from 'theme/media';

export const WrappeFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 60px 0;

  ${media.up('md')} {
    flex-direction: row;
  }

  a {
    text-decoration: unset;
  }
`;
export const FirstColumnFooter = styled.div`
  ${media.up('md')} {
    width: 24%;
  }
`;
export const FirstInsideFooterColumn = styled.div`
  ${media.up('md')} {
    width: 32%;
  }
`;
export const SecondInsideFooterColumn = styled.div`
  ${media.up('md')} {
    width: 68%;
  }
`;

export const ListUlFooter = styled.ul`
  list-style-type: none;
  padding-left: 10px;
  margin-bottom: 40px;

  li {
    font-size: 14px;
    line-height: 32px;
    letter-spacing: 0.7px;

    a {
      color: ${({ theme }) => theme.colors.gray};

      &:hover {
        color: ${({ theme }) => theme.colors.redLink};
      }
    }

    &.red-li {
      a {
        color: ${({ theme }) => theme.colors.redLink};

        &:hover {
          color: ${({ theme }) => theme.colors.gray};
        }
      }
    }
  }
`;

export const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;

  ${media.up('md')} {
    width: 70%;
    flex-direction: row;
  }
`;
export const BottomLinksFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 15px;

  a {
    color: ${({ theme }) => theme.colors.grayBar};
  }

  ${media.up('md')} {
    margin-top: 62px;
  }
`;
