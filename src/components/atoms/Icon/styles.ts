import styled from 'styled-components';
import { IIcon } from './interface';

const Wrapper = styled.img<IIcon>`
  width: ${({ type, width }) => `${type ? `${type}px` : ''}` || width || ''};
  height: ${({ type, height }) => `${type ? `${type}px` : ''}` || height || ''};
  background: url('${({ src }) => src}');
  background-size: ${({ type, backgroundSize }) =>
    `${type ? `${type}px` : ''}` || backgroundSize || 'contain'};
  cursor: ${({ handleClick }) => handleClick && 'pointer'};
`;

export { Wrapper };
