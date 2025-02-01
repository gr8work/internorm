import { resolve } from 'path';
import { CreatePagesArgs } from 'gatsby';

import { CommonPageQueryType } from 'types';
import { preparePath } from './builders.utils';

export type SlidingDoorsAndPanoramicGlazingPageQueryType = {
  slidingDoorsAndPanoramicGlazing: CommonPageQueryType;
};

const component = resolve('src/templates/SlidingDoorsAndPanoramicGlazingPage.tsx');

export default async ({ actions: { createPage }, graphql, reporter }: CreatePagesArgs) => {
  const result = await graphql<SlidingDoorsAndPanoramicGlazingPageQueryType>(`
    {
      slidingDoorsAndPanoramicGlazing: wpPage(
        template: { templateName: { eq: "SlidingDoorsAndPanoramicGlazingPage" } }
      ) {
        title
        uri
        id
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `Error while creating ** Front Sliding Doors And Panoramic Glazing Page ** by GraphQL query.`
    );
    return;
  }

  if (!result?.data?.slidingDoorsAndPanoramicGlazing) {
    reporter.error(
      `There is no data from the query in ** Front Sliding Doors And Panoramic Glazing Page Builder **`
    );

    return;
  }

  const {
    data: {
      slidingDoorsAndPanoramicGlazing: { title, uri, id },
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
