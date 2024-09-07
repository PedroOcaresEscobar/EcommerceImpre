import React from 'react';
import '../../styles/Button.css';

export const Button = ({ contenido, funcion }) => {
  return (
    <button className='btn' onClick={funcion}>{contenido}</button>
  );
};