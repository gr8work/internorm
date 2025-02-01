import React from 'react';
import { PageContextType, SeoType } from 'types';
import Breadcrumb from 'components/atoms/Breadcrumb';
import Layout from 'templates/Layout';
import { inspirations as inspirationsData } from 'data/inspiration/inspirations';
import ProductCategoryIntro, {
  ProductCategoryType,
} from 'components/organisms/ProductCategoryIntro';
import HomeStoriesSection, {
  HomeStoriesSectionType,
} from 'components/organisms/HomeStoriesSection';
import CenterTitleText, { CenterTextTitleProp } from 'components/molecules/CenterTitleText';
import GuidePostsGrid, { WindowGuidePostType } from 'components/organisms/GuidePostsGrid';
import OurProjectsTabs, { AllRealizationsType } from 'components/organisms/OurProjectsTabs';
import ContactUsBannerInspiration from 'components/organisms/ContactUsBannerInspiration/ContactUsBannerInspiration';
import StepDreamInspiration from 'components/organisms/StepDreamInspiration';
import { graphql, PageProps } from 'gatsby';
import { ContactUsBannerType } from 'components/organisms/ContactUsBanner';
import { SmallNewsletter } from 'components/molecules/SmallNewsletter';
import { useBreakpoints } from 'hooks/useBreakpoints';

type DataProps = {
  inspirationsPage: {
    seo: SeoType;
    inspirations: {
      introSection: ProductCategoryType;
      contactUsBanner: ContactUsBannerType;
      windowGuideText: CenterTextTitleProp;
      realizationsText: CenterTextTitleProp;
      realizationsPerPage: number;
      postsPerPage: number;
    };
  };
  allRealizations: AllRealizationsType;
  allWindowGuides: { windowGuides: WindowGuidePostType[] };
  allHomeStories: HomeStoriesSectionType;
};

const InspirationsPage = ({
  pageContext,
  data: { inspirationsPage, allRealizations, allWindowGuides, allHomeStories },
}: PageProps<DataProps, PageContextType>) => {
  const { guidePosts } = inspirationsData;
  const { isSmall, isMedium, isLarge, isXSmall } = useBreakpoints();
  const {
    introSection,
    contactUsBanner,
    windowGuideText,
    realizationsText,
    realizationsPerPage,
    postsPerPage,
  } = inspirationsPage.inspirations;

  return (
    <Layout>
      <Breadcrumb {...{ pageContext }} />
      <ProductCategoryIntro {...introSection} isHomeStories />
      <HomeStoriesSection {...allHomeStories} />
      <CenterTitleText id="realizations" {...realizationsText} {...{ type: 'lighter-small' }} />
      <OurProjectsTabs {...allRealizations} {...{ realizationsPerPage }} />
      <ContactUsBannerInspiration {...contactUsBanner} />
      <StepDreamInspiration />
      {isSmall || isMedium || isXSmall || isLarge ? <SmallNewsletter {...guidePosts} /> : null}
      <CenterTitleText id="windows" {...windowGuideText} {...{ type: 'lighter-small' }} />
      <GuidePostsGrid {...guidePosts} {...allWindowGuides} {...{ postsPerPage }} />
    </Layout>
  );
};

export const query = graphql`
  query InspirationsPage($id: String) {
    inspirationsPage: wpPage(id: { eq: $id }) {
      seo {
        ...WpSEOFragment
      }
      inspirations {
        realizationsPerPage
        postsPerPage
        introSection {
          title
          text
        }
        contactUsBanner {
          subTitle
          title
          text
          image {
            ...WpImageFragment
          }
          button {
            label
            ariaLabel
            link {
              url
              target
            }
          }
        }
        windowGuideText {
          title
          descriptionText
        }
        realizationsText {
          title
          descriptionText
        }
        newsletterArticle {
          title
          text
          subTitle
          image {
            ...WpImageFragment
          }
        }
      }
    }
    allHomeStories: allWpPost(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: "home-stories" } } } } }
      sort: { fields: date, order: DESC }
    ) {
      homeStories: nodes {
        categories {
          nodes {
            name
          }
        }
        title
        featuredImage {
          node {
            ...WpImageFragment
          }
        }
        linktToPost: uri
        postTemplate {
          postTheme {
            ... on WpPost_Posttemplate_PostTheme_HomeStories {
              intro {
                text
              }
            }
          }
        }
      }
    }
    allRealizations: allWpPost(
      filter: { categories: { nodes: { elemMatch: { slug: { eq: "realizacje" } } } } }
      sort: { fields: date, order: DESC }
    ) {
      realizations: nodes {
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
        postTemplate {
          postTheme {
            ... on WpPost_Posttemplate_PostTheme_Realizations {
              realizationStyle
              realizationYear
            }
          }
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

export default InspirationsPage;
