import React from 'react';
import { Breadcrumb as BreadcrumbPluginComponent } from 'gatsby-plugin-breadcrumb';

import { DISABLE_LINK } from './Breadcrumb.constants';

import type { PageContextType } from 'types';

export type BreadcrumbType = {
  pageContext: PageContextType;
  customCrumbLabel?: string;
};

const Breadcrumb = ({ pageContext, customCrumbLabel }: BreadcrumbType) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;

  const customCrumbs = crumbs.map((crumb) => ({
    ...crumb,
    crumbLabel: crumb.crumbLabel.replaceAll('-', ' '),
  }));

  const disableLinks = [
    DISABLE_LINK.PRODUCTS,
    DISABLE_LINK.REALIZATIONS,
    DISABLE_LINK.HOME_STORIES,
  ];

  return (
    <BreadcrumbPluginComponent
      crumbs={customCrumbs}
      disableLinks={disableLinks}
      crumbLabel={customCrumbLabel ?? null}
    />
  );
};

export default Breadcrumb;
