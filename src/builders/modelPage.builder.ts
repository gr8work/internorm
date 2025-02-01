import { resolve } from 'path';
import { CreatePagesArgs } from 'gatsby';

import { CommonPageQueryType } from 'types';
import { preparePath } from './builders.utils';

export type ModelPageQueryType = {
  allModelPage: {
    nodes: CommonPageQueryType[];
  };
};

const component = resolve('src/templates/ModelPage.tsx');

export default async ({ actions: { createPage }, graphql, reporter }: CreatePagesArgs) => {
  const result = await graphql<ModelPageQueryType>(`
    {
      allModelPage: allWpPage(filter: { template: { templateName: { eq: "Models" } } }) {
        nodes {
          title
          uri
          id
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while creating ** Model Page ** by GraphQL query.`);
    return;
  }

  if (!result?.data?.allModelPage) {
    reporter.error(`There is no data from the query in ** Model Page Builder **`);

    return;
  }

  const {
    data: {
      allModelPage: { nodes },
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
