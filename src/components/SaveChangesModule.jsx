import React from 'react';
import Module from './UI/Module';

const SaveChangesModule = ({setIsSaveChanges}) => {

  return (
    <Module 
      text='Изменения сохранены' 
      btn='Ок' 
      onClick={() => setIsSaveChanges(false)}
    />
  );
};

export default SaveChangesModule;