import styled from 'styled-components';
import IconListChecked from 'assets/icons/checked-icon-list-gray.svg';
import { media } from 'theme/media';

import Title from 'components/atoms/Title';
import Button from 'components/atoms/Button';

export const WrapperSecurityBanner = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin: auto;
  max-width: 1920px;
  align-items: center;

  ${media.up('lg')} {
    flex-direction: row;
  }
`;
export const StyledSecurityTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 40px;
`;

export const WrapperSecurityDescription = styled.div`
  padding: 30px;

  ${media.up('lg')} {
    flex-direction: row;
    max-width: 50%;
    padding: 50px 100px;
  }

  ${media.up('xl')} {
    padding: 100px 140px;
  }
`;

export const ListSecurityDescription = styled.ul`
  gap: 21px;
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-top: 40px;

  li {
    display: flex;
    gap: 16px;

    &::before {
      content: '';
      width: 22px;
      height: 22px;
      display: block;
      background: url('${IconListChecked}');
      background-size: 22px;
      flex-shrink: 0;
    }
  }
`;

export const StyledSecuritySubTitle = styled(Title)`
  margin-bottom: 30px;
`;

export const StyledButton = styled(Button)`
  margin-block: 40px;

  ${media.up('lg')} {
    margin-block: 60px;
  }
`;
