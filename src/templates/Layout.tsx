/* eslint-disable react/jsx-no-constructed-context-values */
import React, { ReactNode } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import styled, { ThemeProvider } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Seo, { SEOContext } from 'gatsby-plugin-wpgraphql-seo';

import Header from 'components/organisms/Header';
import ContactForm from 'components/organisms/ContactForm';
import Footer from 'components/organisms/Footer';
import WhatNext from 'components/organisms/WhatNext';
import GlobalStyle from 'theme/globalStyles';

import { theme } from 'theme';
import { media } from 'theme/media';
import { IGlobal } from 'gatsby-plugin-wpgraphql-seo/dist/SeoContext';
import { SeoType } from 'types';
import PartnerZoneContactForm from 'components/organisms/PartnerZoneContactForm';
import ArchitectZoneContactForm from 'components/organisms/ArchitectZoneContactForm';
import { ContactFormAboutType } from 'components/organisms/ContactFormAbout';

const StyledMain = styled.main`
  --header-bar-height: 38px;
  --navigation-bar-height: 64px;
  --space-to-first-element: 27px;

  * {
    scroll-margin-top: calc(var(--navigation-bar-height) + var(--header-bar-height) + 20px);
  }

  &[data-space='true'] {
    padding-top: calc(
      var(--header-bar-height) + var(--navigation-bar-height) + var(--space-to-first-element)
    );
  }

  &[data-space='false'] {
    padding-top: var(--header-bar-height);
  }

  ${media.up('lg')} {
    --header-bar-height: 38px;
    --space-to-first-element: 53px;
    --navigation-bar-height: 100px;
  }
`;

type LayoutType = {
  children: ReactNode;
  isNavBarTransparent?: boolean;
  hasSpace?: boolean;
  seo?: SeoType;
  contactFormVariant?: 'default' | 'partner-zone' | 'architect-zone';
  contactFormDescription?: ContactFormAboutType;
};

const Layout = ({
  children,
  isNavBarTransparent,
  hasSpace = true,
  seo,
  contactFormVariant = 'default',
  contactFormDescription,
}: LayoutType) => {
  const {
    wp: { seo: seoData },
  } = useStaticQuery<{ wp: { seo: IGlobal | undefined } }>(graphql`
    query SiteInfoQuery {
      wp {
        seo {
          contentTypes {
            post {
              title
              schemaType
              metaRobotsNoindex
              metaDesc
            }
            page {
              metaDesc
              metaRobotsNoindex
              schemaType
              title
            }
          }
          webmaster {
            googleVerify
            yandexVerify
            msVerify
            baiduVerify
          }
          schema {
            companyName
            personName
            companyOrPerson
            wordpressSiteName
            siteUrl
            siteName
            inLanguage
            logo {
              sourceUrl
              mediaItemUrl
              altText
            }
          }
          social {
            facebook {
              url
              defaultImage {
                sourceUrl
                mediaItemUrl
              }
            }
            instagram {
              url
            }
            linkedIn {
              url
            }
            mySpace {
              url
            }
            pinterest {
              url
              metaTag
            }
            twitter {
              username
            }
            wikipedia {
              url
            }
            youTube {
              url
            }
          }
        }
      }
    }
  `);

  const contactFormMap = {
    default: <ContactForm />,
    'partner-zone': contactFormDescription ? (
      <PartnerZoneContactForm {...{ contactFormDescription }} />
    ) : (
      <ContactForm />
    ),
    'architect-zone': contactFormDescription ? (
      <ArchitectZoneContactForm {...{ contactFormDescription }} />
    ) : (
      <ContactForm />
    ),
  };

  return (
    <ThemeProvider theme={theme}>
      <SEOContext.Provider value={{ global: seoData }}>
        <ParallaxProvider>
          <GlobalStyle />
          <Seo post={{ seo }} />
          <Header {...{ isNavBarTransparent }} />
          <StyledMain data-space={hasSpace}>{children}</StyledMain>
          {contactFormMap[contactFormVariant]}
          <WhatNext />
          <Footer />
        </ParallaxProvider>
      </SEOContext.Provider>
    </ThemeProvider>
  );
};

export const query = graphql`
  fragment WpSEOFragment on WpPostTypeSEO {
    title
    metaDesc
    focuskw
    metaKeywords
    metaRobotsNoindex
    metaRobotsNofollow
    opengraphTitle
    opengraphDescription
    opengraphImage {
      altText
      sourceUrl
      srcSet
    }
    twitterTitle
    twitterDescription
    twitterImage {
      altText
      sourceUrl
      srcSet
    }
    canonical
    cornerstone
    schema {
      articleType
      pageType
      raw
    }
  }
`;

export default Layout;
