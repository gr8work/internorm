import { config } from 'dotenv';
import path from 'path';
import type { GatsbyConfig } from 'gatsby';
import { redirects } from './redirects';

config({
  path: `.env.${process.env.NODE_ENV}`,
});

const PROJECT_ROOT = path.resolve(__dirname);

const siteMetadata: GatsbyConfig['siteMetadata'] = {
  siteUrl: 'https://www.okna-pasywne.pl/',
  title: 'Internorm',
  description: `Opis strony`,
  twitterUsername: `@IFTMInternorm`,
  image: `/logo.webp`,
};

const plugins: GatsbyConfig['plugins'] = [
  {
    resolve: `gatsby-source-wordpress`,
    options: {
      url: process.env.WPGRAPHQL_URL,
    },
  },
  `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-plugin-sharp`,
    options: {
      // Defaults used for gatsbyImageData and StaticImage
      defaults: {},
      // Relates to "options.failOn" in https://sharp.pixelplumbing.com/api-constructor#parameters
      failOn: `warning`,
    },
  },
  `gatsby-plugin-image`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/assets/images/`,
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Internorm`,
      short_name: `Internorm`,
      start_url: `/`,
      background_color: `#ffffff`,
      theme_color: `#663399`,
      display: `minimal-ui`,
      icon: `${__dirname}/static/favicon.png`,
    },
  },
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-styled-components`,
  {
    resolve: 'gatsby-plugin-root-import',
    options: {
      assets: path.join(PROJECT_ROOT, 'src/assets'),
      atoms: path.join(PROJECT_ROOT, 'src/components/atoms'),
      molecules: path.join(PROJECT_ROOT, 'src/components/molecules'),
      organisms: path.join(PROJECT_ROOT, 'src/components/organisms'),
      data: path.join(PROJECT_ROOT, 'src/data'),
      hooks: path.join(PROJECT_ROOT, 'src/hooks'),
      pages: path.join(PROJECT_ROOT, 'src/pages'),
      templates: path.join(PROJECT_ROOT, 'src/templates'),
      builders: path.join(PROJECT_ROOT, 'src/builders'),
      theme: path.join(PROJECT_ROOT, 'src/theme'),
      types: path.join(PROJECT_ROOT, 'src/types'),
      utils: path.join(PROJECT_ROOT, 'src/utils'),
      src: path.join(PROJECT_ROOT, 'src'),
    },
  },
  {
    resolve: `gatsby-plugin-breadcrumb`,
    options: {
      useAutoGen: true,
      autoGenHomeLabel: `INTERNORM`,
    },
  },
  {
    resolve: 'gatsby-plugin-google-tagmanager',
    options: {
      id: 'GTM-PRFR32',
    },
  },
  `gatsby-plugin-advanced-sitemap`,
  {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://www.okna-pasywne.pl',
      sitemap: 'https://www.okna-pasywne.pl/sitemap.xml',
      policy: [{ userAgent: '*', allow: '/' }],
    },
  },
  {
    resolve: 'gatsby-plugin-htaccess',
    options: {
      redirect: ['RewriteRule ^not-existing-url/?$ /existing-url [R=301,L,NE]', ...redirects],
    },
  },
];

const gatsbyConfig: GatsbyConfig = {
  siteMetadata,
  plugins,
};

export default gatsbyConfig;
