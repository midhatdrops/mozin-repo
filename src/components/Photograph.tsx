/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Component = styled.div`
  width: 30%;
  height: 45%;
  box-sizing: border-box;
  background-color: #fff;
  /* -webkit-box-shadow: 9px 11px 8px -6px rgba(252, 249, 252, 0.65);
  -moz-box-shadow: 9px 11px 8px -6px rgba(252, 249, 252, 0.65);
  box-shadow: 9px 11px 8px -6px rgba(252, 249, 252, 0.65); */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;

const Imagem = styled.img`
  width: 90%;
  height: 90%;
  /* margin-left: 2.2rem; */
  margin-top: 0.4rem;
  border: 1px solid #fff;
  border-radius: 0.2rem;
`;

const Title = styled.h1`
  width: 100%;
  height: 10%;
  font-family: 'DotGothic16', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  text-align: center;
  letter-spacing: 2px;
`;

interface IPhotograph {
  src: string;
  alt: string;
  titulo?: string;
}

export const Photograph: React.FC<IPhotograph> = ({ src, alt, titulo }) => (
  <Component>
    <Imagem src={src} alt={alt} />
    <Title>{titulo}</Title>
  </Component>
);

export default Photograph;
