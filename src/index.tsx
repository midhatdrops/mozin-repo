import React from 'react';
import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset';
import styled from 'styled-components';
import App from './App';

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #121212;
  font-family: 'Shippori Mincho B1', serif;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  overflow-x: hidden;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 13px;
    height: 13px;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(13deg, #000000 14%, #1f2130 64%);
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(13deg, #05050a 14%, #847e85 64%);
  }
  ::-webkit-scrollbar-track {
    background: #000000;
    border-radius: 10px;
  }
`;

ReactDOM.render(
  <Background>
    <Reset />
    <App />
  </Background>,
  document.getElementById('root'),
);
