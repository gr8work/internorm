import React from 'react';

import Layout from 'templates/Layout';
import ProductCategoryIntro, {
  ProductCategoryType,
} from 'components/organisms/ProductCategoryIntro';
import PromotionBox, { PromotionBoxType } from 'components/organisms/PromotionBox';
import CertificateRewards, {
  CertificateRewardsType,
} from 'components/organisms/CertificateRewards';
import BlackBanner from 'components/organisms/BlackBanner';
import WhyUs, { WhyUsType } from 'components/organisms/WhyUs';
import Quality from 'components/organisms/Quality';
import Breadcrumb from 'components/atoms/Breadcrumb';
import BannerSliderVertical from 'components/organisms/BannerSliderVertical';
import ProductLines, { ProductLinesType } from 'components/organisms/ProductLines';

import { PageContextType, SeoType } from 'types';
import { graphql, PageProps } from 'gatsby';
import { IBlackBanner } from 'components/organisms/BlackBanner/interface';
import { ISlideVerticalListProps } from 'data/interfaces';
import { IQuality } from 'components/organisms/Quality/interface';

type DataProps = {
  slidingDoorsAndPanoramicGlazingPage: {
    seo: SeoType;
    template: {
      slidingDoorsAndPanoramicGlazing: {
        intro: ProductCategoryType;
        panoramicGlazing: {
          productLines: ProductLinesType;
        };
        slidingDoors: {
          productLines: ProductLinesType;
        };
        promotionBox: PromotionBoxType;
        quality: IQuality;
        sliderVertical: ISlideVerticalListProps;
      };
    };
  };
  repeatableComponentsData: {
    repeatableComponents: {
      certificateRewards: CertificateRewardsType;
      whyUs: WhyUsType;
      installationBanner: IBlackBanner;
    };
  };
};

const SlidingDoorsAndPanoramicGlazingPage = ({
  pageContext,
  data: { slidingDoorsAndPanoramicGlazingPage, repeatableComponentsData },
}: PageProps<DataProps, PageContextType>) => {
  const { certificateRewards, whyUs, installationBanner } =
    repeatableComponentsData.repeatableComponents;

  const { intro, slidingDoors, panoramicGlazing, promotionBox, quality, sliderVertical } =
    slidingDoorsAndPanoramicGlazingPage.template.slidingDoorsAndPanoramicGlazing;

  return (
    <Layout {...{ seo: slidingDoorsAndPanoramicGlazingPage.seo }}>
      <Breadcrumb {...{ pageContext }} />
      <ProductCategoryIntro {...intro} />
      {slidingDoors.productLines.heading ? (
        <ProductLines {...slidingDoors.productLines} {...{ variant: 'sliding-doors' }} />
      ) : null}
      {panoramicGlazing.productLines.heading ? (
        <ProductLines
          {...panoramicGlazing.productLines}
          {...{ sectionColor: 'alabaster', variant: 'sliding-doors' }}
        />
      ) : null}
      <PromotionBox {...promotionBox} />
      <BannerSliderVertical {...sliderVertical} {...{ type: 'dark' }} />
      <Quality {...quality} {...{ type: 'large-dark' }} />
      {installationBanner ? <BlackBanner {...installationBanner} /> : null}
      {whyUs ? <WhyUs {...whyUs} /> : null}
      {certificateRewards ? <CertificateRewards {...certificateRewards} /> : null}
    </Layout>
  );
};

export const query = graphql`
  query SlidingDoorsAndPanoramicGlazingPage($id: String) {
    slidingDoorsAndPanoramicGlazingPage: wpPage(id: { eq: $id }) {
      seo {
        ...WpSEOFragment
      }
      template {
        ... on WpTemplate_SlidingDoorsAndPanoramicGlazingPage {
          slidingDoorsAndPanoramicGlazing {
            intro {
              title
              text
              wpImage {
                ...WpImageFragment
              }
            }
            panoramicGlazing {
              productLines {
                heading
                text
                button {
                  label
                  ariaLabel
                  link {
                    url
                    target
                  }
                }
                products {
                  heading
                  text
                  button {
                    label
                    ariaLabel
                    link {
                      url
                      target
                    }
                  }
                  chooseModels {
                    text
                    models {
                      title
                      tag
                      description
                      button {
                        label
                        ariaLabel
                        link {
                          url
                          target
                        }
                      }
                      previewImages {
                        image {
                          ...WpImageFragment
                        }
                      }
                    }
                  }
                }
              }
            }
            slidingDoors {
              productLines {
                heading
                text
                button {
                  label
                  ariaLabel
                  link {
                    url
                    target
                  }
                }
                products {
                  heading
                  text
                  button {
                    label
                    ariaLabel
                    link {
                      url
                      target
                    }
                  }
                  chooseModels {
                    text
                    models {
                      title
                      tag
                      description
                      button {
                        label
                        ariaLabel
                        link {
                          url
                          target
                        }
                      }
                      previewImages {
                        image {
                          ...WpImageFragment
                        }
                      }
                    }
                  }
                }
              }
            }
            promotionBox {
              isVisible
              subTitle
              title
              text
              button {
                label
                ariaLabel
                link {
                  url
                  target
                }
              }
              backgroundColor
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

export default SlidingDoorsAndPanoramicGlazingPage;
