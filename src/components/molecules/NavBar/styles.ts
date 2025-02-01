import styled, { css } from 'styled-components';
import { media } from 'theme/media';
import Button from 'components/atoms/Button';
import LocationIcon from 'assets/icon-components/LocationIcon';
import { INavBar, INavBarWrapper } from './interface';

const Wrapper = styled.div<INavBarWrapper>`
  width: 100%;
  height: 64px;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 4;
  transition: background 0.4s ease-in-out, filter 0.4s ease-in-out;

  ${media.up('lg')} {
    padding: 0 50px;
    height: 100px;
    align-items: start;
  }
  ${({ active, activeScroll }) =>
    (active || activeScroll) &&
    css`
      background: ${({ theme }) => theme.colors.white};
      filter: drop-shadow(0px 3px 46px rgba(0, 0, 0, 0.09));

      ${media.up('lg')} {
        height: 100px;
        align-items: center;
        ul {
          padding: 0;
          li p,
          .list-item p {
            display: none;
          }
        }
      }
    `};
`;

const RightSide = styled.div<INavBarWrapper>`
  width: auto;
  display: flex;
  align-items: center;
  gap: 10px;

  ${media.up('lg')} {
    gap: 32px;
  }

  ul.navbar-links {
    li a {
      font-size: 12px;
      color: ${({ theme }) => theme.colors.grayBar};
      line-height: 60px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: ${({ theme }) => theme.colors.redLink};
      }
    }
    display: none;

    ${media.up('lg')} {
      display: flex;
      opacity: ${({ active, activeScroll }) => (active || activeScroll ? '1' : '0')};
      z-index: ${({ active, activeScroll }) => (active || activeScroll ? '1' : '-1')};
      transition: opacity 0.4s ease-in-out, z-index 0.4s ease-in-out;
    }
  }
`;

export const StyledSendButton = styled(Button)<{
  active: INavBar['active'];
  activeScroll: INavBar['activeScroll'];
}>`
  display: none;

  ${media.up('lg')} {
    display: flex;
    opacity: ${({ active, activeScroll }) => (active || activeScroll ? '1' : '0')};
    z-index: ${({ active, activeScroll }) => (active || activeScroll ? '1' : '-1')};
    transition: opacity 0.4s ease-in-out, z-index 0.4s ease-in-out;
  }
`;

export const StyledLocationIcon = styled(LocationIcon)`
  width: 25px;
`;

export const StyledLocationLink = styled.a<{
  active: INavBar['active'];
  activeScroll: INavBar['activeScroll'];
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  line-height: 16px;
  gap: 10px;
  font-weight: 700;
  text-align: center;
  padding: 20px;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.pink};
  }

  ${({ theme, active, activeScroll }) =>
    (active || activeScroll) &&
    css`
      color: ${theme.colors.grayBar};
      /* margin: 0; */

      p{
        display: none;
      }

      &:hover {
        color: ${theme.colors.redLink};
      }
    `}

  & p {
    display: none;

    ${media.up('lg')} {
      display: ${({active, activeScroll}) => active || activeScroll ? 'none' : 'block'};
    }
  }
`;

export { Wrapper, RightSide };
