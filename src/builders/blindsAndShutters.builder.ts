import { resolve } from 'path';
import { CreatePagesArgs } from 'gatsby';

import { CommonPageQueryType } from 'types';
import { preparePath } from './builders.utils';

export type BlindsAndShuttersPageQueryType = {
  blindsAndShutters: CommonPageQueryType;
};

const component = resolve('src/templates/BlindsAndShuttersPage.tsx');

export default async ({ actions: { createPage }, graphql, reporter }: CreatePagesArgs) => {
  const result = await graphql<BlindsAndShuttersPageQueryType>(`
    {
      blindsAndShutters: wpPage(template: { templateName: { eq: "BlindsAndShuttersPage" } }) {
        title
        uri
        id
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while creating ** Blinds And Shutters Page ** by GraphQL query.`);
    return;
  }

  if (!result?.data?.blindsAndShutters) {
    reporter.error(`There is no data from the query in ** Blinds And Shutters Page Builder **`);

    return;
  }

  const {
    data: {
      blindsAndShutters: { title, uri, id },
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
