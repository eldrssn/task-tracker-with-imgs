import React from 'react';
import Modal from '../../../../UI/modal/Modal';

const ModalSave = ({ isSaveChanges, setIsSaveChanges }) => {

  const modal = <Modal
    text='Изменения сохранены' 
    btn='Ок' 
    onClick={() => setIsSaveChanges(false)}
  />

  const renderModal = isSaveChanges ? modal : null;

  return renderModal;
};

export default ModalSave; 