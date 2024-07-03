import * as React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';

export default function Seo({ title }) {
  const data = useSiteMetadata();

  return (
    <title>
      {title} | {data.title}
    </title>
  );
}
