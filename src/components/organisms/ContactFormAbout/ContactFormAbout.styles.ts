import Title from 'components/atoms/Title';
import WpImage from 'components/atoms/WpImage';
import styled from 'styled-components';
import { media } from 'theme/media';

import IconListChecked from 'assets/icons/list-check.svg';

export const StyledAdvantageList = styled.ul`
  gap: 30px;
  display: flex;
  flex-direction: column;
  list-style: none;

  li {
    display: flex;
    gap: 16px;
    line-height: 2;
    font-size: 18px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.grayBar};

    strong {
      font-weight: 700;
    }

    &::before {
      margin-top: 4px;
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

export const StyledFormPerson = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  ${media.up('lg')} {
    translate: -10%;
  }
`;

export const StyledPersonImage = styled(WpImage)`
  height: 275px;
  width: 275px;
  flex-shrink: 0;
`;

export const StyledTitle = styled(Title)`
  gap: 20px;
`;

export const StyledAbout = styled.div`
  display: grid;
  gap: 4px;
`;

export const StyledFullName = styled.p`
  font-weight: 700;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.grayBar};
`;

export const StyledPosition = styled.p`
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.gray};
  line-height: 26px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const StyledContact = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grayBar};
`;

export const StyledDescription = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};

  ${media.up('lg')} {
    border: none;
    display: flex;
    flex-direction: column;
    gap: 26px;
    position: relative;

    &:after {
      content: '';
      width: 1px;
      height: 90%;
      background-color: ${({ theme }) => theme.colors.gray};
      position: absolute;
      top: 0;
      right: -20px;
    }
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0 30px;

  ${media.up('lg')} {
    width: 481px;
  }
`;
