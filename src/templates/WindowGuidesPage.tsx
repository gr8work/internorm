import React from 'react';

import { PageContextType, SeoType } from 'types';
import { graphql, PageProps } from 'gatsby';

import Breadcrumb from 'components/atoms/Breadcrumb';
import Layout from './Layout';
import CenterTitleText, { CenterTextTitleProp } from 'components/molecules/CenterTitleText';
import GuidePostsGrid, { WindowGuidePostType } from 'components/organisms/GuidePostsGrid';
import { inspirations as inspirationsData } from 'data/inspiration/inspirations';

type DataProps = {
  windowGuidesPage: {
    seo: SeoType;
    windowGuides: {
      postsPerPage: number;
      windowGuidesText: CenterTextTitleProp;
    };
  };
  allWindowGuides: { windowGuides: WindowGuidePostType[] };
};

const WindowGuidesPage = ({
  pageContext,
  data: { windowGuidesPage, allWindowGuides },
}: PageProps<DataProps, PageContextType>) => {
  const { seo } = windowGuidesPage;
  const { postsPerPage, windowGuidesText } = windowGuidesPage.windowGuides;
  const { guidePosts } = inspirationsData;

  return (
    <Layout {...{ seo }}>
      <Breadcrumb {...{ pageContext }} />
      <CenterTitleText id="windows" {...windowGuidesText} {...{ type: 'lighter-small' }} />
      <GuidePostsGrid {...guidePosts} {...allWindowGuides} {...{ postsPerPage }} />
    </Layout>
  );
};
export const query = graphql`
  query WindowGuidesPage($id: String) {
    windowGuidesPage: wpPage(id: { eq: $id }) {
      seo {
        ...WpSEOFragment
      }
      windowGuides: poradnikOkienny {
        postsPerPage
        windowGuidesText {
          title
          descriptionText
        }
      }
    }
    allWindowGuides: allWpPost(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: "poradnik-okienny" } } } } }
      sort: { fields: date, order: DESC }
    ) {
      windowGuides: nodes {
        title
        linkToPost: uri
        featuredImage {
          node {
            ...WpImageFragment
          }
        }
        tags {
          nodes {
            name
            slug
          }
        }
        date(locale: "PL", formatString: "D MMMM YYYY")
      }
    }
  }
`;
export default WindowGuidesPage;
