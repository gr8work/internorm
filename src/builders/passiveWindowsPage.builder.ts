import { resolve } from 'path';
import { CreatePagesArgs } from 'gatsby';

import { CommonPageQueryType } from 'types';
import { preparePath } from './builders.utils';

export type PassiveWindowsPageQueryType = {
  passiveWindows: CommonPageQueryType;
};

const component = resolve('src/templates/PassiveWindowsPage.tsx');

export default async ({ actions: { createPage }, graphql, reporter }: CreatePagesArgs) => {
  const result = await graphql<PassiveWindowsPageQueryType>(`
    {
      passiveWindows: wpPage(template: { templateName: { eq: "PassiveWindowsPage" } }) {
        title
        uri
        id
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while creating ** Passive Windows Page ** by GraphQL query.`);
    return;
  }

  if (!result?.data?.passiveWindows) {
    reporter.error(`There is no data from the query in ** Passive Windows Page Builder **`);

    return;
  }

  const {
    data: {
      passiveWindows: { title, uri, id },
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
