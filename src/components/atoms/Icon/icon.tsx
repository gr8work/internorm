import React, { FC } from 'react';
import { IIcon } from './interface';
import { Wrapper } from './styles';

export const Icon: FC<IIcon> = ({ src, handleClick, type, className }) => (
  <Wrapper
    src={src}
    onClick={() => (handleClick ? handleClick() : '')}
    handleClick={handleClick}
    type={type}
    className={className}
  />
);
