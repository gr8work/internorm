import { resolve } from 'path';
import { CreatePagesArgs } from 'gatsby';

import { CommonPageQueryType } from 'types';
import { preparePath } from './builders.utils';

export type CategoryPageQueryType = {
  allCategoryPage: {
    nodes: CommonPageQueryType[];
  };
};

const component = resolve('src/templates/CategoryPage.tsx');

export default async ({ actions: { createPage }, graphql, reporter }: CreatePagesArgs) => {
  const result = await graphql<CategoryPageQueryType>(`
    {
      allCategoryPage: allWpPage(filter: { template: { templateName: { eq: "Categories" } } }) {
        nodes {
          title
          uri
          id
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while creating ** Category Page ** by GraphQL query.`);
    return;
  }

  if (!result?.data?.allCategoryPage) {
    reporter.error(`There is no data from the query in ** Category Page Builder **`);

    return;
  }

  const {
    data: {
      allCategoryPage: { nodes },
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
