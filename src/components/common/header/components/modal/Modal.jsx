import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Modal.module.scss';
import { Button } from '../../../../UI/button';

const cn = classNames.bind(styles);

export const Modal = ({ getOpenModalFunc, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const modalWrapperClassName = cn('hide-modal', {
    'modal-wrapper': isOpen,
  });

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const onClickArea = (event) => {
    if (event.target.className === modalWrapperClassName) {
      toggleModal();
    }
  };

  useEffect(() => {
    getOpenModalFunc(toggleModal);
  }, [getOpenModalFunc]);

  return (
    <section onClick={onClickArea} className={modalWrapperClassName}>
      <div
        className={cn(styles.modal, {
          className,
        })}
      >
        <h5>Изменения сохранены</h5>
        <Button onClick={toggleModal} />
      </div>
    </section>
  );
};
