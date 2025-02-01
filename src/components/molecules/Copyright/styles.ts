import styled from 'styled-components';
import { media } from 'theme/media';
import Link from 'components/atoms/Link';

export const WrapCopyright = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
  padding-top: 20px;
  justify-content: space-between;

  ${media.down('lg')} {
    gap: 20px;
  }
`;

export const CopyrightMainLinks = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 14px;

  ${media.down('lg')} {
    order: 1;
  }
`;
export const CopyrightText = styled.div`
  color: ${({ theme }) => theme.colors.grayBar};
  opacity: 0.5;
  font-size: 14px;

  ${media.down('lg')} {
    order: 3;
  }
`;
export const CopyrightDesign = styled(CopyrightText)`
  opacity: 1;
  display: flex;
  flex-direction: row;
  align-items: center;

  ${media.down('lg')} {
    order: 2;
  }

  p {
    opacity: 0.5;
    padding: 0px 10px 6px 0px;
  }
`;

export const StylesLink = styled(Link)``;
