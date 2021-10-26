import React from 'react';
import MyButton from './UI/MyButton';

const Header = ({saveChanges}) => {

  return (
    <header className='header'>
      <h1>Task Tracker</h1>
      <MyButton onClick={saveChanges} text='Сохранить изменения'/>
    </header>
  );
};

export default Header;