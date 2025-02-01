import Title from 'components/atoms/Title';
import Text from 'components/atoms/Text';
import WpImage from 'components/atoms/WpImage';
import styled from 'styled-components';
import Button from 'components/atoms/Button';
import ListCheck from 'assets/icons/list-check.svg';
import { media } from 'theme/media';

export const StyledWrapper = styled.div`
  margin-top: 64px;
  min-height: 941px;
  position: relative;
  display: grid;
  grid-template-rows: 1fr max-content;

  ${media.up('lg')} {
    margin-top: 100px;
  }
`;

export const StyledGradient = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  background: linear-gradient(90deg, #000, rgba(46, 43, 39, 0));
  z-index: -1;

  ${media.up('lg')} {
    width: 60%;
  }
`;

export const StyledWpImage = styled(WpImage)`
  position: absolute;
  inset: 0;
  z-index: -1;
`;

export const StyledBarButton = styled(Button)`
  text-align: center;

  ${media.up('xl')} {
    margin-left: 100px;
  }
`;

export const StyledBar = styled.div`
  min-height: 168px;
  align-self: end;

  &[data-variant='architect'] {
    background-color: rgba(237, 28, 35, 0.74);

    ${StyledBarButton} {
      background-color: rgba(46, 43, 39, 0.8);
    }
  }

  &[data-variant='partner'] {
    background-color: ${({ theme }) => theme.colors.graySideBar};
  }
`;

export const StyledBarContainer = styled.div`
  max-width: 1426px;
  margin-inline: auto;
  width: 100%;
  place-self: center;
  display: grid;
  place-items: center;
  height: 100%;
  padding: 60px ${({ theme }) => theme.gap.side};
  gap: 40px;

  ${media.up('lg')} {
    grid-template-columns: 300px 1fr max-content;
    gap: 134px;
  }

  ${media.up('xl')} {
    padding: 40px 0;
  }
`;

export const StyledHeading = styled(Title)`
  margin-top: 14px;

  h1,
  h2 {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 300;
    font-size: 40px;

    ${media.up('lg')} {
      font-size: 46px;
    }
  }
`;

export const StyledContainer = styled.div`
  max-width: 1426px;
  margin-inline: auto;
  width: 100%;
  place-self: center;
  padding: 60px ${({ theme }) => theme.gap.side};

  ${media.up('xl')} {
    padding-inline: unset;
  }
`;

export const StyledContentButton = styled(Button)``;

export const StyledContent = styled.div`
  &[data-variant='architect'] {
    max-width: 580px;

    ${StyledContentButton} {
      background-color: rgba(245, 240, 233, 0.74);
    }
  }

  &[data-variant='partner'] {
    max-width: 630px;
  }

  .breadcrumb {
    padding-inline: unset;
    text-align: left;

    &__list {
      justify-content: flex-start;
      color: ${({ theme }) => theme.colors.white};

      &__item {
        a {
          color: ${({ theme }) => theme.colors.white};

          &:hover {
            color: ${({ theme }) => theme.colors.pink};
          }
        }

        a[aria-current='page'] {
          font-weight: 700;
          color: ${({ theme }) => theme.colors.pink};

          &:hover {
            color: ${({ theme }) => theme.colors.redLink};
          }
        }
      }
    }
  }
`;
export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 0.5px;
  margin-block: 20px 30px;

  ${media.up('lg')} {
    margin-block: 46px 60px;
  }
`;

export const StyledBarHeading = styled(Title)`
  p {
    color: ${({ theme }) => theme.colors.white};
  }

  h2,
  h3 {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 300;
    font-size: 40px;
  }
`;

export const StyledBenefitList = styled.ul`
  gap: 21px;
  display: flex;
  flex-direction: column;
  list-style: none;

  li {
    display: flex;
    gap: 16px;
    font-size: 18px;
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: 0.5px;

    &::before {
      content: '';
      width: 22px;
      height: 22px;
      display: block;
      background: url('${ListCheck}');
      background-size: 22px;
      flex-shrink: 0;
    }
  }
`;
