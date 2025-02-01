import React, { FC } from 'react';
import { WrapperInnovationSlider } from './InnovationSlider.styles';
import { ImagesSwiperLabels } from 'components/molecules/ImagesSwiperLabels/ImagesSwiperLabels';
import { IImagesSwiperLabels } from 'components/molecules/ImagesSwiperLabels/interface';

const InnovationSlider: FC<IImagesSwiperLabels> = ({ items }) => (
  <WrapperInnovationSlider>
    <ImagesSwiperLabels items={items} />
  </WrapperInnovationSlider>
);

export default InnovationSlider;
