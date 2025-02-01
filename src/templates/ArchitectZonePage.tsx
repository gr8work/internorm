import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { PageContextType, SeoType } from 'types';

import Layout from 'templates/Layout';
import ZoneBanner, { ZoneBannerType } from 'components/organisms/ZoneBanner';
import WhyUs, { WhyUsType } from 'components/organisms/WhyUs';
import { ISlideVerticalListProps } from 'data/interfaces';
import BannerSliderVertical from 'components/organisms/BannerSliderVertical';
import { IQuality } from 'components/organisms/Quality/interface';
import Quality from 'components/organisms/Quality';
import EventVideo, { EventVideoType } from 'components/organisms/EventVideo';
import { WpImageType } from 'components/atoms/WpImage';
import ManifestInternorm, { ManifestInternormType } from 'components/organisms/ManifestInternorm';
import DownloadBanner, { DownloadBannerType } from 'components/organisms/DownloadBanner';
import { DownloadableMaterialsType } from 'components/organisms/DownloadableMaterials';
import DownloadableMaterialsZone from 'components/organisms/DownloadableMaterialsZone';
import { DownloadNewsletterType } from 'components/organisms/DownloadMaterial';
import { ContactFormAboutType } from 'components/organisms/ContactFormAbout';

type DataProps = {
  architectZonePage: {
    seo: SeoType;
    architectZoneData: {
      bannerWithBar: ZoneBannerType;
      whyUs: WhyUsType;
      sliderVerticalArchitectZone: ISlideVerticalListProps;
      manifestInternorm: ManifestInternormType;
      quality: IQuality;
      presentation: EventVideoType;
      videoImage: WpImageType;
      downloadableMaterials: DownloadableMaterialsType;
      downloadBanner: DownloadBannerType;
      downloadNewsletter: DownloadNewsletterType;
      contactFormDescription: ContactFormAboutType;
    };
  };
};

const ArchitectZonePage = ({
  data: { architectZonePage },
  pageContext,
}: PageProps<DataProps, PageContextType>) => {
  const {
    architectZoneData: {
      bannerWithBar,
      whyUs,
      sliderVerticalArchitectZone,
      quality,
      presentation,
      videoImage,
      manifestInternorm,
      downloadableMaterials,
      downloadBanner,
      downloadNewsletter,
      contactFormDescription,
    },
  } = architectZonePage;

  return (
    <Layout
      {...{
        hasSpace: false,
        seo: architectZonePage.seo,
        contactFormVariant: 'architect-zone',
        contactFormDescription,
      }}
    >
      <ZoneBanner {...bannerWithBar} {...{ pageContext }} />
      <WhyUs {...whyUs} {...{ variant: 'architect-page', background: 'alabaster' }} />
      <BannerSliderVertical
        {...sliderVerticalArchitectZone}
        {...{ type: 'light', customBg: 'white' }}
      />
      <ManifestInternorm {...manifestInternorm} />
      <Quality {...quality} {...{ type: 'large-dark' }} />
      <EventVideo {...presentation} {...{ videoImage }} />
      <DownloadableMaterialsZone {...downloadableMaterials} {...{ downloadNewsletter }} />
      <DownloadBanner {...downloadBanner} />
    </Layout>
  );
};

export const query = graphql`
  query ArchitectZonePage($id: String) {
    architectZonePage: wpPage(id: { eq: $id }) {
      seo {
        ...WpSEOFragment
      }
      architectZoneData {
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
        sliderVerticalArchitectZone {
          banners {
            title
            subTitle
            secondaryButton {
              ariaLabel
              label
              link {
                url
                target
              }
            }
            primaryButton {
              ariaLabel
              label
              link {
                target
                url
              }
            }
            image {
              ...WpImageFragment
            }
            description
            author {
              image {
                ...WpImageFragment
              }
              subTitle
              title
            }
          }
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
        presentation {
          title
          text
          subTitle
          videoId
        }
        videoImage {
          ...WpImageFragment
        }
        manifestInternorm {
          aboveCiteText
          buttonTextClose
          buttonTextOpen
          cite
          citeAuthor
          hiddenText
          backgroundImage {
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
              id
              publicUrl
              fileSize
            }
            fileName
            fileExtension
          }
        }
        downloadBanner {
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
        }
        downloadNewsletter {
          buttonText
          emailError
          emailPlaceholder
          heading
          privacyText
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

export default ArchitectZonePage;
