import React from 'react';
import { graphql, PageProps } from 'gatsby';

import Layout from 'templates/Layout';

import { PageContextType, SeoType } from 'types';
import { WpImageType } from 'components/atoms/WpImage';
import EventVideo from 'components/organisms/EventVideo';
import ZoneBanner, { ZoneBannerType } from 'components/organisms/ZoneBanner';
import WhyUs, { WhyUsType } from 'components/organisms/WhyUs';
import PresentationVideo, { PresentationVideoType } from 'components/organisms/PresentationVideo';
import InternormViewBanner, {
  InternormViewBannerType,
} from 'components/organisms/InternormViewBanner';
import { RedSliderType } from 'components/organisms/RedSlider';
import RedSlider from 'components/organisms/RedSlider/RedSlider';
import OurPartners, { OurPartnerType } from 'components/organisms/OurPartners';
import { ContactFormAboutType } from 'components/organisms/ContactFormAbout';

type DataProps = {
  partnerZonePage: {
    seo: SeoType;
    partnerZoneData: {
      bannerWithBar: ZoneBannerType;
      whyUs: WhyUsType;
      presentation: PresentationVideoType;
      eventVideo: {
        presentation: PresentationVideoType;
        videoImage: WpImageType;
      };
      whyUsSecondary: WhyUsType;
      internormView: InternormViewBannerType;
      redSlider: RedSliderType;
      partnersAboutUs: OurPartnerType;
      contactFormDescription: ContactFormAboutType;
    };
  };
};

const PartnerZonePage = ({
  data: { partnerZonePage },
  pageContext,
}: PageProps<DataProps, PageContextType>) => {
  const {
    partnerZoneData: {
      bannerWithBar,
      whyUs,
      presentation,
      eventVideo,
      whyUsSecondary,
      internormView,
      redSlider,
      partnersAboutUs,
      contactFormDescription,
    },
  } = partnerZonePage;

  return (
    <Layout
      {...{
        hasSpace: false,
        seo: partnerZonePage.seo,
        contactFormVariant: 'partner-zone',
        contactFormDescription,
      }}
    >
      <ZoneBanner {...bannerWithBar} {...{ pageContext, variant: 'partner' }} />
      <WhyUs {...whyUs} {...{ variant: 'partner-page', background: 'alabaster' }} />
      <RedSlider {...redSlider} />
      <PresentationVideo {...presentation} />
      <WhyUs
        {...whyUsSecondary}
        {...{ variant: 'partner-page', cardTitleVariant: 'partner-page-secondary' }}
      />
      <InternormViewBanner {...internormView} />
      <EventVideo {...eventVideo.presentation} {...{ videoImage: eventVideo.videoImage }} />
      <OurPartners {...partnersAboutUs} />
    </Layout>
  );
};

export const query = graphql`
  query PartnerZonePage($id: String) {
    partnerZonePage: wpPage(id: { eq: $id }) {
      seo {
        ...WpSEOFragment
      }
      partnerZoneData {
        bannerWithBar {
          heading
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
          bar {
            heading
            subTitle
            button {
              label
              ariaLabel
              link {
                url
                target
              }
            }
            benefitList {
              benefit
            }
          }
        }
        whyUs {
          title
          subTitle
          cards {
            heading
            icon
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
        }
        presentation {
          title
          text
          subTitle
          videoId
          button {
            label
            ariaLabel
            link {
              url
              target
            }
          }
        }
        eventVideo {
          presentation {
            title
            text
            subTitle
            videoId
            button {
              label
              ariaLabel
              link {
                url
                target
              }
            }
          }
          videoImage {
            ...WpImageFragment
          }
        }
        whyUsSecondary {
          title
          subTitle
          cards {
            icon
            heading
          }
        }
        internormView {
          heading
          subTitle
          image {
            ...WpImageFragment
          }
          advantageList {
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
        }
        redSlider {
          backgroundImage {
            ...WpImageFragment
          }
          sliderElements {
            heading
            subTitle
            text
            button {
              ariaLabel
              label
              link {
                url
                target
              }
            }
          }
        }
        partnersAboutUs {
          subTitle
          opinionList {
            opinionText
            author
            logo {
              ...WpImageFragment
            }
          }
          partnersList {
            link {
              url
              target
            }
            logo {
              ...WpImageFragment
            }
          }
        }
        contactFormDescription {
          text
          subtitle
          heading
          advantageList {
            text
          }
          author {
            email
            firstName
            lastName
            phone
            position
            image {
              ...WpImageFragment
            }
          }
        }
      }
    }
  }
`;

export default PartnerZonePage;
