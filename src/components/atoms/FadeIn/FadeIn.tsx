import React from 'react';
import { domAnimation, LazyMotion, m } from 'framer-motion';

import { returnFadeInProps } from './FadeIn.contants';

import { FadeInOptionsType, FadeInPropsType } from './FadeIn.models';

const FadeIn = ({
  asEl = 'div',
  custom,
  children,
  className,
  animationVariant = 'up',
  layout,
}: FadeInPropsType) => {
  if (!children) return null;

  const { initial, transition, viewport, whileInView }: FadeInOptionsType =
    returnFadeInProps(animationVariant);

  const Component = m[asEl];

  return animationVariant === 'none' ? (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>{children}</>
  ) : (
    <LazyMotion features={domAnimation}>
      <Component
        {...{
          viewport: { ...(custom?.viewport || viewport) },
          initial: { ...(custom?.initial || initial) },
          transition: { ...(custom?.transition || transition) },
          whileInView: { ...(custom?.whileInView || whileInView) },
          layout,
          className,
        }}
      >
        {children}
      </Component>
    </LazyMotion>
  );
};

export default FadeIn;
