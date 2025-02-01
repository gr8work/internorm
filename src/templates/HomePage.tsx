import React, { useState } from 'react';

import HeaderBanner from 'components/organisms/HeaderBanner';
import PromotionBox, { PromotionBoxType } from 'components/organisms/PromotionBox';
import Mission from 'components/organisms/Mission';
import { IMission, IMissionVideo } from 'components/organisms/Mission/interface';

import CurrentOffers from 'components/organisms/CurrentOffers';
import Quality from 'components/organisms/Quality';
import BlackBanner from 'components/organisms/BlackBanner';
import BannerSliderVertical from 'components/organisms/BannerSliderVertical';
import ScrollBoxes from 'components/organisms/ScrollBoxes';
import Layout from 'templates/Layout';
import VideoComponent from 'components/molecules/VideoComponent';
import { IBlackBanner } from 'components/organisms/BlackBanner/interface';
import { graphql, PageProps } from 'gatsby';
import { IQuality } from 'components/organisms/Quality/interface';
import { IHeaderBanner } from 'components/organisms/HeaderBanner/interface';
import { IOurProductsBanner } from 'components/organisms/OurProductsBanner/interface';
import { CurrentOffersType } from 'components/organisms/CurrentOffers/interface';
import { ISlideVerticalListProps } from 'data/interfaces';
import { SeoType } from 'types';

type DataProps = {
  homePage: {
    seo: SeoType;
    template: {
      home: {
        headerBanner: IHeaderBanner;
        ourProductBanners: IOurProductsBanner[];
        promotionBox: PromotionBoxType;
        quality: IQuality;
        mission: IMission;
        missionPresentation: IMissionVideo;
        sliderVertical: ISlideVerticalListProps;
        currentOffers: CurrentOffersType;
      };
    };
  };
  repeatableComponentsData: {
    repeatableComponents: {
      installationBanner: IBlackBanner;
    };
  };
};

const HomePage = ({ data: { homePage, repeatableComponentsData } }: PageProps<DataProps>) => {
  const { installationBanner } = repeatableComponentsData.repeatableComponents;
  const [isOpen, setOpen] = useState(false);

  const {
    headerBanner,
    ourProductBanners,
    promotionBox,
    quality,
    mission,
    missionPresentation,
    sliderVertical,
    currentOffers,
  } = homePage.template.home;

  return (
    <Layout isNavBarTransparent hasSpace={false} {...{ seo: homePage.seo }}>
      {isOpen && missionPresentation.video && <VideoComponent id={missionPresentation.video} handleClick={() => setOpen(false)} />}
      <HeaderBanner {...headerBanner} />
      <PromotionBox {...promotionBox} />
      <ScrollBoxes banners={ourProductBanners} />
      <Mission {...mission} {...missionPresentation} handleClick={() => setOpen(true)} />
      <Quality {...quality} />
      <BannerSliderVertical {...sliderVertical} {...{ type: 'light' }} />
      {installationBanner ? <BlackBanner {...installationBanner} /> : null}
      <CurrentOffers {...currentOffers} />
    </Layout>
  );
};

export const query = graphql`
  query HomePage($id: String) {
    homePage: wpPage(id: { eq: $id }) {
      seo {
        ...WpSEOFragment
      }
      template {
        ... on WpTemplate_Homepage {
          home {
            headerBanner {
              title
              button {
                label
                ariaLabel
                link {
                  url
                  target
                }
              }
              imageMobile {
                ...WpImageFragment
              }
              imageDesktop {
                ...WpImageFragment
              }
            }
            ourProductBanners {
              kindButton {
                label
                ariaLabel
                link {
                  url
                  target
                }
              }
              contactButton {
                label
                ariaLabel
                link {
                  url
                  target
                }
              }
              title
              subTitle
              description
              image {
                ...WpImageFragment
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
            mission {
              title
              subTitle
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
            missionPresentation {
              previewVideo
              video
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
            currentOffers {
              title
              items {
                currentOffer {
                  type
                  title
                  textOffer
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
    }
    repeatableComponentsData: wpPage(template: { templateName: { eq: "RepeatableComponents" } }) {
      repeatableComponents {
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

export default HomePage;
