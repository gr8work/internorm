import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { SubTitleFooter, SubTitleFooterText } from 'components/molecules/FirstRowFooter/styles';
import { ListUlFooter } from 'components/organisms/Footer/styles';
import Link from 'components/atoms/Link';

export const ColumnLinksBottomFooter = () => {
  const data = useStaticQuery(graphql`
    {
      footerInspiration: wpMenu(name: {eq: "footerInspiration"}) {
        menuItems {
          nodes {
            id
            label
            uri
          }
        }
      }
      footerWhy: wpMenu(name: {eq: "footerWhy"}) {
        menuItems {
          nodes {
            id
            label
            uri
          }
        }
      }
      footerAbout: wpMenu(name: {eq: "footerAbout"}) {
        menuItems {
          nodes {
            id
            label
            uri
          }
        }
      }
    }
  `);

  return (
    <>
      <div>
        <SubTitleFooter to="/inspiracje/">INSPIRACJE</SubTitleFooter>
        <ListUlFooter>
          {data.footerInspiration.menuItems.nodes.map((item: {id: string, label: string, uri:string}) => (
            <li key={item.id}>
              <Link to={item.uri}>{item.label}</Link>
            </li>
          ))}
        </ListUlFooter>
      </div>
      <div>
        <SubTitleFooter to="/dlaczego-internorm/">DLACZEGO INTERNORM</SubTitleFooter>
        <ListUlFooter>
          {data.footerWhy.menuItems.nodes.map((item: {id: string, label: string, uri:string}) => (
            <li key={item.id}>
              <Link to={item.uri}>{item.label}</Link>
            </li>
          ))}
        </ListUlFooter>
      </div>
      <div>
        <SubTitleFooterText>O NAS</SubTitleFooterText>
        <ListUlFooter>
          {data.footerAbout.menuItems.nodes.map((item: {id: string, label: string, uri:string}) => (
            <li key={item.id}>
              <Link to={item.uri}>{item.label}</Link>
            </li>
          ))}
        </ListUlFooter>
        <SubTitleFooter to="/gwarancja/#download">MATERIAŁY DO POBRANIA</SubTitleFooter>
      </div>
    </>
  )
};
