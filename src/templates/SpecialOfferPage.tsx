import React from 'react';
import { PageContextType, SeoType } from 'types';
import Layout from 'templates/Layout';
import Breadcrumb from 'components/atoms/Breadcrumb';
import CertificateRewards, {
  CertificateRewardsType,
} from 'components/organisms/CertificateRewards';
import WhyUs, { WhyUsType } from 'components/organisms/WhyUs';
import ProductCategoryIntro, {
  ProductCategoryType,
} from 'components/organisms/ProductCategoryIntro';
import SpecialOfferDescriptionSlider, {
  SpecialOfferDescriptionType,
} from 'components/organisms/SpecialOfferDescriptionSlider';
import Quality from 'components/organisms/Quality';
import NewSpecialOffer, { NewSpecialOfferType } from 'components/organisms/NewSpecialOffer';
import { graphql, PageProps } from 'gatsby';
import { IQuality } from 'components/organisms/Quality/interface';

type DataProps = {
  specialOfferPage: {
    seo: SeoType;
    template: {
      specialOffer: {
        intro: ProductCategoryType;
        specialOffersDescription: SpecialOfferDescriptionType;
        quality: IQuality;
        newSpecialOffer: NewSpecialOfferType;
        isVisibleSpecialOffersDescription: boolean | null;
        isVisibleQuality: boolean | null;
        isVisibleNewSpecialOffer: boolean | null;
      };
    };
  };
  repeatableComponentsData: {
    repeatableComponents: {
      certificateRewards: CertificateRewardsType;
      whyUs: WhyUsType;
    };
  };
};

const SpecialOffer = ({
  pageContext,
  data: { specialOfferPage, repeatableComponentsData },
}: PageProps<DataProps, PageContextType>) => {
  const {
    intro,
    quality,
    newSpecialOffer,
    specialOffersDescription,
    isVisibleSpecialOffersDescription,
    isVisibleQuality,
    isVisibleNewSpecialOffer,
  } = specialOfferPage.template.specialOffer;

  const { certificateRewards, whyUs } = repeatableComponentsData.repeatableComponents;

  return (
    <Layout {...{ seo: specialOfferPage.seo }}>
      <Breadcrumb {...{ pageContext }} />
      <ProductCategoryIntro {...intro} />
      {isVisibleSpecialOffersDescription ? (
        <SpecialOfferDescriptionSlider
          {...specialOffersDescription}
          {...{ sectionColor: 'white' }}
        />
      ) : null}
      {isVisibleQuality ? (
        <Quality {...quality} {...{ type: 'white', typeText: 'slider-text' }} />
      ) : null}
      {isVisibleNewSpecialOffer ? <NewSpecialOffer {...newSpecialOffer} /> : null}
      {whyUs ? <WhyUs {...whyUs} /> : null}
      {certificateRewards ? <CertificateRewards {...certificateRewards} /> : null}
    </Layout>
  );
};

export const query = graphql`
  query SpecialOfferPage($id: String) {
    specialOfferPage: wpPage(id: { eq: $id }) {
      seo {
        ...WpSEOFragment
      }
      template {
        ... on WpTemplate_SpecialOffer {
          specialOffer {
            isVisibleSpecialOffersDescription
            isVisibleQuality
            isVisibleNewSpecialOffer
            intro {
              title
              text
              wpImage {
                ...WpImageFragment
              }
            }
            specialOffersDescription {
              titleList
              text
              subHeading
              heading
              previewImages {
                image {
                  ...WpImageFragment
                }
              }
              listItems {
                text
              }
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
            newSpecialOffer {
              title
              titleList
              subTitle
              description
              image {
                ...WpImageFragment
              }
              buttons {
                button {
                  label
                  ariaLabel
                  link {
                    url
                    target
                  }
                }
              }
              listItems {
                text
              }
            }
          }
        }
      }
    }
    repeatableComponentsData: wpPage(template: { templateName: { eq: "RepeatableComponents" } }) {
      repeatableComponents {
        certificateRewards {
          title
          images {
            image {
              ...WpImageFragment
            }
          }
        }
        whyUs {
          title
          subTitle
          button {
            link {
              url
              target
            }
            label
            ariaLabel
          }
          cards {
            heading
            icon
            text
          }
        }
      }
    }
  }
`;

export default SpecialOffer;
