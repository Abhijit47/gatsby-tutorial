import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      siteBuildMetadata {
        buildTime
      }
    }
  `);
  return (
    <header>
      <h1>{data.site.siteMetadata.title}</h1>
    </header>
  );
}
