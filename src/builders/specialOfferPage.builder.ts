import { resolve } from 'path';
import { CreatePagesArgs } from 'gatsby';

import { CommonPageQueryType } from 'types';
import { preparePath } from './builders.utils';

export type SpecialOfferPageQueryType = {
  allSpecialOfferPage: {
    nodes: CommonPageQueryType[];
  };
};

const component = resolve('src/templates/SpecialOfferPage.tsx');

export default async ({ actions: { createPage }, graphql, reporter }: CreatePagesArgs) => {
  const result = await graphql<SpecialOfferPageQueryType>(`
    {
      allSpecialOfferPage: allWpPage(
        filter: { template: { templateName: { eq: "SpecialOffer" } } }
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
    reporter.panicOnBuild(`Error while creating ** Special Offer Page ** by GraphQL query.`);
    return;
  }

  if (!result?.data?.allSpecialOfferPage) {
    reporter.error(`There is no data from the query in ** Special Offer Page Builder **`);

    return;
  }

  const {
    data: {
      allSpecialOfferPage: { nodes },
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
