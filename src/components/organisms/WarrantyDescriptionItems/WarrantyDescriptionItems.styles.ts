import styled, { css } from 'styled-components';
import ListCheck from 'assets/icons/list-check.svg';
import { media } from 'theme/media';
import { IItemWarrantyStyle } from 'components/organisms/WarrantyDescriptionItems';

export const ContainerWarranty = styled.div`
  margin-block: 30px 40px;

  ${media.up('lg')} {
    margin-block: 80px 100px;
  }
`;

export const WrapperWarrantyItems = styled.div`
  max-width: 1920px;
  margin: auto;

  ${media.up('lg')} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, auto);
    grid-template-areas:
      'full-height half-billowyClouds'
      'full-height half-billowyClouds'
      'full-height half-white'
      'full-height half-white'
      'full-width full-width';
  }
`;

export const WarrantyItemFullHeight = styled.div<IItemWarrantyStyle>`
  padding: 58px 30px 75px;

  ${({ type }) => {
    switch (type) {
      case 'full-height':
        return css`
          grid-area: full-height;
          background: ${({ theme }) => theme.colors.heavenlyWhite};
          height: 100%;
          width: 100%;
          padding-block: 30px;

          ${media.up('lg')} {
            padding: 45px 25% 70px 11%;
          }
        `;
      case 'full-width':
        return css`
          grid-area: full-width;
          width: 100%;
          background: ${({ theme }) => theme.colors.grayBar};
          color: ${({ theme }) => theme.colors.white};

          ${media.up('lg')} {
            display: flex;
            padding-inline: 12%;
            gap: 100px;
          }

          ul {
            li {
              padding-left: unset;

              &:before {
                display: none;
              }
            }
          }
        `;

      case 'half-billowyClouds':
        return css`
          grid-area: half-billowyClouds;

          width: 100%;
          background: ${({ theme }) => theme.colors.billowyClouds};

          ${media.up('lg')} {
            padding-inline: 11% 25%;
          }
        `;
      case 'half-white':
        return css`
          grid-area: half-white;

          width: 100%;
          background: ${({ theme }) => theme.colors.white};

          ${media.up('lg')} {
            padding-inline: 11% 25%;
          }
        `;
      default:
        return css`
          background: ${({ theme }) => theme.colors.heavenlyWhite};
        `;
    }
  }}
`;

export const WarrantyItemTitle = styled.h3`
  font-size: 78px;
  font-weight: bold;
  text-align: center;
  line-height: 1.4;
`;

export const WarrantyItemSubTitle = styled.p`
  text-align: center;
  letter-spacing: 3.6px;
  margin-bottom: 20px;

  ${media.up('xl')} {
    margin-bottom: 40px;
  }
`;

export const WarrantyList = styled.ul`
  list-style: none;
  display: flex;
  gap: 21px;
  flex-direction: column;

  li {
    position: relative;
    padding-left: 39px;
    font-size: 18px;
    line-height: 24px;
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

    ul {
      list-style-type: disc;
      margin-left: 20px;
      margin-block: 20px;

      li {
        font-size: 14px;
        letter-spacing: 0.7px;
        padding-left: 8px;
        margin-bottom: 20px;

        &:before {
          display: none;
        }
      }
    }
  }

  ${media.up('xl')} {
    gap: 40px;
  }
`;

export const WrapperWarrantyTitles = styled.div`
  width: 100%;
  margin-bottom: 20px;

  ${media.up('xl')} {
    margin-bottom: 50px;
  }
`;
