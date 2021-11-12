import React from 'react';
import Button from '../button/Button';
// import cn from 'classnames';
import styles from './modal.scss';

const Modal = ({text, btn, onClick}) => {

  const onClickArea = (evt) => {
    if (evt.target.className === 'module-wrapper') {
      onClick();
    }
  }  

  return (
    <section onClick={onClickArea} className='modal-wrapper'>
      <div className='modal'> 
        <h5>{text}</h5>
        <Button onClick={onClick} text={btn} />
      </div>
    </section>
  );
};

export default Modal;