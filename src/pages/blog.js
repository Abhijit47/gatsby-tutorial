import { graphql, Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

export default function BlogPage({ data }) {
  // console.log(createRemoteFileNode(''));
  // console.log(data);
  return (
    <Layout pageTitle={'My Blog Posts'}>
      {/* <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul> */}

      <ul>
        {data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))}
      </ul>
      <p>My cool posts will go here</p>
    </Layout>
  );
}

/*
Add the query into your component.
Use page queries for page components.
Use useStaticQuery for “building block” components.
*/

// Pull data page query
// export const query = graphql`
//   query {
//     allFile(
//       sort: { sourceInstanceName: ASC }
//       filter: { sourceInstanceName: { eq: "blog" } }
//     ) {
//       nodes {
//         id
//         name
//         publicURL
//         sourceInstanceName
//       }
//     }
//   }
// `;

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY", fromNow: false)
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = ({ data }) => {
  // console.log('head', data);
  return <Seo title={'My Blog Posts'} />;
};
