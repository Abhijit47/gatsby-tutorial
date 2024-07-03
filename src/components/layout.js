import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import {
  container,
  heading,
  nav,
  navLinkItem,
  navLinks,
  navLinkText,
} from './layout.module.css';

export default function Layout({ pageTitle, children }) {
  return (
    <div className={container}>
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
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
}
