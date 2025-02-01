import React from 'react';
import Layout from 'templates/Layout';
import Breadcrumb from 'components/atoms/Breadcrumb';
import { PageContextType, SeoType } from 'types';
import ProductCategoryIntro, {
  ProductCategoryType,
} from 'components/organisms/ProductCategoryIntro';
import DownloadableMaterials, {
  DownloadableMaterialsType,
} from 'components/organisms/DownloadableMaterials';
import BlackBanner from 'components/organisms/BlackBanner';
import WarrantyDescriptionItems, {
  ItemWarrantyList,
} from 'components/organisms/WarrantyDescriptionItems';
import { IBlackBanner } from 'components/organisms/BlackBanner/interface';
import { graphql, PageProps } from 'gatsby';

type DataProps = {
  warrantyPage: {
    seo: SeoType;
    warranty: {
      intro: ProductCategoryType;
      downloadableMaterials: DownloadableMaterialsType;
      warrantyItems: ItemWarrantyList;
    };
  };
  repeatableComponentsData: {
    repeatableComponents: {
      installationBanner: IBlackBanner;
    };
  };
};

const Warranty = ({
  pageContext,
  data: { warrantyPage, repeatableComponentsData },
}: PageProps<DataProps, PageContextType>) => {
  const { installationBanner } = repeatableComponentsData.repeatableComponents;

  const { intro, downloadableMaterials, warrantyItems } = warrantyPage.warranty;

  return (
    <Layout {...{ seo: warrantyPage.seo }}>
      <Breadcrumb {...{ pageContext }} />
      <ProductCategoryIntro {...intro} />
      <WarrantyDescriptionItems {...warrantyItems} />
      <DownloadableMaterials id="download" {...downloadableMaterials} />
      {installationBanner ? <BlackBanner {...installationBanner} isWarrantyPage /> : null}
    </Layout>
  );
};

export const query = graphql`
  query WarrantyPage($id: String) {
    warrantyPage: wpPage(id: { eq: $id }) {
      seo {
        ...WpSEOFragment
      }
      warranty {
        intro {
          title
          text
          wpImage {
            ...WpImageFragment
          }
        }
        warrantyItems {
          contentItem {
            typeContent
            titleNumber
            subTitle
            listsWarranty {
              ... on WpPage_Warranty_WarrantyItems_contentItem_ListsWarranty_Item {
                titleList
              }
              ... on WpPage_Warranty_WarrantyItems_contentItem_ListsWarranty_SubItemsList {
                titleList
                subItemsList {
                  subTitleItem
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

export default Warranty;
