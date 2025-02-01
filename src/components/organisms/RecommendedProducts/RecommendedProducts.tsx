import React from 'react';
import {
  ContainerRecommendedProducts,
  RecommendedProductsBackground,
  WrapperProductItem,
  WrapperProducts,
} from './RecommendedProducts.styles';
import Image from 'components/atoms/Image';
import Link from 'components/atoms/Link';
import Text from 'components/atoms/Text';
import Title from 'components/atoms/Title';

export type RecommendedProductsType = {
  title: string;
  products: {
    name: string;
    category: string;
    description: string;
    linkTo: string;
    image: {
      src: string;
      alt: string;
    };
  }[];
};
const RecommendedProducts = ({ products, title }: RecommendedProductsType) => (
  <RecommendedProductsBackground>
    <ContainerRecommendedProducts>
      <Text text={title} />
      <WrapperProducts>
        {products.slice(0, 3).map((product, index) => (
          <WrapperProductItem key={index}>
            <Image src={product.image.src} alt={product.image.alt} />
            <Title title={product.name} />
            <Title subTitle={product.category} />
            <Text text={product.description} />
            <Link to={product.linkTo} type="text-dark-link-arrow">
              WIĘCEJ
            </Link>
          </WrapperProductItem>
        ))}
      </WrapperProducts>
    </ContainerRecommendedProducts>
  </RecommendedProductsBackground>
);

export default RecommendedProducts;
