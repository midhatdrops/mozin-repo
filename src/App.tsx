/* eslint-disable react/jsx-one-expression-per-line */
/**
 * font-family: 'Amatic SC', cursive;
font-family: 'DotGothic16', sans-serif;
font-family: 'Playfair Display', serif;
font-family: 'Shippori Mincho B1', serif;
 */

import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Photograph } from './components/Photograph';

import Title from './components/Title';

import Photo1 from './assets/1.jpeg';

const Grow = styled.div`
  flex-grow: 0.5rem;
`;

function App() {
  // AOS.init();
  return (
    <>
      <Title />
      <Grow />
      <Photograph src={Photo1} alt="" titulo="Meu amor todinho" />
      <Photograph src={Photo1} alt="" titulo="Meu amor todinho" />
      <Photograph
        src={Photo1}
        alt=""
        titulo="Meu amor todinho"
        data-aos="fade-up"
      />
    </>
  );
}

export default App;
