import React from 'react';

import { WpImageType } from 'components/atoms/WpImage';
import PostImage from 'components/molecules/PostImage';
import PostContentWithImage from 'components/molecules/PostContentWithImage';
import PostContentProductsInRealization from 'components/organisms/PostContentProductsInRealization';
import { ContactAsType } from 'components/molecules/ContactAs';
import PostContentImageSlider from 'components/molecules/PostContentImageSlider';
import { ProductCardType } from 'components/molecules/ProductCard';
import PostContentProductSlider from 'components/organisms/PostContentProductSlider';
import LeftImageDescriptionRealization from 'components/organisms/LeftImageDescriptionRealization';
import PostContentRecommendedProducts from 'components/organisms/PostContentRecommendedProducts';
import PostContentHeadingAndText from 'components/molecules/PostContentHeadingAndText';

type ComponentsMapType = Record<
  ContentThemeType['fieldGroupName'],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (props: any) => JSX.Element
>;

export type ContentThemeType =
  | ContentThemeTwoColsContentImage
  | ContentThemeTwoColsImageContent
  | ContentThemeImage
  | ContentThemeProductsInRealization
  | ContentThemeImageSlider
  | ContentThemeSliderRecommendedProducts
  | ContentThemeRealization
  | ContentThemeRecommendedProducts
  | ContentThemeHeadingAndTitle;

export type ContentThemeTwoColsContentImage = {
  fieldGroupName: 'Post_Posttemplate_PostTheme_HomeStories_ContentTheme_TwoColsContentImage';
  heading: string;
  content: string;
  image: WpImageType;
};

export type ContentThemeTwoColsImageContent = {
  fieldGroupName: 'Post_Posttemplate_PostTheme_HomeStories_ContentTheme_TwoColsImageContent';
  heading: string;
  content: string;
  image: WpImageType;
};

export type ContentThemeImage = {
  fieldGroupName:
    | 'Post_Posttemplate_PostTheme_HomeStories_ContentTheme_Image'
    | 'Post_Posttemplate_PostTheme_WindowTutorial_ContentTheme_Image';
  image: WpImageType;
};

export type ContentThemeProductsInRealization = {
  fieldGroupName: 'Post_Posttemplate_PostTheme_HomeStories_ContentTheme_ProductsInRealization';
  productsInRealizations: {
    heading: string;
    contactUsBox: ContactAsType;
    products: ProductCardType[];
  };
};

export type ContentThemeImageSlider = {
  fieldGroupName: 'Post_Posttemplate_PostTheme_HomeStories_ContentTheme_ImageSlider';
  imageSlider: {
    image: WpImageType;
  }[];
};

export type ContentThemeSliderRecommendedProducts = {
  fieldGroupName: 'Post_Posttemplate_PostTheme_HomeStories_ContentTheme_SliderRecommendedProducts';
  sliderRecommendedProducts: {
    heading: string;
    products: ProductCardType[];
  };
};

export type ContentThemeRealization = {
  fieldGroupName: 'Post_Posttemplate_PostTheme_Realizations_ContentTheme_Realization';
  projectName: string;
  style: string;
  description: string;
};

export type ContentThemeHeadingAndTitle = {
  fieldGroupName: 'Post_Posttemplate_PostTheme_WindowTutorial_ContentTheme_HeadingAndTitle';
  heading: string;
  content: string;
};

export type ContentThemeRecommendedProducts = {
  fieldGroupName: 'Post_Posttemplate_PostTheme_WindowTutorial_ContentTheme_RecommendedProducts';
  recommendedProducts: {
    heading: string;
    products: ProductCardType[];
  };
};

const ComponentsMap: ComponentsMapType = {
  Post_Posttemplate_PostTheme_HomeStories_ContentTheme_Image: PostImage,
  Post_Posttemplate_PostTheme_HomeStories_ContentTheme_TwoColsContentImage: PostContentWithImage,
  Post_Posttemplate_PostTheme_HomeStories_ContentTheme_TwoColsImageContent: PostContentWithImage,
  Post_Posttemplate_PostTheme_HomeStories_ContentTheme_ProductsInRealization:
    PostContentProductsInRealization,
  Post_Posttemplate_PostTheme_HomeStories_ContentTheme_ImageSlider: PostContentImageSlider,
  Post_Posttemplate_PostTheme_HomeStories_ContentTheme_SliderRecommendedProducts:
    PostContentProductSlider,
  Post_Posttemplate_PostTheme_Realizations_ContentTheme_Realization:
    LeftImageDescriptionRealization,
  Post_Posttemplate_PostTheme_WindowTutorial_ContentTheme_Image: PostImage,
  Post_Posttemplate_PostTheme_WindowTutorial_ContentTheme_RecommendedProducts:
    PostContentRecommendedProducts,
  Post_Posttemplate_PostTheme_WindowTutorial_ContentTheme_HeadingAndTitle:
    PostContentHeadingAndText,
};

const PostContentRenderer = ({ contentTheme }: { contentTheme: ContentThemeType[] }) => (
  // eslint-disable-next-line react/jsx-no-useless-fragment
  <>
    {contentTheme?.map((block, index) => {
      if (typeof ComponentsMap[block.fieldGroupName] === 'undefined') {
        return null;
      }

      const Component = ComponentsMap[block.fieldGroupName];

      return <Component key={block.fieldGroupName + index} {...block} />;
    })}
  </>
);

export default PostContentRenderer;
