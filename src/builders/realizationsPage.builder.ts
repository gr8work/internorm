import { resolve } from 'path';
import { CreatePagesArgs } from 'gatsby';

import { CommonPageQueryType } from 'types';
import { preparePath } from './builders.utils';

export type RealizationsPageQueryType = {
  allRealizationsPage: {
    nodes: CommonPageQueryType[];
  };
};

const component = resolve('src/templates/RealizationsPage.tsx');

export default async ({ actions: { createPage }, graphql, reporter }: CreatePagesArgs) => {
  const result = await graphql<RealizationsPageQueryType>(`
    {
      allRealizationsPage: allWpPost(
        filter: { categories: { nodes: { elemMatch: { slug: { eq: "realizacje" } } } } }
      ) {
        nodes {
          title
          uri
          id
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while creating ** Realizations Page ** by GraphQL query.`);
    return;
  }

  if (!result?.data?.allRealizationsPage) {
    reporter.error(`There is no data from the query in ** Realizations Page Builder **`);

    return;
  }

  const {
    data: {
      allRealizationsPage: { nodes },
    },
  } = result;

  nodes.forEach(({ title, uri, id }) => {
    createPage({
      path: preparePath(uri),
      component,
      context: {
        title,
        id,
      },
    });
  });
};
