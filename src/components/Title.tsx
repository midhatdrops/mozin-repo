/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
  width: auto;
  height: auto;
  font-family: 'Playfair Display', serif;
  font-weight: 400;
  font-size: 2.5rem;
  color: whitesmoke;
  letter-spacing: 5px;
`;

export const Title: React.FC = () => (
  <Component>Te Amo meu amorzinho 💖</Component>
);

export default Title;
