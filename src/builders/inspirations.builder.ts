import { resolve } from 'path';
import { CreatePagesArgs } from 'gatsby';

import { CommonPageQueryType } from 'types';
import { preparePath } from './builders.utils';

export type InspirationsPageQueryType = {
  inspirationsPage: CommonPageQueryType & {
    slug: string;
  };
};

const component = resolve('src/templates/InspirationsPage.tsx');

export default async ({ actions: { createPage }, graphql, reporter }: CreatePagesArgs) => {
  const result = await graphql<InspirationsPageQueryType>(`
    {
      inspirationsPage: wpPage(slug: { eq: "inspiracje" }) {
        title
        uri
        slug
        id
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while creating ** Inspirations Page ** by GraphQL query.`);
    return;
  }

  if (!result?.data?.inspirationsPage) {
    reporter.error(`There is no data from the query in ** Inspirations Page Builder **`);

    return;
  }

  const {
    data: {
      inspirationsPage: { title, uri, slug, id },
    },
  } = result;

  createPage({
    path: uri ? preparePath(uri) : `/${slug}/`,
    component,
    context: {
      title,
      id,
    },
  });
};
