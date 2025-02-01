import React, { useState } from 'react';
import Text from 'components/atoms/Text';
import Filter from 'components/atoms/Filter';
import {
  WrapContainerPostGrid,
  WrapperItemPost,
  WrapperTagsFilter,
  StyledPagination,
} from './GuidePostsGrid.styles';

import { ProjecItemType } from 'components/molecules/ProjectItem';
import { WpImageType } from 'components/atoms/WpImage';
import SelectedPostCard from 'components/molecules/SelectedPostCard';
import { useBreakpoints } from 'hooks/useBreakpoints';
import { SmallNewsletter } from '../../molecules/SmallNewsletter';
import { scroller } from 'react-scroll';

export type GuidePostsType = {
  titleNewsletter: string;
  subTitleNewsletter: string;
  descriptionNewsletter: string;
  agreementFirst: string;
  agreementSecond: string;
  windowGuides: WindowGuidePostType[];
  postsPerPage?: number;
};

export type WindowGuidePostType = {
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
  date: string;
};

export type AllWindowGuidesType = {
  windowGuides: ProjecItemType[];
};

const GuidePostsGrid = ({
  agreementFirst,
  agreementSecond,
  subTitleNewsletter,
  descriptionNewsletter,
  titleNewsletter,
  windowGuides,
  postsPerPage = 4,
}: GuidePostsType) => {
  const [activeFilter, setActiveFilter] = useState<string | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const { isXLarge, isXXLarge } = useBreakpoints();
  const { width } = useBreakpoints();

  const postsPerPageWithMobile = width >= 1240 ? postsPerPage : 3;
  const pageLayout = postsPerPage > 4 ? 'large' : '';

  const scrollHandler = () => {
    scroller.scrollTo('our-guides', {
      duration: 500,
      smooth: true,
      offset: -100,
    });
  };

  const tags = [
    ...new Set(
      windowGuides
        ?.map((guide) => guide?.tags.nodes?.map(({ name }) => name.trim().toLocaleLowerCase()))
        ?.flat()
    ),
  ];

  const filteredGuides = windowGuides
    ?.filter((guide) => guide.tags.nodes[0])
    .filter((guide) => guide.tags.nodes[0].name.toLocaleLowerCase() === activeFilter);

  const guides = filteredGuides?.length > 0 ? filteredGuides : windowGuides;

  return (
    <>
      <WrapperTagsFilter id="our-guides">
        <Text text="WYSZUKAJ WPIS WEDŁUG TEMATU:" type="red-data" />
        {tags.map((filter, index) => (
          <Filter
            key={index}
            title={filter}
            isActive={filter === activeFilter}
            onClick={(e: React.MouseEvent) => {
              const el = e.target as HTMLElement;
              if (el.textContent?.toLowerCase() !== activeFilter) {
                setActiveFilter(filter);
              } else {
                setActiveFilter(undefined);
              }
            }}
          />
        ))}
      </WrapperTagsFilter>
      <WrapContainerPostGrid className={`${pageLayout}`}>
        {currentPage === 1
          ? guides.slice(0, postsPerPageWithMobile).map((guide, index) => (
              <WrapperItemPost key={index} index={index}>
                <SelectedPostCard {...guide} {...{ variant: 'inspirations', index }} />
              </WrapperItemPost>
            ))
          : guides
              .slice(
                postsPerPageWithMobile * (currentPage - 1),
                postsPerPageWithMobile * currentPage
              )
              .map((guide, index) => (
                <WrapperItemPost key={index} index={index}>
                  <SelectedPostCard {...guide} {...{ variant: 'inspirations', index }} />
                </WrapperItemPost>
              ))}

        <StyledPagination
          {...{
            total: guides.length,
            itemsPerPage: postsPerPageWithMobile,
            currentPage,
            setCurrentPage,
            scrollHandler,
            urlPagination: true,
          }}
        />
        {isXLarge || isXXLarge ? (
          <SmallNewsletter
            {...{
              titleNewsletter,
              subTitleNewsletter,
              descriptionNewsletter,
              agreementFirst,
              agreementSecond,
            }}
          />
        ) : null}
      </WrapContainerPostGrid>
    </>
  );
};
export default GuidePostsGrid;
