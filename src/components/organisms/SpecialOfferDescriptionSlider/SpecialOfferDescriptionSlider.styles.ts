import Title from 'components/atoms/Title';
import styled from 'styled-components';
import { media } from 'theme/media';
import ListCheckDark from 'assets/icons/list-check-dark.svg';
import Button from 'components/atoms/Button';

export const StyledTitle = styled(Title)`
  margin-bottom: 40px;
  padding-inline: 30px;

  ${media.up('lg')} {
    padding-inline: 0;
  }
`;
export const StyledListWrapper = styled.div`
  padding-inline: 30px;

  ${media.up('lg')} {
    padding-inline: 0px;
  }
`;

export const StyledList = styled.ul`
  list-style-type: none;
  gap: 21px;
  display: flex;
  flex-direction: column;

  li {
    position: relative;
    padding-left: 39px;
    font-size: 18px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.grayBar};
    font-weight: 400;

    &:before {
      content: '';
      width: 22px;
      height: 22px;
      display: block;
      background: url('${ListCheckDark}');
      background-size: 22px;
      position: absolute;
      left: 0;
    }
  }
`;

export const StyledButton = styled(Button)`
  margin-top: 20px;

  ${media.up('lg')} {
    margin-top: 39px;
  }
`;
