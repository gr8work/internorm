import React from 'react';
import 'gatsby-plugin-breadcrumb/gatsby-plugin-breadcrumb.css';

export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: 'pl' });
  setHeadComponents([
    <script
      key="cookieyes"
      id="cookieyes"
      type="text/javascript"
      src={`https://cdn-cookieyes.com/client_data/${process.env.COOKIES_KEY}/script.js`}
    />,
  ]);
};
