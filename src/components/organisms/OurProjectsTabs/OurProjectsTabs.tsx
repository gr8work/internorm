import React, { useState } from 'react';
import Container from 'components/atoms/Container';
import { Tabs } from 'react-tabs';
import { StyledTab, TabListStyle, TabPanelStyle, WrapperItemsTab } from './OurProjectsTabs.styles';

import ProjectItem, { ProjecItemType } from 'components/molecules/ProjectItem';
import Pagination from 'components/molecules/Pagination';
import { scroller } from 'react-scroll';

export type AllRealizationsType = {
  realizations: ProjecItemType[];
  realizationsPerPage: number;
};

const ALL = 'WSZYSTKO';

export type OuProjectTabsType = 'new-houses' | 'renovation' | 'investments';
const OurProjectsTabs = ({ realizations, realizationsPerPage = 6 }: AllRealizationsType) => {
  const [currentPage, setCurrentPage] = useState(1);

  const scrollHandler = () => {
    scroller.scrollTo('our-realizations', {
      duration: 500,
      smooth: true,
      offset: -100,
    });
  };

  const tagsForFilter = [
    ...new Set(
      realizations?.map((realization) => realization?.tags.nodes?.map(({ slug }) => slug))?.flat()
    ),
  ];

  const tagsToDisplay = [
    ...new Set(
      realizations
        ?.map((realization) =>
          realization?.tags.nodes?.map(({ name }) => name.trim().toLocaleUpperCase())
        )
        ?.flat()
    ),
  ];

  const projectsFilterByTags = tagsForFilter.map((tag) =>
    realizations.filter((realization) => realization.tags.nodes[0].slug === tag)
  );

  const renderRealizations = (realizationsArr: ProjecItemType[]) => (
    <>
      <WrapperItemsTab>
        {currentPage === 1
          ? realizationsArr
              .slice(0, realizationsPerPage)
              .map((project) => <ProjectItem key={project.title} {...project} />)
          : realizationsArr
              .slice(realizationsPerPage * (currentPage - 1), realizationsPerPage * currentPage)
              .map((project) => <ProjectItem key={project.title} {...project} />)}
      </WrapperItemsTab>
      <Pagination
        {...{
          total: realizationsArr.length,
          itemsPerPage: realizationsPerPage,
          currentPage,
          setCurrentPage,
          scrollHandler,
        }}
      />
    </>
  );

  return (
    <Tabs>
      <Container id="our-realizations">
        <TabListStyle>
          <StyledTab>{ALL}</StyledTab>
          {tagsToDisplay?.map((tag) => (
            <StyledTab key={tag}>{tag}</StyledTab>
          ))}
        </TabListStyle>
      </Container>

      <TabPanelStyle>
        <Container>{renderRealizations(realizations)}</Container>
      </TabPanelStyle>

      {projectsFilterByTags.map((projectGroup, index) => (
        <TabPanelStyle key={index}>
          <Container>{renderRealizations(projectGroup)}</Container>
        </TabPanelStyle>
      ))}
    </Tabs>
  );
};

export default OurProjectsTabs;
