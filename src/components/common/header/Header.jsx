import React from 'react';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';
import ModalSave from './components/modal-save';
import useSaveToStorage from '../../../hooks/useSaveToStorage';
import Button from '../../UI/button/Button';
import styles from './header.module.scss';
import { selectTracker } from '../../../store/reducers/tracker/selectors';
import TRACKER_STATE_NAME from './constants';

const cx = classNames.bind(styles);

const Header = () => {
  const tracker = useSelector(selectTracker);
  const [isSaveToStorage, setIsSaveToStorage, handleSaveToStorage] =
    useSaveToStorage(TRACKER_STATE_NAME, tracker);

  return (
    <>
      <header className={cx('header')}>
        <h1>Task Tracker</h1>
        <Button onClick={handleSaveToStorage} title="Сохранить изменения" />
      </header>

      <ModalSave
        isSaveToStorage={isSaveToStorage}
        setIsSaveToStorage={setIsSaveToStorage}
      />
    </>
  );
};

export default Header;
