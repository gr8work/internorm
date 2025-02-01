import styled from 'styled-components';
import Container from 'components/atoms/Container';
import { media } from 'theme/media';
import Title from 'components/atoms/Title';
import ListCheckDark from 'assets/icons/list-check-dark.svg';

export const WrapperSpecialOffer = styled.div`
  background: ${({ theme }) => theme.colors.billowyClouds};
  padding-block: 40px 60px;

  ${media.up('lg')} {
    padding-block: 100px 170px;
  }
`;
export const TitleDescriptionStyle = styled.div`
  text-align: center;
  max-width: 771px;
  margin-inline: auto;
  padding-inline: 30px;

  ${media.up('lg')} {
    padding-inline: 0;
  }
`;
export const StyledContentWrapper = styled(Container)`
  padding-inline: 0;

  ${media.up('lg')} {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
  }
`;
export const StyledListWrapper = styled.div`
  padding: 0;

  ${media.up('lg')} {
    ul {
      gap: 40px;
    }
  }
`;

export const StyledButtonsWrapper = styled.div`
  gap: 40px;
  display: flex;
  flex-wrap: wrap;
  margin-block: 40px;

  ${media.up('lg')} {
    margin-block: 58px;
    gap: 40px;
  }
`;
export const StyledTitle = styled(Title)`
  margin-bottom: 20px;

  ${media.up('lg')} {
    margin-bottom: 40px;
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
