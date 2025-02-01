import React from 'react';
import WpImage, { WpImageType } from 'components/atoms/WpImage';
import Container from 'components/atoms/Container';
import {
  ProductUsedStyle,
  TextStyle,
  WrapLeftImgDescription,
  WrapperDescription,
  WrapperImage,
} from './LeftImageDescriptionRealization.styles';

export type RealizationLeftBannerType = {
  style: string;
  projectName: string;
  productUsedTitle: string;
  productUsed: { text: string }[];
  description: string;
  image?: WpImageType;
};
const LeftImageDescriptionRealization = ({
  description,
  image,
  projectName,
  productUsedTitle,
  productUsed,
  style,
}: RealizationLeftBannerType) => (
  <Container>
    <WrapLeftImgDescription>
      <WrapperImage>{image ? <WpImage {...image} /> : null}</WrapperImage>
      <WrapperDescription>
        <TextStyle text={style} />
        <TextStyle text={projectName} />
        <ProductUsedStyle>
          <TextStyle {...{ text: productUsedTitle }} />
          <div>
            {productUsed.map(({ text }) => (
              <TextStyle key={text} {...{ text }} />
            ))}
          </div>
        </ProductUsedStyle>
        <TextStyle text={description} />
      </WrapperDescription>
    </WrapLeftImgDescription>
  </Container>
);
export default LeftImageDescriptionRealization;
