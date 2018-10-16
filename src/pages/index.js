import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Specialties from '../components/Specialties';
import icon from '../../static/favicon.png';

export default ({
  data: {
    site: {
      siteMetadata: {
        name,
        picture,
        email,
        title,
        social,
        specialties,
        summary,
        keywords,
      },
    },
  },
}) => (
  <Layout>
    <Helmet
      title={`${name} - ${title}`}
      meta={[
        { name: 'description', content: summary },
        { name: 'keywords', content: keywords.join(',') },
      ]}
      link={[{ rel: 'shortcut icon', type: 'image/png', href: icon }]}
    />
    <Header name={name} picture={picture} />
    <p>{summary}</p>
    <Specialties specialties={specialties} />
    <Footer social={social} email={email} />
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        picture
        keywords
        email
        summary
        specialties {
          name
          items
        }
        social {
          name
          icon
          url
        }
      }
    }
  }
`;
