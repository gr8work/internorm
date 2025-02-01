import React from 'react';
import { IImage } from 'components/atoms/Image/interface';
import WpImage, { WpImageType } from 'components/atoms/WpImage';
import Text from 'components/atoms/Text';
import Image from 'components/atoms/Image';
import {
  CartRealization,
  ContainerRealization,
  TitleStyle,
  WrapRealizations,
} from './OtherRealization.styles';
import Link from 'components/atoms/Link';

export type OtherRealizationType = {
  realizations: {
    image?: IImage;
    wpImage?: WpImageType;
    title: string;
    subTitle: string;
    linkTo: string;
  }[];
};
const OtherRealization = ({ realizations }: OtherRealizationType) => (
  <ContainerRealization>
    <Text text="INNE REALIZACJE" />
    <WrapRealizations>
      {realizations.map((realization) => (
        <CartRealization key={realization.title}>
          {realization.image ? (
            <Image src={realization.image.src} alt={realization.image.alt} />
          ) : null}

          {realization.wpImage ? (
            <WpImage
              localFile={realization.wpImage.localFile}
              altText={realization.wpImage.altText}
            />
          ) : null}
          <TitleStyle title={realization.title} subTitle={realization.subTitle} />
          <Link to={realization.linkTo} type="text-dark-link-arrow">
            {' '}
            WIĘCEJ
          </Link>
        </CartRealization>
      ))}
    </WrapRealizations>
  </ContainerRealization>
);
export default OtherRealization;
