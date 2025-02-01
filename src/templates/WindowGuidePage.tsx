import React from 'react';

import { PageContextType, SeoType } from 'types';
import Breadcrumb from 'components/atoms/Breadcrumb';
import Layout from 'templates/Layout';
import InspirationWindowGuideInfo, {
  WindowGuideInfoType,
} from 'components/organisms/InspirationWindowGuideIntro';
import ContentArticleWindowGuide from 'components/organisms/ContenArticleWindowGuide';
import SocialShare from 'components/organisms/SocialShare';
import { ContainerSocialShareWindowGuide } from 'components/organisms/SocialShare/SocialShare.styles';
import { graphql, PageProps } from 'gatsby';
import { ContentThemeType } from 'components/organisms/PostContentRenderer';
import SelectedPosts, { SelectedPostsType } from 'components/organisms/SelectedPosts';
import ContactAs, { ContactAsType } from 'components/molecules/ContactAs';
import PostAuthor, { PostAuthorType } from 'components/molecules/PostAuthor';
import styled from 'styled-components';
import NewsletterArticle, { NewsletterArticleType } from 'components/organisms/NewsletterArticle';
import { media } from 'theme/media';

type DataProps = {
  windowGuidePage: {
    seo: SeoType;
    title: string;
    date: string;
    author: {
      node: {
        lastName: string;
        firstName: string;
      };
    };
    postTemplate: {
      postTheme: {
        intro: WindowGuideInfoType;
        contentTheme: ContentThemeType[];
        contactUsBox: ContactAsType;
        selectedPosts: SelectedPostsType;
      }[];
    };
  };
  repeatableComponentsData: {
    repeatableComponents: {
      newsletterAndContact: {
        contactUsBox: ContactAsType;
        newsletterArticle: NewsletterArticleType;
      };
      authors: {
        author: PostAuthorType;
      }[];
    };
  };
};

export const removeHtmlTagsRegex = /(<([^>]+)>)/gi;

const StyledTwoSectionWrapper = styled.div`
  display: grid;
  margin: 0 auto 140px;
  position: relative;

  ${media.up('lg')} {
    grid-template-columns: 435px auto;
    max-width: 1717px;
  }
`;

const StyledContactAs = styled(ContactAs)`
  margin-block: 40px;

  ${media.up('lg')} {
    margin-block: unset;
    margin-top: 389px;
    height: 426px;
    position: sticky;
    top: 30%;
  }
`;

const StyledContentWrapper = styled.div`
  ${media.up('lg')} {
    margin-inline: 148px;
  }
`;

const StyledPostAuthor = styled(PostAuthor)`
  padding-inline: 30px;

  ${media.up('lg')} {
    position: absolute;
    top: 0;
    left: 290px;
    padding: 0;
  }
`;

const WindowGuide = ({
  pageContext,
  data: { windowGuidePage, repeatableComponentsData },
}: PageProps<DataProps, PageContextType>) => {
  const {
    title,
    seo,
    date,
    author: {
      node: { firstName, lastName },
    },
  } = windowGuidePage;

  const { newsletterAndContact, authors } = repeatableComponentsData.repeatableComponents;

  const headings = windowGuidePage?.postTemplate?.postTheme?.[0]?.contentTheme
    ?.map(
      (item) =>
        item.fieldGroupName ===
          'Post_Posttemplate_PostTheme_WindowTutorial_ContentTheme_HeadingAndTitle' && item.heading
    )
    ?.filter((item) => item !== false);

  const headingTags = headings?.map((item) =>
    String(item).replaceAll(removeHtmlTagsRegex, '').replaceAll('&#8211;', '-').replaceAll('\n', '')
  );

  const foundAuthor = authors?.find(
    ({ author: authorNode }) =>
      authorNode.firstName.trim().toLocaleLowerCase() === firstName.trim().toLocaleLowerCase() &&
      authorNode.lastName.trim().toLocaleLowerCase() === lastName.trim().toLocaleLowerCase()
  )?.author;

  return (
    <Layout {...{ seo }}>
      <Breadcrumb {...{ pageContext }} />
      <InspirationWindowGuideInfo
        {...windowGuidePage?.postTemplate?.postTheme?.[0]?.intro}
        {...{ title: `<h1>${title}</h1>`, date, headingTags }}
      />
      <StyledTwoSectionWrapper>
        {foundAuthor ? <StyledPostAuthor {...foundAuthor} /> : null}
        <StyledContactAs {...newsletterAndContact.contactUsBox} />
        <div>
          <StyledContentWrapper>
            <ContentArticleWindowGuide
              {...{
                author: foundAuthor,
                contentTheme: windowGuidePage?.postTemplate?.postTheme?.[0]?.contentTheme,
              }}
            />
            <ContainerSocialShareWindowGuide>
              <SocialShare />
            </ContainerSocialShareWindowGuide>
            <SelectedPosts
              {...windowGuidePage?.postTemplate?.postTheme?.[0]?.selectedPosts}
              {...{ variant: 'window-guide' }}
            />
          </StyledContentWrapper>
          <NewsletterArticle {...newsletterAndContact.newsletterArticle} />
        </div>
      </StyledTwoSectionWrapper>
    </Layout>
  );
};

export const query = graphql`
  query WindowGuidePage($id: String) {
    windowGuidePage: wpPost(id: { eq: $id }) {
      seo {
        ...WpSEOFragment
      }
      title
      date(locale: "PL", formatString: "D MMMM YYYY")
      author {
        node {
          lastName
          firstName
        }
      }
      postTemplate {
        postTheme {
          ... on WpPost_Posttemplate_PostTheme_WindowTutorial {
            intro {
              text
              image {
                ...WpImageFragment
              }
            }
            contactUsBox {
              title
              text
              subTitle
              fieldGroupName
              button {
                link {
                  url
                  target
                }
                label
                ariaLabel
              }
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
              ... on WpPost_Posttemplate_PostTheme_WindowTutorial_ContentTheme_HeadingAndTitle {
                content
                fieldGroupName
                heading
              }
              ... on WpPost_Posttemplate_PostTheme_WindowTutorial_ContentTheme_Image {
                fieldGroupName
                image {
                  ...WpImageFragment
                }
              }
              ... on WpPost_Posttemplate_PostTheme_WindowTutorial_ContentTheme_RecommendedProducts {
                fieldGroupName
                recommendedProducts {
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
        authors {
          author {
            email
            lastName
            firstName
            phone
            position
            image {
              ...WpImageFragment
            }
          }
        }
      }
    }
  }
`;

export default WindowGuide;
