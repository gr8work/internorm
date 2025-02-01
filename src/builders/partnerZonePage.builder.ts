import { resolve } from 'path';
import { CreatePagesArgs } from 'gatsby';

import { CommonPageQueryType } from 'types';

export type PartnerZonePageQueryType = {
  partnerZonePage: CommonPageQueryType;
};

const component = resolve('src/templates/PartnerZonePage.tsx');

export default async ({ actions: { createPage }, graphql, reporter }: CreatePagesArgs) => {
  const result = await graphql<PartnerZonePageQueryType>(`
    {
      partnerZonePage: wpPage(slug: { eq: "strefa-partnera" }) {
        title
        uri
        id
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while creating ** Partner Zone Page ** by GraphQL query.`);
    return;
  }

  if (!result?.data?.partnerZonePage) {
    reporter.error(`There is no data from the query in ** Partner Zone Page Builder **`);

    return;
  }

  const {
    data: {
      partnerZonePage: { title, uri, id },
    },
  } = result;

  createPage({
    path: uri,
    component,
    context: {
      title,
      id,
    },
  });
};
