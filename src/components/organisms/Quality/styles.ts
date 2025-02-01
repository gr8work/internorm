import styled, { css } from 'styled-components';
import { media } from 'theme/media';
import { IQualityWrapper } from './interface';

const Wrapper = styled.div<IQualityWrapper>`
  width: 100%;
  padding-bottom: 48px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: -5px;
  text-align: center;
  position: relative;

  ${media.up('lg')} {
    padding-bottom: 100px;
    gap: 90px;
  }

  ${({ type }) => {
    switch (type) {
      case 'large-dark':
        return css`
          background-color: ${({ theme }) => theme.colors.grayBar};
          padding-block: 100px;
        `;
      case 'white':
        return css`
          background-color: ${({ theme }) => theme.colors.alabaster};
        `;
      default:
        return css`
          background-color: ${({ theme }) => theme.colors.grayBackground};
        `;
    }
  }}
`;

const Content = styled.div<IQualityWrapper>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;

  ${media.up('lg')} {
    gap: 40px;
    padding-top: 40px;
  }

  ${({ type }) => {
    switch (type) {
      case 'large-dark':
        return css`
          max-width: 1056px;
          color: white;

          h3 {
            max-width: 780px;
            margin: auto;
          }
        `;
      case 'white':
        return css`
          max-width: 800px;
        `;
      default:
        return css`
          max-width: 538px;
        `;
    }
  }}
`;
const Bottom = styled.div`
  display: none;

  ${media.up('lg')} {
    display: block;
  }
`;

export { Wrapper, Content, Bottom };
