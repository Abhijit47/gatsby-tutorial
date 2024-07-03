import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

export default function BlogPage({ data }) {
  // console.log(createRemoteFileNode(''));
  // console.log(data);
  return (
    <Layout pageTitle={'My Blog Posts'}>
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
      <p>My cool posts will go here</p>
    </Layout>
  );
}

export const query = graphql`
  query {
    allFile(
      sort: { sourceInstanceName: ASC }
      filter: { sourceInstanceName: { eq: "blog" } }
    ) {
      nodes {
        id
        name
        publicURL
        sourceInstanceName
      }
    }
  }
`;

export const Head = ({ data }) => {
  console.log('head', data);
  return <Seo title={'My Blog Posts'} />;
};
