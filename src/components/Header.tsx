import React from 'react';
import MyButton from './UI/MyButton';

interface HeaderProps {
  saveChanges: () => void;
}

const Header: React.FC<HeaderProps> = ({saveChanges}) => {
  return (
    <header className='header'>
      <h1>Task Tracker</h1>
      <MyButton onClick={saveChanges} text='Сохранить изменения'/>
    </header>
  );
};

export default Header;