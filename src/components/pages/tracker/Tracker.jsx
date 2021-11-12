import React from 'react';
import Column from './components/column';
import styles from './tracker.css';

import cn from 'classnames';
import { useSelector } from 'react-redux';
// import styles from './main';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { selectUser } from '../store/users/selectors'; 

// const selectUser = state => state.counter;

const Tracker = () => {
  // const dispatch =  useDispatch();
  // const users = useSelector(selectUser);

  // useEffect(() => {
  //   dispatch(fetchUsers(payload))
  // }, [])
  // className={cn(styles.wrapper)}

  const tracker = useSelector((state) => state.tracker);

  console.log(cn());
  return (
    <main className='wrapper'>
      {Object.keys(tracker).map(column => {
        return <Column 
          column={tracker[column]} 
          tracker={tracker} 
          key={tracker[column].id}
        />
      })}
    </main>
  );
};

export default Tracker;