import React, { FC, useEffect, useState, useRef } from 'react';
import { IHeaderBanner } from './interface';
import WpImage from 'components/atoms/WpImage';
import { Content, StyledWrapper, WrappedImage } from './styles';
import Button from 'components/atoms/Button';
import Container from 'components/atoms/Container';
import Title from 'components/atoms/Title';
import { useBreakpoints } from 'hooks/useBreakpoints';
import { breakpointsObject } from 'theme/breakpoints';
import FadeIn from 'components/atoms/FadeIn';
import useScrollPosition from '@react-hook/window-scroll';

export const HeaderBanner: FC<IHeaderBanner> = ({ title, imageMobile, imageDesktop, button }) => {
  const { size } = useBreakpoints();
  const [isInSpace, setIsInSpace] = useState('');
  const scrollY = useScrollPosition(120);
  const ref = useRef<HTMLDivElement | null>(null);

  const renderImage = size.breakpoint >= breakpointsObject.lg ? imageDesktop : imageMobile;

  useEffect(() => {
    setIsInSpace(window && window.innerHeight < scrollY ? 'hide' : '')
    ref.current?.style.setProperty('top', `-${scrollY > 20 ? (scrollY * 0.65) - 20 : 0}px`)
  }, [scrollY]);

  return (
    <StyledWrapper>
      <WrappedImage ref={ref} className={isInSpace}>
        <WpImage {...renderImage} {...{ objectPosition: 'center top' }} />
      </WrappedImage>
      <Container>
        <Content>
          <FadeIn>
            <Title {...{ title, type: 'homepage-banner' }} />
          </FadeIn>
          <FadeIn custom={{ transition: { delay: 0.2 } }}>
            <Button {...{ text: button.label, link: button.link }} />
          </FadeIn>
        </Content>
      </Container>
    </StyledWrapper>
  );
};
