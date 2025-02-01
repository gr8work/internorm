/* eslint-disable no-lonely-if */
/* eslint-disable no-plusplus */
import React, { useRef, useEffect, useState } from 'react';
import useScrollPosition from '@react-hook/window-scroll';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { OurProductsBanner } from 'components/organisms/OurProductsBanner/ourProductsBanner';
import {
  Wrapper,
  SoloSlider,
  StyledWpImage,
  SoloSliderImage,
  ImagesList,
  ImagesListOut,
  TextBox,
} from './styles';

gsap.registerPlugin(ScrollTrigger);

const ScrollBoxes = ({ banners }: any) => {
  const scrollY = useScrollPosition(60);
  const [windowHeight, setWindowHeight] = useState<number>(0);
  const [fromTop, setFromTop] = useState<number>(scrollY);
  const [fromBottom, setFromBottom] = useState<number>(scrollY);
  const refWrapper = useRef<HTMLHeadingElement>(null);
  const itemsRef = useRef<HTMLHeadingElement[]>([]);
  const imagesRef = useRef<HTMLHeadingElement[]>([]);

  const addToRefs = (el: any) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  const addToImages = (el: any) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  };

  const addClasses = (index: number) => {
    let classes = '';
    if (fromTop <= 0) classes += ' fixed';
    if (fromBottom <= 0) classes += ' bottom';
    if (index === 0) classes += ' active';
    return classes;
  };

  useEffect(() => {
    if (refWrapper.current && window && document) {
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      const scrollTop = document.querySelector('html')?.scrollTop;
      setWindowHeight(window.innerHeight);
      setFromTop(
        isSafari
          ? refWrapper.current.getBoundingClientRect().top * 0.9
          : refWrapper.current.getBoundingClientRect().top
      );
      if (isSafari && scrollTop) {
        setFromBottom(imagesRef.current[imagesRef.current.length - 1].offsetTop - scrollTop * 0.79);
      } else {
        setFromBottom(imagesRef.current[imagesRef.current.length - 1].getBoundingClientRect().top);
      }
      for (let i = 0; i < imagesRef.current.length; i++) {
        if (isSafari) {
          if (
            imagesRef.current[i].getBoundingClientRect().top * 0.9 <=
            imagesRef.current[i].offsetHeight * 0.9 * 0.4
          ) {
            if (i > 0) itemsRef.current[i - 1].classList.remove('active');
            itemsRef.current[i].classList.add('active');
          } else {
            if (i !== 0) itemsRef.current[i].classList.remove('active');
          }
        } else {
          if (
            imagesRef.current[i].getBoundingClientRect().top * 0.9 <=
            imagesRef.current[i].offsetHeight * 0.9 * 0.4
          ) {
            if (i > 0) itemsRef.current[i - 1].classList.remove('active');
            itemsRef.current[i].classList.add('active');
          } else {
            if (i !== 0) itemsRef.current[i].classList.remove('active');
          }
        }
      }
    }
  }, [scrollY]);

  useEffect(() => {
    imagesRef.current.forEach((el) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          pin: false,
          pinSpacing: false,
        },
      });
    });
  }, []);

  return (
    <Wrapper ref={refWrapper} height={banners.length}>
      {banners.map((banner: any, index: number) => (
        <SoloSlider className={addClasses(index)} ref={addToRefs} key={index} height={windowHeight}>
          <OurProductsBanner key={banner.title} {...banner} />
        </SoloSlider>
      ))}
      <ImagesListOut>
        <ImagesList>
          {banners.map((banner: any, index: number) => (
            <SoloSliderImage ref={addToImages} key={index}>
              <StyledWpImage {...banner.image} />
            </SoloSliderImage>
          ))}
        </ImagesList>
      </ImagesListOut>
    </Wrapper>
  );
};

export default ScrollBoxes;
