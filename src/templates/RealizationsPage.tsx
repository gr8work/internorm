import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { PageContextType, SeoType } from 'types';
import Breadcrumb from 'components/atoms/Breadcrumb';
import Layout from 'templates/Layout';
import InspirationRealizationIntro, {
  RealizationIntroType,
} from 'components/organisms/InspirationRealizationIntro';
import SocialShare from 'components/organisms/SocialShare';
import Container from 'components/atoms/Container';
import NewsletterAndContact, {
  NewsletterAndContactType,
} from 'components/organisms/NewsletterAndContact';
import SelectedPosts, { SelectedPostsType } from 'components/organisms/SelectedPosts';
import PostContentRenderer, {
  ContentThemeProductsInRealization,
  ContentThemeType,
} from 'components/organisms/PostContentRenderer';
import PostContentProductsInRealization from 'components/organisms/PostContentProductsInRealization';

type DataProps = {
  realizationsPage: {
    seo: SeoType;
    title: string;
    postTemplate: {
      postTheme: {
        intro: RealizationIntroType;
        contentTheme: ContentThemeType[];
        productsInRealizations: ContentThemeProductsInRealization['productsInRealizations'];
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

const RealizationsPage = ({
  pageContext,
  data: { realizationsPage, repeatableComponentsData },
}: PageProps<DataProps, PageContextType>) => {
  const { title, seo } = realizationsPage;

  const { intro, contentTheme, productsInRealizations, selectedPosts } =
    realizationsPage.postTemplate.postTheme[0];

  const { newsletterAndContact } = repeatableComponentsData.repeatableComponents;

  return (
    <Layout {...{ seo }}>
      <Breadcrumb {...{ pageContext }} />
      <InspirationRealizationIntro {...intro} {...{ title: `<h1>${title}</h1>` }} />
      <PostContentRenderer {...{ contentTheme }} />
      <Container>
        <SocialShare />
      </Container>
      <PostContentProductsInRealization {...{ productsInRealizations }} />
      <SelectedPosts {...selectedPosts} {...{ variant: 'realizations' }} />
      <NewsletterAndContact {...newsletterAndContact} />
    </Layout>
  );
};

export const query = graphql`
  query RealizationsPage($id: String) {
    realizationsPage: wpPost(id: { eq: $id }) {
      seo {
        ...WpSEOFragment
      }
      title
      postTemplate {
        postTheme {
          ... on WpPost_Posttemplate_PostTheme_Realizations {
            intro {
              text
              imageSlider {
                image {
                  ...WpImageFragment
                }
              }
            }
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
            selectedPosts {
              heading
              posts {
                ... on WpPost {
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
                        realizationStyle
                      }
                    }
                  }
                }
              }
            }
            contentTheme {
              ... on WpPost_Posttemplate_PostTheme_Realizations_ContentTheme_Realization {
                fieldGroupName
                description
                style
                projectName
                productUsedTitle
                productUsed {
                  text
                }
                image {
                  ...WpImageFragment
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

export default RealizationsPage;
