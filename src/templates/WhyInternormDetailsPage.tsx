import React, { useState } from 'react';
import { graphql, PageProps } from 'gatsby';

import Layout from 'templates/Layout';
import ProductCategoryIntro, {
  ProductCategoryType,
} from 'components/organisms/ProductCategoryIntro';
import WhyUs, { WhyUsType } from 'components/organisms/WhyUs';
import Breadcrumb from 'components/atoms/Breadcrumb';
import ProductAdvantages, { ProductAdvantagesType } from 'components/organisms/ProductAdvantages';
import ChooseModels, { ChooseModelsType, ChooseModelType } from 'components/organisms/ChooseModels';

import { PageContextType, SeoType } from 'types';
import ContactUsBanner, { ContactUsBannerType } from 'components/organisms/ContactUsBanner';
import CertificateRewards, {
  CertificateRewardsType,
} from 'components/organisms/CertificateRewards';
import PresentationVideo, { PresentationVideoType } from 'components/organisms/PresentationVideo';
import FadeIn from 'components/atoms/FadeIn';

type DataProps = {
  whyInternormDetailsPage: {
    seo: SeoType;
    template: {
      whyInternormSubPage: {
        intro: ProductCategoryType;
        contactUsBanner: ContactUsBannerType;
        advantages: ProductAdvantagesType;
        chooseModels: ChooseModelsType;
        presentation: PresentationVideoType;
      };
    };
  };
  repeatableComponentsData: {
    repeatableComponents: {
      whyUs: WhyUsType;
      certificateRewards: CertificateRewardsType;
    };
  };
};

const WhyInternormDetailsPage = ({
  pageContext,
  data: { whyInternormDetailsPage, repeatableComponentsData },
}: PageProps<DataProps, PageContextType>) => {
  const { intro, contactUsBanner, advantages, chooseModels, presentation } =
    whyInternormDetailsPage.template.whyInternormSubPage;

  const [selectedTag, setSelectedTag] = useState<ChooseModelType['tag'] | undefined>(
    chooseModels?.models?.[0]?.tag?.toLowerCase().trim() ?? undefined
  );

  const { whyUs, certificateRewards } = repeatableComponentsData.repeatableComponents;

  return (
    <Layout {...{ seo: whyInternormDetailsPage.seo }}>
      <Breadcrumb {...{ pageContext }} />
      <ProductCategoryIntro {...intro} />
      <ProductAdvantages {...advantages} />
      <FadeIn>
        <ChooseModels {...chooseModels} {...{ variant: 'category', selectedTag, setSelectedTag }} />
      </FadeIn>
      <PresentationVideo {...presentation} />
      <ContactUsBanner {...contactUsBanner} />
      {whyUs ? <WhyUs {...whyUs} /> : null}
      {certificateRewards ? <CertificateRewards {...certificateRewards} /> : null}
    </Layout>
  );
};

export const query = graphql`
  query WhyInternormDetailsPage($id: String) {
    whyInternormDetailsPage: wpPage(id: { eq: $id }) {
      seo {
        ...WpSEOFragment
      }
      template {
        ... on WpTemplate_WhyInternormDetails {
          whyInternormSubPage {
            intro {
              title
              text
              wpImage {
                ...WpImageFragment
              }
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
            advantages {
              heading
              text
              previewImages {
                image {
                  ...WpImageFragment
                }
              }
              cards {
                heading
                text
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
            presentation {
              title
              text
              subTitle
              videoId
            }
            chooseModels {
              text
              models {
                title
                tag
                description
                image {
                  ...WpImageFragment
                }
                button {
                  link {
                    url
                    title
                  }
                  label
                  ariaLabel
                }
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

export default WhyInternormDetailsPage;
