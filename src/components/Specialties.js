import React from 'react';
import { css } from 'react-emotion';

const specialtiesStyles = css`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-auto-flow: column;
  grid-gap: 10px 30px;
  list-style: none;
  padding: 0;

  li {
    h4 {
      margin: 0;
    }

    p {
      font-size: 0.85rem;
      margin-top: 0;
      color: #666;
      line-height: 1.5em;
    }
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: none;
    grid-auto-flow: initial;
  }
`;

export default ({ specialties }) => (
  <ul className={specialtiesStyles}>
    {specialties.map(({ name, items }, i) => (
      <li key={i}>
        <h4>{name}</h4>
        <p>{items.join(', ')}</p>
      </li>
    ))}
  </ul>
);
