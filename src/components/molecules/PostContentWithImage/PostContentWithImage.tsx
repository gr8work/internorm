import React from 'react';

import {
  ContentThemeTwoColsContentImage,
  ContentThemeTwoColsImageContent,
} from 'components/organisms/PostContentRenderer';
import RichText from 'components/atoms/RichText';

import { StyledText, StyledWpImage, StyledWrapper } from './PostContentWithImage.styles';

const PostContentWithImage = ({
  fieldGroupName,
  content,
  heading,
  image,
}: ContentThemeTwoColsContentImage | ContentThemeTwoColsImageContent) => (
  <StyledWrapper
    isReversed={
      fieldGroupName === 'Post_Posttemplate_PostTheme_HomeStories_ContentTheme_TwoColsImageContent'
    }
  >
    <StyledText>
      <RichText {...{ html: heading }} />
      <RichText {...{ html: content }} />
    </StyledText>
    <StyledWpImage {...image} />
  </StyledWrapper>
);

export default PostContentWithImage;
