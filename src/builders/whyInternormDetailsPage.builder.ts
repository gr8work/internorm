import { resolve } from 'path';
import { CreatePagesArgs } from 'gatsby';

import { CommonPageQueryType } from 'types';
import { preparePath } from './builders.utils';

export type WhyInternormDetailsPageQueryType = {
  allWhyInternormDetailsPage: {
    nodes: CommonPageQueryType[];
  };
};

const component = resolve('src/templates/WhyInternormDetailsPage.tsx');

export default async ({ actions: { createPage }, graphql, reporter }: CreatePagesArgs) => {
  const result = await graphql<WhyInternormDetailsPageQueryType>(`
    {
      allWhyInternormDetailsPage: allWpPage(
        filter: { template: { templateName: { eq: "WhyInternormDetails" } } }
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
    reporter.panicOnBuild(
      `Error while creating ** Why Internorm Details Page ** by GraphQL query.`
    );
    return;
  }

  if (!result?.data?.allWhyInternormDetailsPage) {
    reporter.error(`There is no data from the query in ** Why Internorm Details Page Builder **`);

    return;
  }

  const {
    data: {
      allWhyInternormDetailsPage: { nodes },
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
