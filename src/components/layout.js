import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import useSiteMetadata from '../hooks/useSiteMetadata';
import {
  container,
  heading,
  nav,
  navLinkItem,
  navLinks,
  navLinkText,
  siteTitle,
} from './layout.module.css';

export default function Layout({ pageTitle, children }) {
  const data = useSiteMetadata();

  return (
    <div className={container}>
      <header className={siteTitle}>{data.title}</header>
      <nav className={nav}>
        <Link to={'/'}>
          <div>
            <StaticImage
              src='../images/icon.png'
              alt='a image'
              className={''}
              style={{ width: '2rem', height: '2rem' }}
            />
          </div>
        </Link>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to={'/'} className={navLinkText}>
              {'Home'}
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to={'/about'} className={navLinkText}>
              {'About'}
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to={'/blog'} className={navLinkText}>
              {'Blog'}
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
}
