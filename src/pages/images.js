import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import img from '../images/bg-images/canada1.jpg';

const images = ({ data }) => {
  const images = data.allFile.edges;
  return (
    <Layout>
      <h1>All images</h1>
      {/* {images.map(({ node }, index) => (
        <h3 key={index}>{node.relativePath}</h3>
      ))}
      <img src={img} alt="canada" style={{ width: '60%' }} /> */}
    </Layout>
  );
};

export const query = graphql`
  {
    allFile {
      edges {
        node {
          relativePath
        }
      }
    }
  }
`;

export default images;
