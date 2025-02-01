import React from 'react';

import Title from 'components/atoms/Title';
import ProductLineView, {
  ProductLineVariantType,
  ProductLineViewType,
} from 'components/organisms/ProductLineView';
import Button, { ButtonType } from 'components/atoms/Button';
import { ViewVariantType } from 'components/organisms/SwitchCategoryViewMode';

import {
  StyledCategoriesList,
  StyledCategory,
  StyledContent,
  StyledFiltersText,
  StyledTagSection,
  StyledText,
  StyledWrapper,
} from './ProductLines.styles';
import { CustomThemeColorType } from 'theme/styled';

import { handleScrollToSection } from 'utils/handleScrollToSection';
import FadeIn from 'components/atoms/FadeIn';

export type ProductLinesType = {
  products: ProductLineViewType[];
  variant?: ProductLineVariantType;
  heading?: string;
  text?: string;
  button?: ButtonType;
  filtersText?: string;
  sectionColor?: CustomThemeColorType;
  viewVariant?: ViewVariantType;
};

const ProductLines = ({
  variant = 'passive-windows',
  heading,
  text,
  filtersText,
  products = [],
  button,
  viewVariant,
  sectionColor = 'heavenlyWhite',
}: ProductLinesType) => {
  const productCategories = products.map(({ category }) => category);

  return (
    <StyledWrapper aria-labelledby="section-title" {...{ sectionColor }}>
      <StyledContent>
        <FadeIn>
          {heading ? <Title id="section-title" title={heading} type="section" /> : null}
        </FadeIn>
        <FadeIn>{text ? <StyledText text={text} /> : null}</FadeIn>
        {variant === 'passive-windows' ? (
          <StyledTagSection>
            <StyledFiltersText>{filtersText}</StyledFiltersText>

            <StyledCategoriesList role="list">
              {productCategories.map((category) => {
                if (!category) return null;

                return (
                  <li key={category.tag}>
                    <StyledCategory onClick={handleScrollToSection} url={`#${category.tag}`}>
                      {category.name}
                    </StyledCategory>
                  </li>
                );
              })}
            </StyledCategoriesList>
          </StyledTagSection>
        ) : null}
        {products.map((product) => (
          <FadeIn key={product.heading}>
            <ProductLineView {...{ variant, viewVariant }} {...product} />
          </FadeIn>
        ))}
        {button ? (
          <FadeIn>
            <Button text={button.label} link={button.link} type="red" />
          </FadeIn>
        ) : null}
      </StyledContent>
    </StyledWrapper>
  );
};

export default ProductLines;
