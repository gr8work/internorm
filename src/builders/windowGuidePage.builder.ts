import { resolve } from 'path';
import { CreatePagesArgs } from 'gatsby';

import { CommonPageQueryType } from 'types';
import { preparePath } from './builders.utils';

export type WindowGuidePageQueryType = {
  allWindowGuidePage: {
    nodes: (CommonPageQueryType & { slug: string })[];
  };
};

const component = resolve('src/templates/WindowGuidePage.tsx');

export default async ({
  actions: { createPage, createRedirect },
  graphql,
  reporter,
}: CreatePagesArgs) => {
  const result = await graphql<WindowGuidePageQueryType>(`
    {
      allWindowGuidePage: allWpPost(
        filter: { categories: { nodes: { elemMatch: { slug: { eq: "poradnik-okienny" } } } } }
      ) {
        nodes {
          title
          uri
          id
          slug
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while creating ** Window Guide Page ** by GraphQL query.`);
    return;
  }

  if (!result?.data?.allWindowGuidePage) {
    reporter.error(`There is no data from the query in ** Window Guide Page Builder **`);

    return;
  }

  const {
    data: {
      allWindowGuidePage: { nodes },
    },
  } = result;

  nodes.forEach(({ title, uri, id, slug }) => {
    createPage({
      path: preparePath(uri),
      component,
      context: {
        title,
        id,
        uri,
      },
    });

    createRedirect({
      fromPath: `/poradnik/${slug}`,
      toPath: uri,
      redirectInBrowser: true,
      isPermanent: true,
    });
  });
};
