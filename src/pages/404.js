import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <Helmet title="Page Not Found">
      <html lang="en" />
    </Helmet>
    <h1>Page Not Found</h1>
  </Layout>
);
