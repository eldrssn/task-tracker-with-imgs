import React from 'react';
import classNames from 'classnames/bind';
import AddingCard from '../adding-card';
import Card from '../card';
import styles from './column.module.scss';

const cx = classNames.bind(styles);

const Column = ({ column }) => {
  const { columnName, cards, columnLabel } = column;

  return (
    <section className={cx('column')}>
      <h3 className={cx('column_name')}>{columnName}</h3>
      <div className={cx('cards_wrapper')}>
        {cards.map((card) => {
          return <Card key={card.id} card={card} columnLabel={columnLabel} />;
        })}

        <AddingCard columnLabel={columnLabel} />
      </div>
    </section>
  );
};

export default Column;
