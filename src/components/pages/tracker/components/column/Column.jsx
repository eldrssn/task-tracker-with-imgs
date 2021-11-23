import React from 'react';
import { Card } from '../card';
import styles from './Column.module.scss';
import { AddingCard } from '../adding-card';

export const Column = ({ columnName, columnType, cards = [] }) => {
  return (
    <section className={styles.column}>
      <h3 className={styles['column-name']}>{columnName}</h3>
      <div className={styles.cards_wrapper}>
        {cards.map((card) => {
          return <Card key={card.id} card={card} columnType={columnType} />;
        })}

        <AddingCard columnType={columnType} />
      </div>
    </section>
  );
};
