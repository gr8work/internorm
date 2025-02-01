import { resolve } from 'path';
import { CreatePagesArgs } from 'gatsby';

import { CommonPageQueryType } from 'types';
import { preparePath } from './builders.utils';

export type HomeStoriesPageQueryType = {
  allHomeStoriesPage: {
    nodes: CommonPageQueryType[];
  };
};

const component = resolve('src/templates/HomeStoriesPage.tsx');

export default async ({ actions: { createPage }, graphql, reporter }: CreatePagesArgs) => {
  const result = await graphql<HomeStoriesPageQueryType>(`
    {
      allHomeStoriesPage: allWpPost(
        filter: { categories: { nodes: { elemMatch: { slug: { eq: "home-stories" } } } } }
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
    reporter.panicOnBuild(`Error while creating ** Home Stories Page ** by GraphQL query.`);
    return;
  }

  if (!result?.data?.allHomeStoriesPage) {
    reporter.error(`There is no data from the query in ** Home Stories Page Builder **`);

    return;
  }

  const {
    data: {
      allHomeStoriesPage: { nodes },
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
