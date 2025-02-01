import React from 'react';

import Layout from 'templates/Layout';
import Breadcrumb from 'components/atoms/Breadcrumb';
import ProductCategoryIntro, {
  ProductCategoryType,
} from 'components/organisms/ProductCategoryIntro';
import AboutInfo from 'components/organisms/AboutInfo';
import AboutSlider from 'components/organisms/AboutSlider';
import AboutPersons from 'components/organisms/AboutPersons';
import Quality from 'components/organisms/Quality';
import AboutLocations from 'components/organisms/AboutLocations';
import AboutVideo from 'components/organisms/AboutVideo';

import { PageContextType, SeoType } from 'types';
import { graphql, PageProps } from 'gatsby';
import { IAboutInfo } from 'components/organisms/AboutInfo/interface';
import { IAboutPersons } from 'components/organisms/AboutPersons/interface';
import { IAboutSlider } from 'components/organisms/AboutSlider/interface';
import { IAboutVideo } from 'components/organisms/AboutVideo/interface';
import { IQuality } from 'components/organisms/Quality/interface';
import { IAboutLocations } from 'components/organisms/AboutLocations/interface';

type DataProps = {
  aboutUsCityPage: {
    seo: SeoType;
    template: {
      aboutUsCity: {
        title: ProductCategoryType['title'];
        info: IAboutInfo;
        slider: IAboutSlider;
        persons: IAboutPersons;
        video: IAboutVideo;
        quality: IQuality;
        locations: IAboutLocations;
      };
    };
  };
};

const AboutUsCity = ({
  pageContext,
  data: { aboutUsCityPage },
}: PageProps<DataProps, PageContextType>) => {
  const { title, info, slider, persons, video, quality, locations } =
    aboutUsCityPage.template.aboutUsCity;

  return (
    <Layout {...{ seo: aboutUsCityPage.seo }}>
      <Breadcrumb {...{ pageContext }} />
      <ProductCategoryIntro {...{ title }} />
      <AboutInfo {...info} />
      <AboutSlider {...slider} />
      <AboutPersons {...persons} />
      <AboutVideo {...video} />
      <Quality {...quality} {...{ type: 'white' }} />
      <AboutLocations {...locations} />
    </Layout>
  );
};

export const query = graphql`
  query AboutUsCityPage($id: String) {
    aboutUsCityPage: wpPage(id: { eq: $id }) {
      seo {
        ...WpSEOFragment
      }
      template {
        ... on WpTemplate_About {
          aboutUsCity {
            title
            info {
              infos {
                title
                linkText
                link {
                  url
                  target
                }
                items {
                  bold
                  text
                }
              }
              hours {
                wednesday
                tuesday
                thursday
                saturday
                monday
                friday
              }
            }
            persons {
              title
              subTitle
              content
              items {
                email
                name
                phone
                image {
                  ...WpImageFragment
                }
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
            slider {
              map {
                ...WpImageFragment
              }
              images {
                image {
                  ...WpImageFragment
                }
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
            video {
              videoId
              title
              subTitle
            }
            quality {
              title
              subTitle
              content
              items {
                title
                content
                link {
                  url
                  target
                }
                image {
                  ...WpImageFragment
                }
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
            locations {
              title
              items {
                title
                content
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
`;

export default AboutUsCity;
