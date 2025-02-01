import { resolve } from 'path';
import { CreatePagesArgs } from 'gatsby';

import { CommonPageQueryType } from 'types';

export type ArchitectZonePageQueryType = {
  architectZonePage: CommonPageQueryType;
};

const component = resolve('src/templates/ArchitectZonePage.tsx');

export default async ({ actions: { createPage }, graphql, reporter }: CreatePagesArgs) => {
  const result = await graphql<ArchitectZonePageQueryType>(`
    {
      architectZonePage: wpPage(slug: { eq: "strefa-architekta" }) {
        title
        uri
        id
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while creating ** Architect Zone Page ** by GraphQL query.`);
    return;
  }

  if (!result?.data?.architectZonePage) {
    reporter.error(`There is no data from the query in ** Architect Zone Page Builder **`);

    return;
  }

  const {
    data: {
      architectZonePage: { title, uri, id },
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
