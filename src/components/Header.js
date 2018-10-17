import React from 'react';
import styled from 'react-emotion';

const Header = styled.section`
  align-items: center;
  display: flex;
  font-size: 1.2rem;
  flex-direction: row;
  text-transform: uppercase;
  width: 100%;
  margin-top: 15px;

  h1 {
    font-size: 1.4em;
  }
`;

const Picture = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: none;
  margin: 0 15px 0 0;
`;

export default ({ picture, name }) => (
  <Header>
    <Picture src={picture} alt={name} />
    <h1>{name}</h1>
  </Header>
);
