import { resolve } from 'path';
import { CreatePagesArgs } from 'gatsby';

import { CommonPageQueryType } from 'types';
import { preparePath } from './builders.utils';

export type AboutUsCityPageQueryType = {
  allAboutUsCityPage: {
    nodes: CommonPageQueryType[];
  };
};

const component = resolve('src/templates/AboutUsCityPage.tsx');

export default async ({ actions: { createPage }, graphql, reporter }: CreatePagesArgs) => {
  const result = await graphql<AboutUsCityPageQueryType>(`
    {
      allAboutUsCityPage: allWpPage(filter: { template: { templateName: { eq: "About" } } }) {
        nodes {
          title
          uri
          id
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while creating ** About Us City Page ** by GraphQL query.`);
    return;
  }

  if (!result?.data?.allAboutUsCityPage) {
    reporter.error(`There is no data from the query in ** About Us City Page Builder **`);

    return;
  }

  const {
    data: {
      allAboutUsCityPage: { nodes },
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
