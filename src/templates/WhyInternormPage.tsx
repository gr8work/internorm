import React from 'react';

import { PageContextType, SeoType } from 'types';
import Layout from 'templates/Layout';
import Breadcrumb from 'components/atoms/Breadcrumb';
import ProductCategoryIntro, {
  ProductCategoryType,
} from 'components/organisms/ProductCategoryIntro';
import WhyUs, { WhyUsType } from 'components/organisms/WhyUs';
import CertificateRewards, {
  CertificateRewardsType,
} from 'components/organisms/CertificateRewards';
import SwitchCategoryViewMode, {
  SwitchCategoryViewModeType,
} from 'components/organisms/SwitchCategoryViewMode';
import StylisticLines, { StylisticLinesType } from 'components/organisms/StylisticLines';
import CenterTitleText, { CenterTextTitleProp } from 'components/molecules/CenterTitleText';
import InnovationSlider from 'components/organisms/InnovationSlider';
import SecurityTextBanner, {
  SecurityTextBannerType,
} from 'components/organisms/SecurityTextBanner';
import FullSizeVideo, { PresentationVideoType } from 'components/atoms/FullSizeVideo';
import QualityTooltips, {
  QualityTooltipsType,
} from 'components/organisms/QualityTooltips/QualityTooltips';
import useToggle from 'hooks/useToggle';
import { graphql, PageProps } from 'gatsby';
import { IImagesSwiperLabels } from 'components/molecules/ImagesSwiperLabels/interface';

type DataProps = {
  whyInternormPage: {
    seo: SeoType;
    whyInternorm: {
      intro: ProductCategoryType;
      switchViewMode: SwitchCategoryViewModeType;
      stylisticLines: StylisticLinesType;
      whyUs: WhyUsType;
      innovationText: CenterTextTitleProp;
      innovationImg: IImagesSwiperLabels;
      designText: CenterTextTitleProp;
      trustText: CenterTextTitleProp;
      linkFullVideoSize: PresentationVideoType;
      securityBanner: SecurityTextBannerType;
      qualityTooltips: QualityTooltipsType;
    };
  };
  repeatableComponentsData: {
    repeatableComponents: {
      certificateRewards: CertificateRewardsType;
    };
  };
};

const WhyInternorm = ({
  pageContext,
  data: { whyInternormPage, repeatableComponentsData },
}: PageProps<DataProps, PageContextType>) => {
  const [isSwitchPressed, toggleIsSwitchPressed] = useToggle();

  const { certificateRewards } = repeatableComponentsData.repeatableComponents;

  const {
    intro,
    whyUs,
    stylisticLines,
    switchViewMode,
    innovationText,
    designText,
    trustText,
    innovationImg,
    linkFullVideoSize,
    securityBanner,
    qualityTooltips,
  } = whyInternormPage.whyInternorm;

  return (
    <Layout {...{ seo: whyInternormPage.seo }}>
      <Breadcrumb {...{ pageContext }} />
      <ProductCategoryIntro {...intro} />
      <WhyUs {...whyUs} variant="why-internorm" />
      <QualityTooltips {...qualityTooltips} />
      <CenterTitleText id="design" {...designText} {...{ type: 'white' }} />
      <SwitchCategoryViewMode
        {...switchViewMode}
        {...{ isSwitchPressed, toggleIsSwitchPressed, backgroundColor: 'alabaster' }}
      />
      <StylisticLines
        {...stylisticLines}
        {...{ viewVariant: isSwitchPressed ? 'architecture' : 'product' }}
      />
      <CenterTitleText id="innowacje" {...innovationText} {...{ type: 'billowyClouds' }} />
      <InnovationSlider {...innovationImg} />
      <SecurityTextBanner {...securityBanner} />
      <CenterTitleText id="bezpieczenstwo" {...trustText} {...{ type: 'alabaster' }} />
      <FullSizeVideo {...linkFullVideoSize} />
      {certificateRewards ? <CertificateRewards {...certificateRewards} /> : null}
    </Layout>
  );
};

export const query = graphql`
  query WhyInternormPage($id: String) {
    whyInternormPage: wpPage(id: { eq: $id }) {
      seo {
        ...WpSEOFragment
      }
      whyInternorm {
        intro {
          title
          text
          wpImage {
            ...WpImageFragment
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
        qualityTooltips {
          title
          descSecond
          descFirst
          listQuality {
            text
          }
          button {
            label
            ariaLabel
            link {
              url
              target
            }
          }
          toolTipSliders {
            title
            subTitle
            list {
              text
            }
            image {
              altText
              localFile {
                publicURL
              }
            }
            toolTips {
              text
              positionTop
              positionLeft
            }
          }
        }
        securityBanner {
          title
          subTitle
          description
          tags {
            text
          }
          listSecurity {
            text
          }
          image {
            ...WpImageFragment
          }
          button {
            link {
              url
              target
            }
            label
            ariaLabel
          }
        }
        trustText {
          title
          descriptionText
        }
        innovationText {
          title
          descriptionText
        }
        innovationImg {
          items {
            mainTextLabel
            secondTextLabel
            content
            image {
              ...WpImageFragment
            }
            link {
              ... on WpPage {
                uri
              }
            }
          }
        }
        linkFullVideoSize {
          videoId
        }
        designText {
          title
          descriptionText
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
      }
    }
  }
`;

export default WhyInternorm;
