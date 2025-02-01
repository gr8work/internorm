import React from 'react';
import { graphql, PageProps } from 'gatsby';

import Layout from 'templates/Layout';
import ProductCategoryIntro, {
  ProductCategoryType,
} from 'components/organisms/ProductCategoryIntro';
import CertificateRewards, {
  CertificateRewardsType,
} from 'components/organisms/CertificateRewards';
import BlackBanner from 'components/organisms/BlackBanner';
import WhyUs, { WhyUsType } from 'components/organisms/WhyUs';
import Breadcrumb from 'components/atoms/Breadcrumb';
import DownloadableMaterials, {
  DownloadableMaterialsType,
} from 'components/organisms/DownloadableMaterials';
import DoorSafety, { DoorSafetyType } from 'components/organisms/DoorSafety';
import DoorsWithSystems, { DoorsWithSystemsType } from 'components/organisms/DoorsWithSystems';

import { IBlackBanner } from 'components/organisms/BlackBanner/interface';
import { PageContextType, SeoType } from 'types';

type DataProps = {
  frontDoorPage: {
    seo: SeoType;
    template: {
      frontDoor: {
        intro: ProductCategoryType;
        aluminum: {
          frontDoorsProductLines: DoorsWithSystemsType;
        };
        woodAluminum: {
          frontDoorsProductLines: DoorsWithSystemsType;
        };
        downloadableMaterials: DownloadableMaterialsType;
        safetyAndAccents: DoorSafetyType;
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

const FrontDoorPage = ({
  pageContext,
  data: { frontDoorPage, repeatableComponentsData },
}: PageProps<DataProps, PageContextType>) => {
  const { certificateRewards, whyUs, installationBanner } =
    repeatableComponentsData.repeatableComponents;

  const { aluminum, woodAluminum, intro, downloadableMaterials, safetyAndAccents } =
    frontDoorPage.template.frontDoor;

  return (
    <Layout {...{ seo: frontDoorPage.seo }}>
      <Breadcrumb {...{ pageContext }} />
      <ProductCategoryIntro {...intro} />
      {aluminum?.frontDoorsProductLines ? (
        <DoorsWithSystems {...aluminum.frontDoorsProductLines} />
      ) : null}
      {woodAluminum?.frontDoorsProductLines ? (
        <DoorsWithSystems
          {...woodAluminum.frontDoorsProductLines}
          {...{ sectionColor: 'heavenlyWhite', isCategorySectionReverse: true }}
        />
      ) : null}
      {downloadableMaterials ? <DownloadableMaterials {...downloadableMaterials} /> : null}
      {safetyAndAccents ? <DoorSafety {...safetyAndAccents} /> : null}
      {installationBanner ? (
        <BlackBanner
          {...installationBanner}
          {...{ typeTitle: 'white', typeText: 'white', typeButton: 'white' }}
        />
      ) : null}
      {whyUs ? <WhyUs {...whyUs} /> : null}
      {certificateRewards ? <CertificateRewards {...certificateRewards} /> : null}
    </Layout>
  );
};

export const query = graphql`
  query FrontDoorPage($id: String) {
    frontDoorPage: wpPage(id: { eq: $id }) {
      seo {
        ...WpSEOFragment
      }
      template {
        ... on WpTemplate_FrontDoorPage {
          frontDoor {
            intro {
              title
              text
              wpImage {
                ...WpImageFragment
              }
            }
            aluminum {
              frontDoorsProductLines {
                category {
                  title
                  text
                  chooseModels {
                    text
                    models {
                      title
                      tag
                      description
                      beforePriceText
                      price {
                        value
                        currency
                      }
                      previewImages {
                        image {
                          ...WpImageFragment
                        }
                      }
                      image {
                        ...WpImageFragment
                      }
                    }
                  }
                }
                buttonsDivider
                contactButton {
                  label
                  ariaLabel
                  link {
                    url
                    target
                  }
                }
                downloadButton {
                  label
                  ariaLabel
                  link {
                    url
                    target
                  }
                }
                systems {
                  title
                  text
                  chooseSystem {
                    text
                    systems {
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
                      image {
                        ...WpImageFragment
                      }
                    }
                  }
                }
              }
            }
            woodAluminum {
              frontDoorsProductLines {
                category {
                  title
                  text
                  chooseModels {
                    text
                    models {
                      title
                      tag
                      description
                      beforePriceText
                      price {
                        value
                        currency
                      }
                      previewImages {
                        image {
                          ...WpImageFragment
                        }
                      }
                      image {
                        ...WpImageFragment
                      }
                    }
                  }
                }
                buttonsDivider
                contactButton {
                  label
                  ariaLabel
                  link {
                    url
                    target
                  }
                }
                downloadButton {
                  label
                  ariaLabel
                  link {
                    url
                    target
                  }
                }
                systems {
                  title
                  text
                  chooseSystem {
                    text
                    systems {
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
                      image {
                        ...WpImageFragment
                      }
                    }
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
            safetyAndAccents {
              title
              text
              subTitle
              cards {
                heading
                text
                image {
                  ...WpImageFragment
                }
              }
              accents {
                title
                text
                subTitle
                image {
                  ...WpImageFragment
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

export default FrontDoorPage;
