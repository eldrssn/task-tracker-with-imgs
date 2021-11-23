import React from 'react';
import { useSelector } from 'react-redux';
import { Column } from './components/column';
import styles from './Tracker.module.scss';
import { columns } from '../../../utils/helpers/constants';
import { selectCardsByType } from '../../../store/reducers/tracker/selectors';

export const Tracker = () => {
  const cardsByType = useSelector(selectCardsByType);

  return (
    <main className={styles.wrapper}>
      {columns.map(({ key, title }) => {
        return (
          <Column
            key={key}
            columnType={key}
            columnName={title}
            cards={cardsByType[key]}
          />
        );
      })}
    </main>
  );
};
