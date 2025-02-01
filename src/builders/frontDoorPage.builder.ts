import { resolve } from 'path';
import { CreatePagesArgs } from 'gatsby';

import { CommonPageQueryType } from 'types';
import { preparePath } from './builders.utils';

export type FrontDoorPageQueryType = {
  frontDoor: CommonPageQueryType;
};

const component = resolve('src/templates/FrontDoorPage.tsx');

export default async ({ actions: { createPage }, graphql, reporter }: CreatePagesArgs) => {
  const result = await graphql<FrontDoorPageQueryType>(`
    {
      frontDoor: wpPage(template: { templateName: { eq: "FrontDoorPage" } }) {
        title
        uri
        id
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while creating ** Front Door Page ** by GraphQL query.`);
    return;
  }

  if (!result?.data?.frontDoor) {
    reporter.error(`There is no data from the query in ** Front Door Page Builder **`);

    return;
  }

  const {
    data: {
      frontDoor: { title, uri, id },
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
