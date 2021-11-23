import React from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../../UI/button/Button';
import styles from './Header.module.scss';
import { selectTracker } from '../../../store/reducers/tracker/selectors';
import { Modal } from './components/modal';
import { TRACKER_KEY } from '../../../utils/helpers/constants';
import { setValueToLocalStorage } from '../../../utils/helpers/localStorageHelpers';

export const Header = () => {
  const tracker = useSelector(selectTracker);

  let openModalFunc;

  const getOpenModalFunc = (openModal) => {
    openModalFunc = openModal;
  };

  const handlerSaveValueToStorage = () => {
    const isSavedSuccess = setValueToLocalStorage(TRACKER_KEY, tracker);

    if (isSavedSuccess && typeof openModalFunc === 'function') {
      openModalFunc();
    }
  };

  return (
    <>
      <header className={styles.header}>
        <h1>Task Tracker</h1>
        <Button
          onClick={handlerSaveValueToStorage}
          title="Сохранить изменения"
        />
      </header>

      <Modal getOpenModalFunc={getOpenModalFunc} />
    </>
  );
};
