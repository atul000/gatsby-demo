import React from 'react';
import { Link } from 'gatsby';

import { FaAccusoft } from 'react-icons/fa';
import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';
import Info from '../components/info';
import Dude from '../components/dude';
// import Section from '../components/section/section';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/products/">
      <h2>Products Page</h2>
    </Link>
    <Info />
    <Link to="/images">Images</Link>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Dude />

      <Image />
    </div>
    <FaAccusoft />
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/product/testing/">Go to testing</Link>
  </Layout>
);

export default IndexPage;
