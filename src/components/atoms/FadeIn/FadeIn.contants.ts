import { FadeInVariantType, FadeInOptionsType } from './FadeIn.models';

export const returnFadeInProps = (variant: FadeInVariantType): FadeInOptionsType => {
  switch (variant) {
    case 'up':
      return {
        initial: { opacity: 0, y: 32 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: {
          duration: 0.3,
        },
      };
    default:
      return {
        initial: { opacity: 0, y: 0 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: {
          duration: 0.4,
          delay: 0,
        },
      };
  }
};
