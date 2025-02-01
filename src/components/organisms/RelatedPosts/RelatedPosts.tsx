import React from 'react';
import { PostItemType } from 'components/organisms/GuidePostsGrid';
import {
  TagStyleText,
  WrapperDataTag,
  WrapperItemPost,
  WrapperLinkTitleStyle,
} from 'components/organisms/GuidePostsGrid/GuidePostsGrid.styles';
import Image from 'components/atoms/Image';
import Text from 'components/atoms/Text';
import Title from 'components/atoms/Title';
import Link from 'components/atoms/Link';
import {
  ContainerRelatedPosts,
  WrapRelatedPosts,
} from 'components/organisms/RelatedPosts/RelatedPosts.styles';

export type RelatedPostType = {
  title: string;
  postItems: PostItemType[];
};
const RelatedPosts = ({ postItems, title }: RelatedPostType) => (
  <ContainerRelatedPosts>
    <Text text={title} />
    <WrapRelatedPosts>
      {postItems.slice(0, 2).map((postItem, index) => (
        <WrapperItemPost key={postItem.title + postItem.data} index={index}>
          <Image src={postItem.imgOfPost.src} alt={postItem.imgOfPost.alt} />
          <WrapperDataTag>
            <Text text={postItem.data} type="red-data" />
            <TagStyleText>{postItem.tagOfPost}</TagStyleText>
          </WrapperDataTag>
          <WrapperLinkTitleStyle>
            <Title type="realizations" title={postItem.title} />
            <Link to={postItem.linkTo} type="text-dark-link-arrow">
              więcej
            </Link>
          </WrapperLinkTitleStyle>
        </WrapperItemPost>
      ))}
    </WrapRelatedPosts>
  </ContainerRelatedPosts>
);
export default RelatedPosts;
