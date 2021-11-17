import React from 'react';
import Modal from '../../../../UI/modal/Modal';

const ModalSave = ({ isSaveToStorage, setIsSaveToStorage }) => {
  const handleCloseModal = () => {
    setIsSaveToStorage(false);
  };

  const modal = (
    <Modal
      title="Изменения сохранены"
      labelCloseButton="Ок"
      handleClose={handleCloseModal}
    />
  );

  return isSaveToStorage ? modal : null;
};

export default ModalSave;
