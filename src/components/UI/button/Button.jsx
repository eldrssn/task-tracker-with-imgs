import React from 'react';
import styles from './button.scss'

const Button = ({ onClick, text, ...other }) => {
  return (
    <button className='button' type='button' onClick={onClick} {...other} >{text}</button>
  );
};

export default Button;