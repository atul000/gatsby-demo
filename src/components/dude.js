import React from 'react';
import Img from 'gatsby-image';
import { StaticQuery, graphql } from 'gatsby';

const getDude = graphql`
  {
    file(relativePath: { eq: "bg-images/canada1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 900) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default function dude() {
  return (
    <StaticQuery
      query={getDude}
      render={data => (
        <div style={{ maxWidth: '7000px' }}>
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
      )}
    />
  );
}
