import styled from 'styled-components';
import { media } from 'theme/media';
import { INavigationSliderWrapper } from './interfaces';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 40px;
  ${media.up('lg')} {
    display: none;
  }
`;

const Solo = styled.span<INavigationSliderWrapper>`
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 16px;
  background: ${({ active, theme }) => (active ? theme.colors.redLink : 'transparent')};
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: ${({ active, theme }) => (active ? theme.colors.white : theme.colors.gray)};
  cursor: pointer;
`;

export { Wrapper, Solo };
