import React from 'react';

import Title from 'components/atoms/Title';
import Text from 'components/atoms/Text';
import {
  ItemProjectStyle,
  ProjectDescriptionLink,
  StyledWpImage,
  WrapperText,
} from './ProjectItem.styles';
import { WpImageType } from 'components/atoms/WpImage';
import ImageHover from 'components/atoms/ImageHover';
import ArrowMore from 'components/atoms/ArrowMore';
import { LinkWrapStyle } from 'components/atoms/LinkWrap/LinkWrap.styles';

export type ProjecItemType = {
  title: string;
  linkToPost: string;
  featuredImage: {
    node: WpImageType;
  } | null;
  tags: {
    nodes: {
      name: string;
      slug: string;
    }[];
  };
  postTemplate: {
    postTheme: {
      realizationStyle: string;
      realizationYear: number;
    }[];
  };
};
const ProjectItem = ({ title, featuredImage, postTemplate, linkToPost }: ProjecItemType) => {
  const { realizationStyle, realizationYear } = postTemplate.postTheme[0];

  return (
    <ItemProjectStyle key={title}>
      <LinkWrapStyle url={linkToPost} target={linkToPost}>
        {featuredImage ? <ImageHover type="realizations"><StyledWpImage {...featuredImage?.node} /></ImageHover> : null}
      </LinkWrapStyle>
      <ProjectDescriptionLink>
        <LinkWrapStyle url={linkToPost}>
        <WrapperText>
          <Title title={`<h3>${title}</h3>`} subTitle={realizationStyle} type="project-item" />
          <Text text={String(realizationYear)} type="gray-data" />
        </WrapperText>
        </LinkWrapStyle>
        <ArrowMore {...{ link: linkToPost }} />
      </ProjectDescriptionLink>
    </ItemProjectStyle>
  );
};

export default ProjectItem;
