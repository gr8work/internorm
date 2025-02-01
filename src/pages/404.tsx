import Seo from 'components/atoms/Seo';
import React from 'react';

import Layout from 'templates/Layout';

const NotFoundPage = () => (
  <Layout>
    <h1>404: Not Found</h1>
  </Layout>
);

export default NotFoundPage;

export const Head = () => <Seo title="Nie znaleziono strony" />;
