import React from 'react';
import { useSelector } from 'react-redux';
import ModalSave from './components/modal-save/';
import { STATE_NAME } from './constants';
import useSaveState from '../../../hooks/useSaveState';
import Button from '../../UI/button/Button';
import styles from './header.scss';

const Header = () => {

  const tracker = useSelector((state) => state.tracker);
  const [isSaveChanges, setIsSaveChanges, saveChanges] = useSaveState(STATE_NAME, tracker);

  return (
    <>
      <header className='header'>
        <h1>Task Tracker</h1>
        <Button onClick={saveChanges} text='Сохранить изменения'/>
      </header>
  
      <ModalSave isSaveChanges={isSaveChanges} setIsSaveChanges={setIsSaveChanges} />
    </>
  );
};

export default Header;