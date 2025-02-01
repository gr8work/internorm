import React from 'react';
import { graphql, PageProps } from 'gatsby';

import Layout from 'templates/Layout';
import Breadcrumb from 'components/atoms/Breadcrumb';

import { PageContextType, SeoType } from 'types';
import PostContentRenderer, { ContentThemeType } from 'components/organisms/PostContentRenderer';
import HomeStoriesIntro, { HomeStoriesIntroType } from 'components/organisms/HomeStoriesIntro';
import Container from 'components/atoms/Container';
import SocialShare from 'components/organisms/SocialShare';
import SelectedPosts, { SelectedPostsType } from 'components/organisms/SelectedPosts';
import NewsletterAndContact, {
  NewsletterAndContactType,
} from 'components/organisms/NewsletterAndContact';

type DataProps = {
  homeStoriesPage: {
    seo: SeoType;
    title: string;
    postTemplate: {
      postTheme: {
        intro: HomeStoriesIntroType;
        contentTheme: ContentThemeType[];
        selectedPosts: SelectedPostsType;
      }[];
    };
  };
  repeatableComponentsData: {
    repeatableComponents: {
      newsletterAndContact: NewsletterAndContactType;
    };
  };
};

const HomeStoriesPage = ({
  pageContext,
  data: { homeStoriesPage, repeatableComponentsData },
}: PageProps<DataProps, PageContextType>) => {
  const { intro, selectedPosts, contentTheme } = homeStoriesPage.postTemplate.postTheme[0];

  const { title, seo } = homeStoriesPage;

  const { newsletterAndContact } = repeatableComponentsData.repeatableComponents;

  return (
    <Layout {...{ seo }}>
      <Breadcrumb {...{ pageContext }} />
      <HomeStoriesIntro {...intro} {...{ title: `<h1>${title}</h1>` }} />
      <PostContentRenderer {...{ contentTheme }} />
      <Container>
        <SocialShare />
      </Container>
      <SelectedPosts {...selectedPosts} />
      <NewsletterAndContact {...newsletterAndContact} />
    </Layout>
  );
};

export const query = graphql`
  query HomeStoriesPage($id: String) {
    homeStoriesPage: wpPost(id: { eq: $id }) {
      seo {
        ...WpSEOFragment
      }
      title
      postTemplate {
        postTheme {
          ... on WpPost_Posttemplate_PostTheme_HomeStories {
            intro {
              title
              text
              videoId
            }
            selectedPosts {
              heading
              posts {
                ... on WpPost {
                  id
                  title
                  linkToPost: uri
                  featuredImage {
                    node {
                      ...WpImageFragment
                    }
                  }
                  date(formatString: "D MMMM YYYY", locale: "PL")
                  tags {
                    nodes {
                      name
                    }
                  }
                  postTemplate {
                    postTheme {
                      ... on WpPost_Posttemplate_PostTheme_HomeStories {
                        intro {
                          text
                        }
                      }
                      ... on WpPost_Posttemplate_PostTheme_WindowTutorial {
                        intro {
                          text
                        }
                      }
                      ... on WpPost_Posttemplate_PostTheme_Realizations {
                        intro {
                          text
                        }
                      }
                    }
                  }
                }
              }
            }
            contentTheme {
              ... on WpPost_Posttemplate_PostTheme_HomeStories_ContentTheme_TwoColsContentImage {
                content
                heading
                image {
                  ...WpImageFragment
                }
                fieldGroupName
              }
              ... on WpPost_Posttemplate_PostTheme_HomeStories_ContentTheme_TwoColsImageContent {
                content
                fieldGroupName
                heading
                image {
                  ...WpImageFragment
                }
              }
              ... on WpPost_Posttemplate_PostTheme_HomeStories_ContentTheme_Image {
                fieldGroupName
                image {
                  ...WpImageFragment
                }
              }
              ... on WpPost_Posttemplate_PostTheme_HomeStories_ContentTheme_ProductsInRealization {
                fieldGroupName
                productsInRealizations {
                  heading
                  contactUsBox {
                    title
                    text
                    subTitle
                    button {
                      label
                      ariaLabel
                      link {
                        url
                        target
                      }
                    }
                  }
                  products {
                    title
                    text
                    subTitle
                    link {
                      target
                      url
                    }
                    image {
                      ...WpImageFragment
                    }
                  }
                }
              }
              ... on WpPost_Posttemplate_PostTheme_HomeStories_ContentTheme_SliderRecommendedProducts {
                fieldGroupName
                sliderRecommendedProducts {
                  heading
                  products {
                    title
                    text
                    subTitle
                    link {
                      url
                      target
                    }
                    image {
                      ...WpImageFragment
                    }
                  }
                }
              }
              ... on WpPost_Posttemplate_PostTheme_HomeStories_ContentTheme_ImageSlider {
                fieldGroupName
                imageSlider {
                  image {
                    ...WpImageFragment
                  }
                }
              }
            }
          }
        }
      }
    }
    repeatableComponentsData: wpPage(template: { templateName: { eq: "RepeatableComponents" } }) {
      repeatableComponents {
        newsletterAndContact {
          contactUsBox {
            title
            text
            subTitle
            button {
              label
              ariaLabel
              link {
                url
                target
              }
            }
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
    }
  }
`;

export default HomeStoriesPage;
