import { resolve } from 'path';
import { CreatePagesArgs } from 'gatsby';

import { CommonPageQueryType } from 'types';
import { preparePath } from './builders.utils';

export type WindowGuidesPageQueryType = {
  windowGuidesPage: CommonPageQueryType & {
    slug: string;
  };
};

const component = resolve('src/templates/WindowGuidesPage.tsx');

export default async ({ actions: { createPage }, graphql, reporter }: CreatePagesArgs) => {
  const result = await graphql<WindowGuidesPageQueryType>(`
    {
      windowGuidesPage: wpPage(slug: { eq: "poradnik-okienny" }) {
        title
        uri
        slug
        id
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while creating ** window Guides Page ** by GraphQL query.`);
    return;
  }

  if (!result?.data?.windowGuidesPage) {
    reporter.error(`There is no data from the query in ** window Guides Page Builder **`);

    return;
  }

  const {
    data: {
      windowGuidesPage: { title, uri, slug, id },
    },
  } = result;

  createPage({
    path: uri ? preparePath(uri) : `/${slug}/`,
    component,
    context: {
      title,
      id,
    },
  });
};
