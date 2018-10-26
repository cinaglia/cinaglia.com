import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Specialties from '../components/Specialties';

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
      title={title}
      meta={[
        { name: 'description', content: summary },
        { name: 'keywords', content: keywords.join(', ') },
        { name: 'theme-color', content: '#222' },
      ]}
    >
      <html lang="en" />
    </Helmet>
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
