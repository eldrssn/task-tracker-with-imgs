import React from 'react';
import MyButton from './MyButton';

const Module = ({text, btn, onClick}) => {

  const onClickArea = (evt) => {
    if (evt.target.className === 'module-wrapper') {
      onClick();
    }
  }  

  return (
    <section onClick={onClickArea} className='module-wrapper'>
      <div className="module">
        <h5>{text}</h5>
        <MyButton onClick={onClick} text={btn} />
      </div>
    </section>
  );
};

export default Module;