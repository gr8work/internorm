import React from 'react';
import { graphql, PageProps } from 'gatsby';

import Layout from 'templates/Layout';
import ProductCategoryIntro, {
  ProductCategoryType,
} from 'components/organisms/ProductCategoryIntro';
import Breadcrumb from 'components/atoms/Breadcrumb';
import ProductDetail, { ProductDetailType } from 'components/organisms/ProductDetail';
import PresentationVideo, { PresentationVideoType } from 'components/organisms/PresentationVideo';
import ProductModelRealizations, {
  ProductModelRealizationsType,
} from 'components/organisms/ProductModelRealizations';
import ProductSolutions, { ProductSolutionsType } from 'components/organisms/ProductSolutions';
import TechnicalParametersList, {
  TechnicalParametersListType,
} from 'components/organisms/TechnicalParametersList';
import WhyUs, { WhyUsType } from 'components/organisms/WhyUs';
import CertificateRewards, {
  CertificateRewardsType,
} from 'components/organisms/CertificateRewards';
import DownloadableMaterials, {
  DownloadableMaterialsType,
} from 'components/organisms/DownloadableMaterials';
import ContactUsBanner, { ContactUsBannerType } from 'components/organisms/ContactUsBanner';
import BannerSliderVertical from 'components/organisms/BannerSliderVertical';

import { PageContextType, SeoType } from 'types';
import { ISlideVerticalListProps } from 'data/interfaces';

type DataProps = {
  modelPage: {
    seo: SeoType;
    template: {
      model: {
        intro: ProductCategoryType;
        productDetail: ProductDetailType;
        realizations: ProductModelRealizationsType;
        downloadableMaterials: DownloadableMaterialsType;
        sliderVertical: ISlideVerticalListProps;
        contactUsBanner: ContactUsBannerType;
        presentation: PresentationVideoType;
        technicalParameters: TechnicalParametersListType;
        solutions: ProductSolutionsType;
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

const ModelPage = ({
  pageContext,
  data: { modelPage, repeatableComponentsData },
}: PageProps<DataProps, PageContextType>) => {
  const {
    intro,
    productDetail,
    realizations,
    downloadableMaterials,
    contactUsBanner,
    presentation,
    technicalParameters,
    solutions,
    sliderVertical,
  } = modelPage.template.model;

  const { certificateRewards, whyUs } = repeatableComponentsData.repeatableComponents;

  return (
    <Layout {...{ seo: modelPage.seo }}>
      <Breadcrumb {...{ pageContext }} />
      <ProductCategoryIntro {...intro} />
      <ProductDetail {...productDetail} />
      <ProductModelRealizations {...realizations} />
      <PresentationVideo {...presentation} />
      <ProductSolutions {...solutions} />
      <TechnicalParametersList {...technicalParameters} />
      <BannerSliderVertical {...sliderVertical} {...{ type: 'light' }} />
      <DownloadableMaterials {...downloadableMaterials} />
      <ContactUsBanner {...contactUsBanner} />
      {whyUs ? <WhyUs {...whyUs} /> : null}
      {certificateRewards ? <CertificateRewards {...certificateRewards} /> : null}
    </Layout>
  );
};

export const query = graphql`
  query ModelPage($id: String) {
    modelPage: wpPage(id: { eq: $id }) {
      seo {
        ...WpSEOFragment
      }
      template {
        ... on WpTemplate_Models {
          model {
            intro {
              title
              text
              wpImage {
                ...WpImageFragment
              }
            }
            productDetail {
              title
              text
              badges {
                image {
                  ...WpImageFragment
                }
              }
              hasStylisticLines
              button {
                label
                ariaLabel
                link {
                  url
                  target
                }
              }
              stats {
                text
                icon
                hiddenText
              }
              stylisticLines {
                color
                category
                images {
                  image {
                    ...WpImageFragment
                  }
                }
              }
              images {
                image {
                  ...WpImageFragment
                }
              }
            }
            realizations {
              title
              fullWidthImages {
                image {
                  ...WpImageFragment
                }
              }
              aboutContent {
                title
                subTitle
                text
                tags {
                  text
                }
                images {
                  image {
                    ...WpImageFragment
                  }
                }
              }
            }
            sliderVertical {
              banners {
                title
                subTitle
                description
                image {
                  ...WpImageFragment
                }
                primaryButton {
                  label
                  ariaLabel
                  link {
                    url
                    target
                  }
                }
                secondaryButton {
                  label
                  ariaLabel
                  link {
                    url
                    target
                  }
                }
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
            presentation {
              title
              text
              subTitle
              videoId
            }
            technicalParameters {
              title
              subTitle
              button {
                label
                ariaLabel
                link {
                  url
                  target
                }
              }
              parameters {
                title
                content
              }
            }
            solutions {
              title
              cards {
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

export default ModelPage;
