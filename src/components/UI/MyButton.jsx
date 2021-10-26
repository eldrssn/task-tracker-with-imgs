import React from 'react';

const MyButton = ({ onClick, text, ...other }) => {
  return (
    <button className='button' type='button' onClick={onClick} {...other} >{text}</button>
  );
};

export default MyButton;