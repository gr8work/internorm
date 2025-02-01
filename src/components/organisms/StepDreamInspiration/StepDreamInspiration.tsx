import React from 'react';
import Title from 'components/atoms/Title';

import IconsSwiper from 'components/molecules/IconsSwiper';
import { contentIcons } from 'components/organisms/WhatNext/data';
import {
  StyleBox,
  StyleWrapper,
} from 'components/organisms/StepDreamInspiration/StepDreamInspiration.styles';

const StepDreamInspiration = () => (
  <StyleWrapper>
    <StyleBox>
      <Title subTitle="KILKA KROKÓW DO SPEŁNIENIATWOJEGO MARZENIA" type="red-opacity" />
      <IconsSwiper items={contentIcons} />
    </StyleBox>
  </StyleWrapper>
);
export default StepDreamInspiration;
