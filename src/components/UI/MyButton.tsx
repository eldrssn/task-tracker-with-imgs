import React, { FC } from 'react';

interface MyButtonProps {
  text: string;
  onClick?: (evt?: any) => void;
  submit?: 'submit';
}

const MyButton: FC<MyButtonProps> = ({ onClick, text, submit }) => {
  return (
    <button className='button' type={ submit ? submit : 'button'} onClick={onClick} >{text}</button>
  );
};

export default MyButton;