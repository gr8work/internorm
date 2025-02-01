import { resolve } from 'path';
import { CreatePagesArgs } from 'gatsby';

import { CommonPageQueryType } from 'types';
import { preparePath } from './builders.utils';

export type HomePageQueryType = {
  homePage: CommonPageQueryType;
};

const component = resolve('src/templates/HomePage.tsx');

export default async ({ actions: { createPage }, graphql, reporter }: CreatePagesArgs) => {
  const result = await graphql<HomePageQueryType>(`
    {
      homePage: wpPage(slug: { eq: "strona-glowna" }) {
        title
        uri
        id
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while creating ** Home Page ** by GraphQL query.`);
    return;
  }

  if (!result?.data?.homePage) {
    reporter.error(`There is no data from the query in ** Home Page Builder **`);

    return;
  }

  const {
    data: {
      homePage: { title, uri, id },
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
