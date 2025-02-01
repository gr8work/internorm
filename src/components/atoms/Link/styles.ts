import styled, { css } from 'styled-components';
import { ICustomLink } from './interface';
import ArrowIconRight from 'assets/icons/arrow-right.svg';
import ArrowIconRightWhite from 'assets/icons/arrow-right-white.svg';

const CustomLink = styled.a<ICustomLink>`
  text-decoration: none;
  display: inline-block;
  cursor: pointer;

  ${({ type }) => {
    switch (type) {
      case 'header-bar':
        return css`
          font-size: 13px;
          color: ${({ theme }) => theme.colors.white};
          line-height: 38px;
          font-weight: 400;
          transition: color 0.3s ease-in-out;

          &:hover {
            color: ${({ theme }) => theme.colors.pink};
          }
        `;
      case 'text-dark-link':
        return css`
          font-size: 12px;
          color: ${({ theme }) => theme.colors.grayBar};
          line-height: 60px;
          font-weight: 700;
          letter-spacing: 2px;
        `;
      case 'grey-sidebar':
        return css`
          font-size: 11px;
          color: rgba(112, 112, 112, 0.5);
          line-height: 15px;
          font-weight: 700;
          letter-spacing: 1px;
        `;
      case 'grey-sidebar-plus':
        return css`
          font-size: 11px;
          color: rgba(112, 112, 112, 0.5);
          line-height: 15px;
          font-weight: 700;
          letter-spacing: 1px;
        `;
      case 'sidebar':
        return css`
          font-size: 14px;
          color: ${({ theme }) => theme.colors.graySideBar};
          line-height: 19px;
          font-weight: 300;
          letter-spacing: 1px;
        `;
      case 'sidebar-plus':
        return css`
          font-size: 14px;
          color: ${({ theme }) => theme.colors.graySideBar};
          line-height: 19px;
          font-weight: 300;
          letter-spacing: 1px;
        `;
      case 'sidebar-red':
        return css`
          font-size: 14px;
          color: ${({ theme }) => theme.colors.redLink};
          line-height: 19px;
          font-weight: 300;
          letter-spacing: 1px;
        `;
      case 'text-dark-link-arrow':
        return css`
          font-size: 12px;
          color: ${({ theme }) => theme.colors.grayBar};
          line-height: 16px;
          font-weight: 400;
          letter-spacing: 2.4px;
          display: flex;
          flex-direction: row;
          align-items: center;
          transition: color 0.3s ease-in-out;
          text-transform: uppercase;

          &:hover {
            color: ${({ theme }) => theme.colors.redLink};
          }

          &:after {
            content: '';
            background: url('${ArrowIconRight}');
            display: block;
            width: 16px;
            height: 16px;
            margin-left: 10px;
          }
        `;
      case 'text-white-link-arrow':
        return css`
          font-size: 12px;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.billowyClouds};
          line-height: 16px;
          font-weight: 400;
          letter-spacing: 2px;
          display: flex;
          flex-direction: row;
          align-items: center;

          &:after {
            content: '';
            background: url('${ArrowIconRightWhite}');
            display: block;
            width: 16px;
            height: 16px;
            margin-left: 10px;
          }
        `;
      case 'copyright-link-text':
        return css`
          display: flex;
          color: ${({ theme }) => theme.colors.grayBar};

          &:hover {
            color: ${({ theme }) => theme.colors.redLink};
          }

          &:after {
            content: '|';
            display: flex;
            margin-inline: 10px;
          }

          &:last-child {
            &:after {
              display: none;
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

export { CustomLink };
