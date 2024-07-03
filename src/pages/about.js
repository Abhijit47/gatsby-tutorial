import * as React from 'react';
import Layout from '../components/layout';

export default function AboutPage() {
  return (
    <Layout pageTitle={'About Page'}>
      <p>
        Hi There! I'm the proud creator of this site, which i buit with Gatsby.
      </p>
    </Layout>
  );
}

export const Head = () => (
  <>
    <title>About Page</title>
    <meta name='description' content='About Description' />
  </>
);
