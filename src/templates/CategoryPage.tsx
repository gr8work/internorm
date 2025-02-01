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
import DownloadableMaterials, {
  DownloadableMaterialsType,
} from 'components/organisms/DownloadableMaterials';
import BlackBanner from 'components/organisms/BlackBanner';

import { PageContextType, SeoType } from 'types';
import ContactUsBanner, { ContactUsBannerType } from 'components/organisms/ContactUsBanner';
import { IBlackBanner } from 'components/organisms/BlackBanner/interface';
import CertificateRewards, {
  CertificateRewardsType,
} from 'components/organisms/CertificateRewards';
import FadeIn from 'components/atoms/FadeIn';

type DataProps = {
  categoryPage: {
    seo: SeoType;
    template: {
      category: {
        intro: ProductCategoryType;
        downloadableMaterials: DownloadableMaterialsType;
        contactUsBanner: ContactUsBannerType;
        advantages: ProductAdvantagesType;
        chooseModels: ChooseModelsType;
      };
    };
  };
  repeatableComponentsData: {
    repeatableComponents: {
      whyUs: WhyUsType;
      installationBanner: IBlackBanner;
      certificateRewards: CertificateRewardsType;
    };
  };
};

const CategoryPage = ({
  pageContext,
  data: { categoryPage, repeatableComponentsData },
}: PageProps<DataProps, PageContextType>) => {
  const { intro, downloadableMaterials, contactUsBanner, advantages, chooseModels } =
    categoryPage.template.category;

  const [selectedTag, setSelectedTag] = useState<ChooseModelType['tag'] | undefined>(
    chooseModels?.models?.[0]?.tag?.toLowerCase().trim() ?? undefined
  );

  const { whyUs, installationBanner, certificateRewards } =
    repeatableComponentsData.repeatableComponents;

  return (
    <Layout {...{ seo: categoryPage.seo }}>
      <Breadcrumb {...{ pageContext }} />
      <ProductCategoryIntro {...intro} />
      <ProductAdvantages {...advantages} />
      <FadeIn>
        <ChooseModels {...chooseModels} {...{ variant: 'category', selectedTag, setSelectedTag }} />
      </FadeIn>
      <DownloadableMaterials {...downloadableMaterials} />
      {installationBanner ? <BlackBanner {...installationBanner} /> : null}
      <ContactUsBanner {...contactUsBanner} />
      {whyUs ? <WhyUs {...whyUs} /> : null}
      {certificateRewards ? <CertificateRewards {...certificateRewards} /> : null}
    </Layout>
  );
};

export const query = graphql`
  query CategoryPage($id: String) {
    categoryPage: wpPage(id: { eq: $id }) {
      seo {
        ...WpSEOFragment
      }
      template {
        ... on WpTemplate_Categories {
          category {
            intro {
              title
              text
              wpImage {
                ...WpImageFragment
              }
            }
            downloadableMaterials {
              title
              text
              subTitle
              image {
                ...WpImageFragment
              }
              materials {
                file {
                  localFile {
                    publicURL
                    prettySize
                  }
                }
                fileName
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
        installationBanner {
          title
          subTitle
          text
          button {
            label
            ariaLabel
            link {
              url
              target
            }
          }
          image {
            ...WpImageFragment
          }
        }
      }
    }
  }
`;

export default CategoryPage;
