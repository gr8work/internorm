import React from 'react';
import PostContentRenderer, { ContentThemeType } from 'components/organisms/PostContentRenderer';
import {
  ContainerArticle,
  WrapperArticleContent,
  WrapperContentArticle,
} from './ContentArticleWindowGuide.styles';

type ContentArticleWindowGuide = {
  contentTheme: ContentThemeType[];
};

const ContentArticleWindowGuide = ({ contentTheme }: ContentArticleWindowGuide) => (
  <ContainerArticle>
    <WrapperContentArticle>
      <WrapperArticleContent>
        <PostContentRenderer {...{ contentTheme }} />
      </WrapperArticleContent>
    </WrapperContentArticle>
  </ContainerArticle>
);

export default ContentArticleWindowGuide;
