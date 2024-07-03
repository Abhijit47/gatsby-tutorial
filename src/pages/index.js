// step1
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Layout from '../components/layout';

// step2
const IndexPage = () => {
  return (
    <Layout pageTitle={'Home page'}>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        src='../images/icon.png'
        alt='a image'
        className={''}
        style={{ width: '2rem', height: '2rem' }}
      />
      <StaticImage
        src='https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large'
        alt='a image'
      />
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
