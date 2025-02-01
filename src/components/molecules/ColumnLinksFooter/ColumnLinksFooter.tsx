import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { ListUlFooter } from 'components/organisms/Footer/styles';
import { SubTitleFooter } from 'components/molecules/FirstRowFooter/styles';
import Link from 'components/atoms/Link';

export const ColumnLinksFooter = () => {
  const data = useStaticQuery(graphql`
    {
      footerOffer: wpMenu(name: {eq: "footerOffer"}) {
        menuItems {
          nodes {
            id
            label
            uri
            cssClasses
          }
        }
      }
      footerOfferSecond: wpMenu(name: {eq: "footerOfferSecond"}) {
        menuItems {
          nodes {
            id
            label
            uri
            cssClasses
          }
        }
      }
    }
  `);
  
  return (
    <>
      <ListUlFooter>
        <SubTitleFooter>OFERTA</SubTitleFooter>
        {data.footerOffer.menuItems.nodes.map((item: {id: string, label: string, uri:string}) => (
          <li key={item.id}>
            <Link to={item.uri}>{item.label}</Link>
          </li>
        ))}
      </ListUlFooter>
      <ListUlFooter>
        {data.footerOfferSecond.menuItems.nodes.map((item: {id: string, label: string, uri:string, cssClasses: string[]}) => (
          <li key={item.id} className={item.cssClasses.length > 0 ? item.cssClasses[0] : ''}>
            <Link to={item.uri}>{item.label}</Link>
          </li>
        ))}
      </ListUlFooter>
    </>
  )
};
