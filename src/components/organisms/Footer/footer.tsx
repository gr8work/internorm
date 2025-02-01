import React from 'react';
import Container from 'components/atoms/Container';
import { CopyrightElement, CopyrightFooterProps } from 'components/molecules/Copyright/copyright';
import {
  FirstColumnFooter,
  FirstInsideFooterColumn,
  SecondColumn,
  WrappeFooter,
  SecondInsideFooterColumn,
  BottomLinksFooter,
} from './styles';
import BannerFooter, { BannerFooterProps } from 'components/molecules/BannerFooter';
import { FirstRowFooter, FooterInfoType } from 'components/molecules/FirstRowFooter/FirstRowFooter';
import ColumnLinksBottomFooter from 'components/molecules/ColumnLinksBottomFooter';
import ColumnLinksFooter from 'components/molecules/ColumnLinksFooter';
import { useBreakpoints } from 'hooks/useBreakpoints';
import { graphql, useStaticQuery } from 'gatsby';

type FooterDataType = {
  repeatableComponentsData: {
    repeatableComponents: {
      showroom: BannerFooterProps;
      footerInfo: FooterInfoType;
    };
  };
};

export const Footer = () => {
  const { isSmall } = useBreakpoints();

  const {
    repeatableComponentsData: { repeatableComponents },
  } = useStaticQuery<FooterDataType>(graphql`
    query {
      repeatableComponentsData: wpPage(template: { templateName: { eq: "RepeatableComponents" } }) {
        repeatableComponents {
          showroom {
            heading
            text
            locations {
              url {
                ... on WpPage {
                  id
                  uri
                }
              }
              name
            }
            locationHeading
            image {
              ...WpImageFragment
            }
            buttonLabel
          }
          footerInfo {
            aboutUsText
            copyright {
              copyrightText
              list: listCopyrigh {
                text: textCopyrigh
                link {
                  target
                  title
                  url
                }
              }
            }
            contact {
              heading
              contactList {
                type
                visibleText
                formattedText
              }
            }
            otherLinks {
              architectLink {
                ... on WpPage {
                  uri
                }
              }
              partnerLink {
                ... on WpPage {
                  uri
                }
              }
            }
            socialMediaList {
              type
              link {
                url
                target
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Container>
      <WrappeFooter>
        <FirstColumnFooter>
          <FirstRowFooter
            {...repeatableComponents.footerInfo}
            {...{ bannerFooter: repeatableComponents.showroom }}
          />
        </FirstColumnFooter>
        <SecondColumn>
          <FirstInsideFooterColumn>
            <ColumnLinksFooter />
          </FirstInsideFooterColumn>
          {isSmall ? (
            ''
          ) : (
            <SecondInsideFooterColumn id="locations">
              <BannerFooter {...repeatableComponents.showroom} />
            </SecondInsideFooterColumn>
          )}
          <BottomLinksFooter>
            <ColumnLinksBottomFooter />
          </BottomLinksFooter>
          <CopyrightElement {...repeatableComponents.footerInfo.copyright} />
        </SecondColumn>
      </WrappeFooter>
    </Container>
  );
};
