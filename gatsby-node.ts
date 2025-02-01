import { redirects } from './redirects';
import type { GatsbyNode } from 'gatsby';

import homePageBuilder from './src/builders/homePage.builder';
import passiveWindowsPageBuilder from './src/builders/passiveWindowsPage.builder';
import categoryPageBuilder from './src/builders/categoryPage.builder';
import modelPageBuilder from './src/builders/modelPage.builder';
import frontDoorPageBuilder from './src/builders/frontDoorPage.builder';
import slidingDoorsAndPanoramicGlazingPageBuilder from './src/builders/slidingDoorsAndPanoramicGlazingPage.builder';
import blindsAndShuttersPageBuilder from './src/builders/blindsAndShutters.builder';
import whyInternormPageBuilder from './src/builders/whyInternormPage.builder';
import aboutUsCityPageBuilder from './src/builders/aboutUsCityPage.builder';
import warrantyPageBuilder from './src/builders/warrantyPage.builder';
import specialOfferPageBuilder from './src/builders/specialOfferPage.builder';
import windowGuidePageBuilder from './src/builders/windowGuidePage.builder';
import realizationsPageBuilder from './src/builders/realizationsPage.builder';
import homeStoriesPageBuilder from './src/builders/homeStoriesPage.builder';
import inspirationsPageBuilder from './src/builders/inspirations.builder';
import whyInternormPageDetailsBuilder from './src/builders/whyInternormDetailsPage.builder';
import architectZonePageBuilder from './src/builders/architectZonePage.builder';
import partnerZonePageBuilder from './src/builders/partnerZonePage.builder';
import windowGuidesPageBuilder from './src/builders/windowGuidesPage.builder';

export const createPages: GatsbyNode['createPages'] = async (gatsbyNode) => {
  const builders = [
    homePageBuilder,
    passiveWindowsPageBuilder,
    categoryPageBuilder,
    modelPageBuilder,
    frontDoorPageBuilder,
    slidingDoorsAndPanoramicGlazingPageBuilder,
    blindsAndShuttersPageBuilder,
    whyInternormPageBuilder,
    aboutUsCityPageBuilder,
    warrantyPageBuilder,
    specialOfferPageBuilder,
    windowGuidePageBuilder,
    realizationsPageBuilder,
    homeStoriesPageBuilder,
    inspirationsPageBuilder,
    whyInternormPageDetailsBuilder,
    architectZonePageBuilder,
    partnerZonePageBuilder,
    windowGuidesPageBuilder,
  ].map((builder) => builder(gatsbyNode));

  const {
    actions: { createRedirect },
  } = gatsbyNode;

  createRedirect({
    fromPath: '/home',
    toPath: '/',
    redirectInBrowser: true,
    isPermanent: true,
  });

  // redirects.forEach((redirect) =>
  //   createRedirect({
  //     fromPath: redirect.fromPath,
  //     toPath: redirect.toPath,
  //     redirectInBrowser: true,
  //     isPermanent: true,
  //   })
  // );

  await Promise.all(builders);
};
