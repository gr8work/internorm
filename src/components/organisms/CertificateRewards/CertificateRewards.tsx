import React from 'react';

import Container from 'components/atoms/Container';
import WpImage, { WpImageType } from 'components/atoms/WpImage';

import {
  ContainerRewardsDesktop,
  ContainerRewardsMobile,
  TitleRewards,
  TitleRewardsDesktop,
  WrapperImagesRewards,
} from './CertificateRewards.styles';
import FadeIn from 'components/atoms/FadeIn';

export type CertificateRewardsType = {
  title: string;
  images: { image: WpImageType }[];
};

const CertificateRewards = ({ title, images }: CertificateRewardsType) => {
  const renderImages = images.map(({ image }) => <WpImage key={image.altText} {...image} />);

  return (
    <FadeIn>
      <Container>
        <TitleRewards>{title}</TitleRewards>
        <ContainerRewardsDesktop>
          <TitleRewardsDesktop>{title}</TitleRewardsDesktop>
          <WrapperImagesRewards>{renderImages}</WrapperImagesRewards>
        </ContainerRewardsDesktop>
      </Container>
      <ContainerRewardsMobile>
        <WrapperImagesRewards>{renderImages}</WrapperImagesRewards>
      </ContainerRewardsMobile>
    </FadeIn>
  );
};

export default CertificateRewards;
