import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import Obfuscate from 'react-obfuscate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledFooter = styled.section`
  border-top: solid 1px #eee;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  margin-bottom: 15px;

  a,
  a:visited {
    text-decoration: none;
    color: #333;
  }

  a:hover {
    transition: color 150ms ease-out;
    color: #666;
  }
`;

const socialStyles = css`
  list-style: none;
  padding: 0;
  display: flex;
  color: #333;

  li {
    padding-right: 10px;
  }

  a {
    font-size: 1.3rem;
  }
`;

const Social = ({ items }) => (
  <ul css={socialStyles}>
    {items.map(({ name, icon, url }, i) => (
      <li key={i}>
        <a
          href={url}
          title={`Visit my ${name}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={['fab', icon]} size="lg" />
        </a>
      </li>
    ))}
  </ul>
);

export default ({ social, email, name }) => (
  <StyledFooter>
    <Social items={social} />
    <Obfuscate email={`${name} <${email}>`}>{email}</Obfuscate>
  </StyledFooter>
);
