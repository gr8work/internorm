import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { useFlatListToHierarchical } from 'hooks/useFlatListToHierarchical';
import { Wrapper } from './styles';
import Hamburger from 'components/atoms/Hamburger';
import useScrollPosition from '@react-hook/window-scroll';
import HeaderBar from 'components/molecules/HeaderBar';
import NavBar from 'components/molecules/NavBar';

import SideBar from 'components/molecules/SideBar';
import useToggle from 'hooks/useToggle';

type HeaderType = {
  isNavBarTransparent?: boolean;
};

export const Header = ({ isNavBarTransparent }: HeaderType) => {
  const data = useStaticQuery(graphql`
    {
      headerBar: wpMenu(name: { eq: "headerBar" }) {
        menuItems {
          nodes {
            id
            label
            uri
            title
          }
        }
      }
      navBar: wpMenu(name: { eq: "navBar" }) {
        menuItems {
          nodes {
            id
            label
            cssClasses
            parentId
            uri
            title
          }
        }
      }
      sideBar: wpMenu(name: { eq: "sideBar" }) {
        menuItems {
          nodes {
            id
            label
            cssClasses
            parentId
            uri
            title
            childItems {
              nodes {
                id
                label
                cssClasses
                parentId
                uri
                title
                childItems {
                  nodes {
                    id
                    label
                    cssClasses
                    parentId
                    uri
                    title
                    childItems {
                      nodes {
                        id
                        label
                        cssClasses
                        parentId
                        uri
                        title
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const scrollY = useScrollPosition(120);
  const [isOpen, toggleIsOpen] = useToggle();
  const [index, setIndex] = useState<number | null>(null);

  const openSideBar = () => {
    if (!isOpen) {
      toggleIsOpen();
    }
    setIndex(0);
  };

  useEffect(() => {
    if (!isOpen) {
      setIndex(null);
    }
  }, [isOpen]);

  return (
    <Wrapper>
      <HeaderBar items={data.headerBar.menuItems.nodes} />
      <NavBar
        links={data.navBar.menuItems.nodes}
        src="internorm-logo.webp"
        to="/"
        alt="Internorm logo"
        activeScroll={scrollY >= 150}
        active={isNavBarTransparent ? isOpen : true}
        handleClick={() => openSideBar()}
      >
        <Hamburger
          {...{ toggleIsOpen, isOpen }}
          data-color={scrollY >= 150 || isOpen || !isNavBarTransparent ? 'dark' : 'light'}
        />
      </NavBar>
      <SideBar
        items={useFlatListToHierarchical(data.sideBar.menuItems.nodes)}
        isOpen={isOpen}
        text="Strefa dla Architekta"
        questionText="Wyślij zapytanie"
        questionTo="/wyslij-zapytanie"
        index={index}
        changedIndex={(index: any) => setIndex(index)}
      />
    </Wrapper>
  );
};
