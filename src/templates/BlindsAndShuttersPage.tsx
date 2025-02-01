import React from 'react';

import Layout from 'templates/Layout';
import ProductCategoryIntro, {
  ProductCategoryType,
} from 'components/organisms/ProductCategoryIntro';
import CertificateRewards, {
  CertificateRewardsType,
} from 'components/organisms/CertificateRewards';
import WhyUs, { WhyUsType } from 'components/organisms/WhyUs';
import Breadcrumb from 'components/atoms/Breadcrumb';
import ProductLines, { ProductLinesType } from 'components/organisms/ProductLines';
import PresentationVideo, { PresentationVideoType } from 'components/organisms/PresentationVideo';
import ProductAdvantages, { ProductAdvantagesType } from 'components/organisms/ProductAdvantages';

import { PageContextType, SeoType } from 'types';
import OtherSunVisors, { OtherSunVisorsType } from 'components/organisms/OtherSunVisors';
import { graphql, PageProps } from 'gatsby';

type DataProps = {
  blindsAndShuttersPage: {
    seo: SeoType;
    template: {
      blindsAndShutters: {
        intro: ProductCategoryType;
        insulatingWindows: ProductLinesType;
        externalBlinds: {
          advantages: ProductAdvantagesType;
        };
        externalShutters: {
          advantages: ProductAdvantagesType;
        };
        otherSunVisors: OtherSunVisorsType;
        mosquitoNets: {
          advantages: ProductAdvantagesType;
        };
        frenchBalconies: {
          advantages: ProductAdvantagesType;
        };
        presentation: PresentationVideoType;
      };
    };
    seoTitle?: string;
  };
  repeatableComponentsData: {
    repeatableComponents: {
      certificateRewards: CertificateRewardsType;
      whyUs: WhyUsType;
    };
  };
};

const BlindsAndShuttersPage = ({
  pageContext,
  data: { blindsAndShuttersPage, repeatableComponentsData },
}: PageProps<DataProps, PageContextType>) => {
  const {
    intro,
    insulatingWindows,
    externalBlinds,
    externalShutters,
    otherSunVisors,
    mosquitoNets,
    frenchBalconies,
    presentation,
  } = blindsAndShuttersPage.template.blindsAndShutters;

  const { certificateRewards, whyUs } = repeatableComponentsData.repeatableComponents;

  return (
    <Layout {...{ seo: blindsAndShuttersPage.seo }}>
      <Breadcrumb {...{ pageContext }} />
      <ProductCategoryIntro {...intro} />
      <ProductAdvantages {...externalBlinds.advantages} {...{ sectionColor: 'billowyClouds' }} />
      <ProductAdvantages {...externalShutters.advantages} />
      <OtherSunVisors {...otherSunVisors} />
      <ProductAdvantages {...mosquitoNets.advantages} />
      <ProductAdvantages {...frenchBalconies.advantages} {...{ sectionColor: 'billowyClouds' }} />
      <ProductLines {...insulatingWindows} {...{ variant: 'insulating-windows' }} />
      <PresentationVideo {...presentation} />
      {whyUs ? <WhyUs {...whyUs} /> : null}
      {certificateRewards ? <CertificateRewards {...certificateRewards} /> : null}
    </Layout>
  );
};

export const query = graphql`
  query BlindsAndShuttersPage($id: String) {
    blindsAndShuttersPage: wpPage(id: { eq: $id }) {
      seo {
        ...WpSEOFragment
      }
      template {
        ... on WpTemplate_BlindsAndShuttersPage {
          blindsAndShutters {
            intro {
              title
              text
              wpImage {
                ...WpImageFragment
              }
            }
            insulatingWindows {
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
            otherSunVisors {
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
                images {
                  image {
                    ...WpImageFragment
                  }
                }
              }
            }
            externalBlinds {
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
            }
            presentation {
              title
              text
              subTitle
              videoId
            }
            externalShutters {
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
            }
            mosquitoNets {
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
            }
            frenchBalconies {
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

export default BlindsAndShuttersPage;
