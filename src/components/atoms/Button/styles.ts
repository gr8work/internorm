import styled from 'styled-components';
import { media } from 'theme/media';
import { IButtonWrapper } from './interface';
import ButtonArrow from 'assets/icons/button-arrow.svg';
import LinkWrap from 'components/atoms/LinkWrap';

const customStyles = (type: string | undefined, theme: any) => {
  let styles = `
    display: inline-block;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    width: fit-content;
    height: max-content;
    font-family: "Nunito Sans", sans-serif;
  `;

  switch (type) {
    case 'grey':
      styles += `
        background-color: ${theme.colors.heavenlyWhite};
        font-size: 9px;
        color: ${theme.colors.grayBar};
        line-height: 35px;
        padding: 0 40px;
        letter-spacing: 2px;
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

        &:hover {
          background-color: ${theme.colors.redLinkButton};
          color: ${theme.colors.white};
        }

        ${media.up('lg')} {
          font-size: 12px;
          line-height: 42px;
        }
      `;
      break;
    case 'red-sidebar':
      styles += `
        background-color: ${theme.colors.red};
        min-height: 61px;
        line-height: 61px;
        width: 100%;
        position: relative;
        font-size: 14px;
        letter-spacing: 1px;
        padding: 0 17px;
        text-align: left;
        color: ${theme.colors.white};
        transition: background-color 0.3s ease-in-out;

        &:hover {
          background-color: ${theme.colors.redLinkButton};
         
        }

        &:after {
          content: '';
          position: absolute;
          display: block;
          width: 13px;
          height: 14px;
          background: url("${ButtonArrow}");
          background-size: 13px 14px;
          top: 23.5px;
          right: 17px;
        }

        ${media.up('lg')} {
          min-height: 100px;
          line-height: 100px;
          font-size: 18px;
          padding: 0 56px 0 79px;

          &:after {
            top: 43px;
            right: 56px;
          }
        }
      `;
      break;
    case 'white':
      styles += `
        background-color: ${theme.colors.white};
        line-height: 42px;
        font-size: 12px;
        font-weight: 400;
        padding: 0 40px;
        letter-spacing: 2px;
        color: ${theme.colors.grayBar};
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

        &:hover {
          background-color: ${theme.colors.redLinkButton};
          color: ${theme.colors.white};
        }

        ${media.up('lg')} {
          font-weight: 700;
        }
      `;
      break;
    case 'dark':
      styles += `
        background-color: ${theme.colors.grayBar};
        line-height: 42px;
        font-size: 12px;
        font-weight: 700;
        padding: 0 35px;
        letter-spacing: 2px;
        color: ${theme.colors.white};
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

        &:hover {
          background-color: ${theme.colors.redLinkButton};
          color: ${theme.colors.white};
        }
      `;
      break;
    case 'red':
      styles += `
        background-color: ${theme.colors.redLinkButton};
        line-height: 42px;
        font-size: 12px;
        font-weight: 700;
        padding: 0 35px;
        letter-spacing: 2px;
        color: ${theme.colors.white};
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
        &:hover {
          background-color: ${theme.colors.heavenlyWhite};
          color: ${theme.colors.redLinkButton};
        }
      `;
      break;
    case 'red-light':
      styles += `
        background-color: ${theme.colors.redLinkButton};
        line-height: 42px;
        font-size: 12px;
        font-weight: 700;
        padding: 0 35px;
        letter-spacing: 2px;
        color: ${theme.colors.white};
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

        &:hover {
          background-color: ${theme.colors.heavenlyWhite};
          color: ${theme.colors.redLight};
        }
      `;
      break;
    case 'red-form':
      styles += `
        width: 100%;
        background-color: ${theme.colors.redLinkButton};
        line-height: 42px;
        font-size: 12px;
        font-weight: 700;
        padding: 0 35px;
        letter-spacing: 2px;
        color: ${theme.colors.white};
       
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
        &:hover {
          background-color: ${theme.colors.white};
          color: ${theme.colors.redLight};
        }
      `;
      break;
    default:
      styles += `
        line-height: 42px;
        font-size: 12px;
        letter-spacing: 2px;
        background-color: ${theme.colors.redLinkButton};
        padding: 0 40px;
        color: ${theme.colors.lynxWhite};
        transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;
         &:hover {
          background-color: ${theme.colors.heavenlyWhite};
          color: ${theme.colors.redLight};
        }
      `;
  }

  return styles;
};

const CustomLink = styled(LinkWrap)<IButtonWrapper>`
  text-decoration: none;
  ${({ boxtype, theme }) => customStyles(boxtype, theme)}
`;

const CustomButton = styled.button<IButtonWrapper>`
  border: none;
  background: transparent;
  ${({ boxtype, theme }) => customStyles(boxtype, theme)}
`;

export { CustomLink, CustomButton };
