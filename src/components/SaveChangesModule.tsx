import React, { FC } from 'react';
import Module from './UI/Module';

interface ISaveChangesModule {
  setIsSaveChanges: React.Dispatch<React.SetStateAction<boolean>>;
}

const SaveChangesModule: FC<ISaveChangesModule> = ({setIsSaveChanges}) => {

  return (
    <Module 
      text='Изменения сохранены' 
      btn='Ок' 
      onClick={() => setIsSaveChanges(false)}
    />
  );
};

export default SaveChangesModule;