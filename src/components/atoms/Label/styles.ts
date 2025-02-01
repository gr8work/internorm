import styled, { css } from 'styled-components';
import { ILabelWrapper } from './interface';

const Wrapper = styled.label<ILabelWrapper>`
  font-size: ${({ type }) => (type ? '14px' : '12px')};
  font-style: ${({ typeText }) => typeText};
  line-height: 18px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  b{
    font-size: 10px;
    text-transform: none;
  }
  color: ${({ theme }) => theme.colors.gray};
  ${({ type, theme }) => {
    if (type === 'radio') {
      return css`
        cursor: pointer;
        display: flex;
        gap: 10px;
        font-weight: 300;
        text-transform: none;
        color: ${({ theme }) => theme.colors.grayBar};

        span {
          display: block;
          width: 17px;
          height: 17px;
          min-width: 17px;
          border-radius: 17px;
          border: 1px solid ${theme.colors.lightGray};
          background-color: ${theme.colors.white};
          position: relative;
        }

        input:checked + span:after {
          content: '';
          display: block;
          width: 7px;
          height: 7px;
          border-radius: 7px;
          background-color: ${theme.colors.redLink};
          top: 4px;
          left: 4px;
          position: absolute;
        }
      `;
    }
    if (type === 'checkbox') {
      return css`
        cursor: pointer;
        display: flex;
        gap: 10px;
        font-weight: 300;
        letter-spacing: 0;
        text-transform: none;
        color: ${({ theme }) => theme.colors.grayBar};

        span {
          display: block;
          width: 20px;
          height: 20px;
          min-width: 20px;
          background-color: ${theme.colors.white};
          position: relative;
        }

        input:checked + span:after {
          content: '';
          display: block;
          width: 10px;
          height: 10px;
          background-color: ${theme.colors.redLink};
          top: 5px;
          left: 5px;
          position: absolute;
        }
      `;
    }
  }}
`;

export { Wrapper };
