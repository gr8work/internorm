import { resolve } from 'path';
import { CreatePagesArgs } from 'gatsby';

import { CommonPageQueryType } from 'types';
import { preparePath } from './builders.utils';

export type WarrantyPageQueryType = {
  warrantyPage: CommonPageQueryType;
};

const component = resolve('src/templates/WarrantyPage.tsx');

export default async ({ actions: { createPage }, graphql, reporter }: CreatePagesArgs) => {
  const result = await graphql<WarrantyPageQueryType>(`
    {
      warrantyPage: wpPage(slug: { eq: "gwarancja" }) {
        title
        uri
        id
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while creating ** Warranty Page ** by GraphQL query.`);
    return;
  }

  if (!result?.data?.warrantyPage) {
    reporter.error(`There is no data from the query in ** Warranty Page Builder **`);

    return;
  }

  const {
    data: {
      warrantyPage: { title, uri, id },
    },
  } = result;

  createPage({
    path: preparePath(uri),
    component,
    context: {
      title,
      id,
    },
  });
};
