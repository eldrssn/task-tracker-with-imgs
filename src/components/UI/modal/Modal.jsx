import React from 'react';
import classNames from 'classnames/bind';
import Button from '../button/Button';
import styles from './modal.module.scss';

const cx = classNames.bind(styles);

const Modal = ({ title, labelCloseButton, handleClose }) => {
  const modalWrapperClassName = cx('modal-wrapper');

  const onClickArea = (event) => {
    if (event.target.className === modalWrapperClassName) {
      handleClose();
    }
  };

  return (
    <section onClick={onClickArea} className={modalWrapperClassName}>
      <div className={cx('modal')}>
        <h5>{title}</h5>
        <Button onClick={handleClose} title={labelCloseButton} />
      </div>
    </section>
  );
};

export default Modal;
