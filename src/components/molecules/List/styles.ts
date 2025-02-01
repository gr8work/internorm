import styled, { css } from 'styled-components';
import { media } from 'theme/media';
import { IListWrapper } from './interface';
import SideBarPlus from 'assets/icons/sidebar-plus.svg';
import SideBarClose from 'assets/icons/sidebar-close.svg';
import ListCheck from 'assets/icons/list-check.svg';

const Wrapper = styled.ul<IListWrapper>`
  list-style: none;
  display: flex;
  &.links-sidebar {
    gap: 0;
    li {
      font-size: 18px;
      &.parent::after {
        display: none;
      }
      &.active,
      &:hover {
        color: #ed1c23;
        font-weight: 700;
        .list-item a {
          color: #ed1c23 !important;
          font-weight: 700;
        }
      }
      a {
        font-size: 18px;
        color: #2e2b27;
        &.active,
        &:hover {
          color: #ed1c23;
          font-weight: 700;
        }
      }
      button {
        position: absolute;
        width: 30px;
        height: 30px;
        right: -6px;
        top: -6px;
        z-index: 2;
        opacity: 0;
        cursor: pointer;
      }
      &.offer-sidebar {
        margin-bottom: 50px;
        ul {
          padding: 5px 0 0 32px;
          gap: 0;
          margin: 0;
          li {
            margin-top: 25px;
            &.sub-offer-sidebar-mt {
              margin-top: 50px;
            }
            ul {
              padding: 30px 0 13px;
              margin: 0;
              gap: 10px;
              li a,
              li {
                font-size: 14px;
                line-height: 25px;
                color: #2f2f30;
                font-weight: 300;
                text-transform: none;
                margin-top: 0;
                &:hover {
                  color: #2f2f30;
                  font-weight: 700;
                }
                ul {
                  padding: 10px 20px;
                }
              }
            }
          }
          li a,
          li {
            font-size: 18px;
            line-height: 19px;
            letter-spacing: 1px;
            color: #2e2b27;
            font-weight: 300;
            text-transform: uppercase;
            position: relative;
            cursor: pointer;
            &.active,
            &:hover {
              color: #ed1c23;
            }
            &.active {
              font-weight: 700;
            }
          }
        }
      }
      &.sidebar-small-list,
      &.sidebar-small-list-inspiration {
        margin-bottom: 68px;
        &.sidebar-small-list-inspiration {
          margin-bottom: 50px;
        }
        ul {
          padding: 30px 37px 45px;
          margin: 0;
          gap: 10px;
          li a {
            font-size: 14px;
            line-height: 35px;
            color: #2f2f30;
            font-weight: 300;
            text-transform: none;
            &:hover {
              font-weight: 700;
            }
          }
        }
      }
      &.gray-list {
        padding-left: 37px;
        color: #b7b7b7;
        font-size: 14px;
        line-height: 19px;
        letter-spacing: 1px;
        font-weight: 700;
        text-transform: uppercase;
        position: relative;
        cursor: pointer;
        margin-bottom: 25px;
        &.parent {
          margin-bottom: 68px;
        }
        a {
          color: #b7b7b7;
          font-size: 13px;
          &.active,
          &:hover {
            color: #ed1c23;
            font-weight: 700;
          }
        }
        &.active,
        &:hover {
          color: #ed1c23;
          font-weight: 700;
        }
        ul {
          padding: 30px 18px 0;
          margin: 0;
          gap: 5px;
          li a {
            font-size: 14px;
            line-height: 35px;
            color: #2f2f30;
            font-weight: 300;
            text-transform: none;
            &:hover {
              font-weight: 700;
            }
          }
        }
      }
    }
  }
  ${({ type }) => {
    switch (type) {
      case 'icons-navbar':
        return css`
          gap: 0 24px;
          justify-content: end;
          li p,
          .list-item p {
            display: none;
          }
          button {
            display: none;
          }
          ${media.up('lg')} {
            gap: 0 55px;
            padding-top: 35px;
            align-items: start;
            li,
            .list-item {
              align-items: center;
              text-align: center;
              display: flex;
              justify-content: center;
              flex-direction: column;
              gap: 10px;
              p {
                display: inline-block;
                font-size: 12px;
                line-height: 16px;
                color: ${({ theme }) => theme.colors.billowyClouds};
                font-weight: 700;
              }
            }
          }
        `;
      case 'links-navbar':
        return css`
          gap: 0 60px;
          justify-content: end;
          .list-item {
            font-size: 12px;
            color: #2f2f30;
            line-height: 60px;
            font-weight: 700;
            letter-spacing: 2px;
            text-transform: uppercase;
            transition: color 0.3s ease-in-out;
            cursor: pointer;
            &:hover {
              color: #e0001a;
            }
          }
          li.active-link a {
            color: #ed1c23 !important;
            font-weight: 700;
          }
        `;
      case 'links-sidebar':
        return css`
          gap: 45px 0;
          padding: 48px 0 26px;
          flex-direction: column;
          li {
            font-size: 14px;
            line-height: 19px;
            letter-spacing: 1px;
            color: ${({ theme }) => theme.colors.graySideBar};
            font-weight: 700;
            text-transform: uppercase;
            position: relative;
            cursor: pointer;
            &:after {
              content: '';
              position: absolute;
              display: block;
              width: 16px;
              height: 16px;
              background: url('${SideBarPlus}');
              background-size: 16px;
              top: 0;
              right: 0;
            }
            &.active {
              &:after {
                background: url('${SideBarClose}');
                background-size: 16px;
              }
            }
            a {
              width: 100%;
            }
          }
        `;
      case 'contact-form':
        return css`
          gap: 21px;
          flex-direction: column;
          li {
            position: relative;
            padding-left: 39px;
            font-size: 18px;
            line-height: 24px;
            color: ${({ theme }) => theme.colors.grayBar};
            font-weight: 400;
            span {
              font-weight: 700;
              color: ${({ theme }) => theme.colors.redLink};
            }
            &:before {
              content: '';
              width: 22px;
              height: 22px;
              display: block;
              background: url('${ListCheck}');
              background-size: 22px;
              position: absolute;
              left: 0;
            }
          }
        `;
      case 'swiper-icons':
        return css`
          gap: 0;
          flex-direction: column;
          li {
            position: relative;
            font-size: 13px;
            line-height: 20px;
            color: ${({ theme }) => theme.colors.billowyClouds};
            font-weight: 300;
          }
        `;
      default:
        return css`
          font-size: 13px;
          color: ${({ theme }) => theme.colors.white};
          line-height: 18px;
        `;
    }
  }}
`;

const Row = styled.ul<IListWrapper>`
  list-style: none;
  display: flex;
  flex-direction: column;
  ${({ type }) => {
    switch (type) {
      case 'grey-sidebar-links':
        return css`
          gap: 27px 0;
          padding: 0 0 0 13px;
          li {
            &:after {
              display: none;
            }
            &.grey-sidebar-plus {
              &:after {
                display: block;
              }
            }
          }
        `;
      case 'default-sidebar-links':
        return css`
          gap: 23px 0;
          padding: 0 0 0 7px;
          li {
            &:after {
              display: none;
            }
            &.sidebar-plus {
              &:after {
                display: block;
              }
            }
          }
        `;
      default:
        return css`
          font-size: 13px;
          color: ${({ theme }) => theme.colors.white};
          line-height: 18px;
        `;
    }
  }}
`;

const Content = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 43px 0;
  margin-top: 41px;
  list-style: none;
  transition: max-height 0.4s, padding 0.4s;
  &.hide {
    max-height: 0;
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    overflow: hidden;
  }
  &.active {
    max-height: 100vh;
  }
  ${media.up('lg')} {
    gap: 50px 0;
  }
`;

export { Wrapper, Row, Content };
