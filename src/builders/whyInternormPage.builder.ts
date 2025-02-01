import { resolve } from 'path';
import { CreatePagesArgs } from 'gatsby';

import { CommonPageQueryType } from 'types';
import { preparePath } from './builders.utils';

export type WhyInternormPageQueryType = {
  whyInternorm: CommonPageQueryType;
};

const component = resolve('src/templates/WhyInternormPage.tsx');

export default async ({ actions: { createPage }, graphql, reporter }: CreatePagesArgs) => {
  const result = await graphql<WhyInternormPageQueryType>(`
    {
      whyInternorm: wpPage(slug: { eq: "dlaczego-internorm" }) {
        title
        uri
        id
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while creating ** Why Internorm Page ** by GraphQL query.`);
    return;
  }

  if (!result?.data?.whyInternorm) {
    reporter.error(`There is no data from the query in ** Why Internorm Page Builder **`);

    return;
  }

  const {
    data: {
      whyInternorm: { title, uri, id },
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
