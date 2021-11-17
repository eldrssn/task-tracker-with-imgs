import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import Column from './components/column';
import styles from './tracker.module.scss';
import { selectTracker } from '../../../store/reducers/tracker/selectors';

const cx = classNames.bind(styles);

const Tracker = () => {
  const tracker = useSelector(selectTracker);

  return (
    <main className={cx('wrapper')}>
      {Object.keys(tracker).map((column) => {
        return (
          <Column column={tracker[column]} key={tracker[column].columnLabel} />
        );
      })}
    </main>
  );
};

export default Tracker;
