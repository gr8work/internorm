import styled, { css } from 'styled-components';
import { media } from 'theme/media';
import { IInputGroupWrapper, IInputGroupList } from './interface';
import wrong from 'assets/icons/wrong.svg';

const Wrapper = styled.div<IInputGroupWrapper>`
  display: flex;
  flex-direction: ${({ type }) => (type === 'file' ? 'row' : 'column')};
  gap: 20px;

  .erro-form {
    font-size: 12px;
    line-height: 16px;
    font-weight: 300;
    color: #ed1c23;
    display: flex;
    gap: 5px;
    flex-shrink: 0;
    height: max-content;

    &:before {
      content: '';
      width: 14px;
      height: 16px;
      display: block;
      background: url('${wrong}');
      background-size: 14px 16px;
    }
  }
  ${({ type }) => {
    switch (type) {
      case 'file':
        return css`
          flex-direction: row;
          gap: 15px;
          justify-content: start;
          label {
            min-width: 105px;
          }
          div {
            min-width: calc(100% - 120px);
          }
        `;
      default:
        return css`
          flex-direction: column;
          gap: 20px;
        `;
    }
  }}
`;

const List = styled.div<IInputGroupList>`
  display: flex;
  flex-wrap: wrap;

  ${({ type }) => {
    switch (type) {
      case 'half':
        return css`
          gap: 20px;
          label {
            flex: 1 0 calc(50% - 20px);
            letter-spacing: 0.5px;
          }
        `;
      case 'file':
        return css`
          gap: 25px;
          div {
            flex: 1 0 auto;
            min-width: 90px;
          }
        `;
      default:
        return css`
          gap: 18px 20px;
          label {
            letter-spacing: 0.5px;
          }
        `;
    }
  }}
  ${media.up('md')} {
    flex-wrap: wrap;
    justify-content: start;
    ${({ type }) => {
      switch (type) {
        case 'half':
          return css`
            label {
              flex: 0 1 auto;
            }
          `;
        default:
          return css`
            label {
              letter-spacing: 0.5px;
            }
          `;
      }
    }}
  }
`;

export { Wrapper, List };
