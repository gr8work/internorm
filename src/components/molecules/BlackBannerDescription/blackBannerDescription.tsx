import React, { FC } from 'react';
import Title from 'components/atoms/Title';
import { WrapperDescription } from 'components/molecules/BlackBannerDescription/styles';
import Text from 'components/atoms/Text';
import Button from 'components/atoms/Button';
import { IBlackBannerDescription } from 'components/molecules/BlackBannerDescription/interface';
import FadeIn from 'components/atoms/FadeIn';

export const BlackBannerDescription: FC<IBlackBannerDescription> = ({
  title,
  subTitle,
  typeText,
  description,
  textButton,
  linkButton,
  typeTitle,
}) => (
  <WrapperDescription>
    <FadeIn>
      <Title type={typeTitle} subTitle={subTitle} title={title} />
    </FadeIn>
    <FadeIn custom={{ transition: { delay: 0.2 } }}>
      <Text type={typeText} text={description} />
    </FadeIn>
    <FadeIn custom={{ transition: { delay: 0.4 } }}>
      <Button link={linkButton} text={textButton} />
    </FadeIn>
  </WrapperDescription>
);
