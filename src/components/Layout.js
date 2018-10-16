import React from 'react';
import styled from 'react-emotion';
import { injectGlobal } from 'emotion';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGithub,
  faTwitterSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faTwitterSquare, faLinkedin);

injectGlobal`
  @import url('//fonts.googleapis.com/css?family=Raleway:300,600');

  html, body, #___gatsby, #___gatsby > div {
    height: 100%;
  }

  body {
    font-family: Raleway, "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 1.6em;
    color: #222;
    padding: 0;
    margin: 0;
  }
`;

const Container = styled.div`
  min-height: 100%;
  margin: 0 auto;
  width: 80%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default ({ children }) => <Container>{children}</Container>;
