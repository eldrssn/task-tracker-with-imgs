import React, { FC } from 'react';
import MyButton from './MyButton';

interface IModule {
  text: string;
  btn: string;
  onClick: () => void;
}

const Module: FC<IModule> = ({text, btn, onClick}) => {

  const onClickArea = (evt: any) => { //ПОФИКСИТЬ
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