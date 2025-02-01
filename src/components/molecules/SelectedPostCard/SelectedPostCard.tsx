import React from 'react';

import { WpImageType } from 'components/atoms/WpImage';
import ImageHover from 'components/atoms/ImageHover';
import { SelectedPostsType } from 'components/organisms/SelectedPosts';

import { truncateText } from 'utils/truncateText';

import {
  StyledArrowMore,
  StyledDate,
  StyledDetails,
  StyledImageHover,
  StyledRealizationStyle,
  StyledTag,
  StyledText,
  StyledTitle,
  StyledWpImage,
  StyledWrapper,
} from './SelectedPostCard.styles';
import { LinkWrapStyle } from 'components/atoms/LinkWrap/LinkWrap.styles';

export type SelectedPostType = {
  linkToPost: string;
  date: string;
  title: string;
  postTemplate?: {
    postTheme: { intro: { text: string }; realizationStyle: string }[] | null;
  };
  tags?: {
    nodes?: { name: string }[];
  };
  featuredImage?: {
    node: WpImageType;
  } | null;
  variant?: SelectedPostsType['variant'];
  index?: number;
};

const SelectedPostCard = ({
  variant,
  linkToPost,
  title,
  date,
  featuredImage,
  tags,
  postTemplate,
  index,
}: SelectedPostType) => {
  const intro = postTemplate?.postTheme?.[0]?.intro;

  const removeHtmlTagsRegex = /(<([^>]+)>)/gi;

  const heading = truncateText(title, 80);
  const text = truncateText(intro?.text?.replace(removeHtmlTagsRegex, ''), 140);

  return (
    <StyledWrapper data-variant={variant} data-index={index}>
      <LinkWrapStyle url={linkToPost}>
        {featuredImage ? (
          <StyledImageHover type="guide-post">
            <StyledWpImage {...featuredImage?.node} />
          </StyledImageHover>
        ) : null}
        {postTemplate?.postTheme?.[0]?.realizationStyle && variant === 'realizations' ? (
          <StyledRealizationStyle>
            {postTemplate.postTheme[0].realizationStyle}
          </StyledRealizationStyle>
        ) : null}
        <StyledTitle>{heading}</StyledTitle>
      </LinkWrapStyle>
      {variant === 'window-guide' || variant === 'inspirations' ? (
        <StyledDetails>
          <StyledDate>{date}</StyledDate>
          <StyledTag>{tags?.nodes?.[0]?.name}</StyledTag>
        </StyledDetails>
      ) : null}
      {text && variant === 'home-stories' ? <StyledText>{text}</StyledText> : null}

      {title ? <StyledArrowMore {...{ link: linkToPost }} /> : null}
    </StyledWrapper>
  );
};

export default SelectedPostCard;
