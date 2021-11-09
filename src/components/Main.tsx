import React, { FC } from 'react';
import { State } from '../types';
import Column from './Column';

interface MainProps {
  tracker: State
}
const Main: FC<MainProps> = ({tracker}) => {

  return (
    <main className='wrapper'>
      {tracker.map(column => {
        return <Column column={column} tracker={tracker} key={column.id}/>
      })}
    </main>
  );
};

export default Main;