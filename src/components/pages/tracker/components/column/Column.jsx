import React from 'react';
import AddingCard from '../adding-card';
import Card from '../card';
import styles from './column.scss';

const Column = ({column, tracker}) => {
  const { columnName, cards, id } = column;

  return (
    <section className='column'>
      <h3 className='column_name'>{columnName}</h3>
      <div className='cards_wrapper'>

        {cards.map(card => {
          return <Card key={card.id} card={card} />
        })}
        
        <AddingCard id={id} tracker={tracker}/>
      </div>
    </section>
  );
};

export default Column;