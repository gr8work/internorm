import styled from 'styled-components';
import Button from 'components/atoms/Button';
import IconListChecked from 'assets/icons/checked-icon-list-gray.svg';

import { media } from 'theme/media';
import WpImage from 'components/atoms/WpImage';
import Title from 'components/atoms/Title';
import FadeIn from 'components/atoms/FadeIn';

export const StyledButton = styled(Button)`
  margin-top: 18px;
`;

export const StyledWrapper = styled.div`
  margin-block: 40px;
  background-color: ${({ theme }) => theme.colors.billowyClouds};
  max-width: 1426px;
  margin-inline: auto;
  display: grid;

  ${media.up('lg')} {
    margin-block: 0 100px;
    gap: 95px;
    grid-template-columns: minmax(300px, 486px) 1fr;
    align-items: center;
  }
`;

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding-block: 40px;
  padding-inline: ${({ theme }) => theme.gap.side};

  ${media.up('lg')} {
    gap: 40px;
    padding: 60px 95px 60px 0;
  }
`;

export const StyledWpImage = styled(WpImage)`
  min-height: 400px;

  ${media.up('lg')} {
    min-height: 623px;
  }
`;

export const StyledFadeInList = styled(FadeIn)`
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

export const StyledTitle = styled(Title)`
  gap: 20px;
`;
