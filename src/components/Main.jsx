import React from 'react';
import Column from './Column';

const Main = ({tracker}) => {

  return (
    <main className='wrapper'>
      {tracker.map(column => {
        return <Column column={column} tracker={tracker} key={column.id}/>
      })}
    </main>
  );
};

export default Main;