import React from 'react';

import { Wrapper, WrapperImage } from './styles';
import { IImageHover } from './interface';

const ImageHover = ({ children, type, className }: IImageHover) => {
  const handleMouseMove = (event: any) => {
    const el = event.target.parentNode.parentNode;
    const r = el.getBoundingClientRect();

    const moveX = (event.clientX - (r.left + Math.floor(r.width / 2))) / 10;
    const moveY = (event.clientY - (r.top + Math.floor(r.height / 2))) / 10;

    event.target.parentNode.parentNode.style.setProperty('--x', `${moveX}px`);
    event.target.parentNode.parentNode.style.setProperty('--y', `${moveY}px`);
  };

  const handleMouseLeave = (event: any) => {
    event.target.parentNode.style.setProperty('--x', `0`);
    event.target.parentNode.style.setProperty('--y', `0`);
  };

  return (
    <Wrapper
      type={type}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      <WrapperImage type={type}>{children}</WrapperImage>
    </Wrapper>
  );
};

export default ImageHover;
