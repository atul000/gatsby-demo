import React from 'react';

import { StaticQuery, graphql } from 'gatsby';

const getData = graphql`
  {
    info: site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const info = () => (
  <StaticQuery
    query={getData}
    render={(data) => {
      const siteData = data.info.siteMetadata;
      const { title, description, author } = siteData;
      return (
        <div>
          <h2>
title:
            {title}
          </h2>
          <p>
Des:
            {description}
          </p>
          <h2>
Author:
            {author}
          </h2>
        </div>
      );
    }}
  />
);

export default info;
