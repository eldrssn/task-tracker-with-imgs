import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import Card from './Card';
import NewCard from './NewCard';
import MyButton from './UI/MyButton';
import * as actionCreators from '../action-creators';

const Column = ({column, tracker}) => {
  const dispatch = useDispatch();
  const { moveCard, addCard } = bindActionCreators(actionCreators, dispatch); 

  const [showCardForm, setShowCardForm] = useState(false);
  const { columnName, cards, id } = column;

  const onShowCardFormClick = () => {
    setShowCardForm(true);
  }

  return (
    <section className='column'>
      <h3 className='column_name'>{columnName}</h3>
      <div className='cards_wrapper'>
        {cards.map(card => {
          return <Card moveCard={moveCard} key={card.id} card={card} />
        })}
        {showCardForm ? 
          <NewCard addCard={addCard} columnId={id} tracker={tracker} setShowCardForm={setShowCardForm} />
          :
          <MyButton onClick={onShowCardFormClick} text='+ добавить карточку'/>
        }
      </div>
    </section>
  );
};

export default Column;