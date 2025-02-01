import React from 'react';

import { ContentThemeHeadingAndTitle } from 'components/organisms/PostContentRenderer';
import RichText from 'components/atoms/RichText';

import { StyledText, StyledWrapper } from './PostContentHeadingAndText.styles';
import { richTextToSlug } from 'utils/richTextToSlug';

const PostContentHeadingAndText = ({ content, heading }: ContentThemeHeadingAndTitle) => (
  <StyledWrapper id={richTextToSlug(heading)}>
    <StyledText>
      <RichText {...{ html: heading }} />
      <RichText {...{ html: content }} />
    </StyledText>
  </StyledWrapper>
);

export default PostContentHeadingAndText;
