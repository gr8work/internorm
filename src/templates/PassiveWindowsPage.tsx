import React from 'react';

import Layout from 'templates/Layout';
import ProductCategoryIntro, {
  ProductCategoryType,
} from 'components/organisms/ProductCategoryIntro';
import SwitchCategoryViewMode, {
  SwitchCategoryViewModeType,
} from 'components/organisms/SwitchCategoryViewMode';
import StylisticLines, { StylisticLinesType } from 'components/organisms/StylisticLines';
import PromotionBox, { PromotionBoxType } from 'components/organisms/PromotionBox';
import CertificateRewards, {
  CertificateRewardsType,
} from 'components/organisms/CertificateRewards';
import BlackBanner from 'components/organisms/BlackBanner';
import WhyUs, { WhyUsType } from 'components/organisms/WhyUs';
import ProductLines, { ProductLinesType } from 'components/organisms/ProductLines';
import Quality from 'components/organisms/Quality';
import Breadcrumb from 'components/atoms/Breadcrumb';
import BannerSliderVertical from 'components/organisms/BannerSliderVertical';

import { PageContextType, SeoType } from 'types';
import { graphql, PageProps } from 'gatsby';
import SwitchObserverSection from 'components/molecules/SwitchObserverSection';
import useToggle from 'hooks/useToggle';
import { IBlackBanner } from 'components/organisms/BlackBanner/interface';
import { IQuality } from 'components/organisms/Quality/interface';
import { ISlideVerticalListProps } from 'data/interfaces';

type DataProps = {
  passiveWindowsPage: {
    seo: SeoType;
    template: {
      passiveWindows: {
        intro: ProductCategoryType;
        switchViewMode: SwitchCategoryViewModeType;
        stylisticLines: StylisticLinesType;
        promotionBox: PromotionBoxType;
        productLines: ProductLinesType;
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

const PassiveWindowsPage = ({
  pageContext,
  data: { passiveWindowsPage, repeatableComponentsData },
}: PageProps<DataProps, PageContextType>) => {
  const [isSwitchPressed, toggleIsSwitchPressed] = useToggle();

  const {
    intro,
    switchViewMode,
    stylisticLines,
    promotionBox,
    productLines,
    quality,
    sliderVertical,
  } = passiveWindowsPage.template.passiveWindows;

  const { certificateRewards, whyUs, installationBanner } =
    repeatableComponentsData.repeatableComponents;

  return (
    <Layout {...{ seo: passiveWindowsPage.seo }}>
      <Breadcrumb {...{ pageContext }} />
      <ProductCategoryIntro {...intro} />
      <SwitchCategoryViewMode {...switchViewMode} {...{ isSwitchPressed, toggleIsSwitchPressed }} />
      <SwitchObserverSection {...{ isSwitchPressed, toggleIsSwitchPressed }}>
        <StylisticLines
          {...stylisticLines}
          {...{ viewVariant: isSwitchPressed ? 'architecture' : 'product' }}
        />
        <ProductLines
          {...productLines}
          {...{ viewVariant: isSwitchPressed ? 'architecture' : 'product' }}
        />
      </SwitchObserverSection>
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
  query PassiveWindowsPage($id: String) {
    passiveWindowsPage: wpPage(id: { eq: $id }) {
      seo {
        ...WpSEOFragment
      }
      template {
        ... on WpTemplate_PassiveWindowsPage {
          passiveWindows {
            intro {
              title
              text
              wpImage {
                ...WpImageFragment
              }
            }
            switchViewMode {
              text
              modes {
                firstDescription
                firstTitle
                secondDescription
                secondTitle
              }
            }
            stylisticLines {
              heading
              text
              slides {
                images {
                  product {
                    firstImage {
                      ...WpImageFragment
                    }
                    secondImage {
                      ...WpImageFragment
                    }
                  }
                  architecture {
                    image {
                      ...WpImageFragment
                    }
                  }
                }
                bar {
                  color
                  tag
                  text
                }
              }
            }
            productLines {
              heading
              text
              filtersText
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
                category {
                  name
                  tag
                }
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
                      link {
                        url
                        title
                      }
                      label
                      ariaLabel
                    }
                    previewImages {
                      product {
                        image {
                          ...WpImageFragment
                        }
                      }
                      architecture {
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

export default PassiveWindowsPage;
