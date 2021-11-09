import React, { ChangeEvent, FC, useState } from 'react';
import { Action, ICard, MoveCardActionPayload } from '../types';
import ArrowButton from './UI/ArrowButton';
import SelectColumnForm from './UI/SelectColumnForm';

interface CardType {
  card: ICard;
  moveCard: (data: MoveCardActionPayload) => (dispatch: React.Dispatch<Action>) => void;
}

const Card: FC<CardType> = ({card, moveCard}) => {

  const { url, name, description, column, id } = card;

  const [select, setSelect] = useState(false);
  const [newColumn, setNewColumn] = useState(column);

  const onClickOpenSelect = () => {
    setSelect(true);
  }

  const closeSelect = () => {
    setSelect(false);
  }

  const onSetColumn = (evt: ChangeEvent<HTMLSelectElement>) => { 
    setNewColumn(evt.target.value);
  }

  const onChooseColumn = () => {
    closeSelect();

    if (newColumn === column) {
      return;
    }

    moveCard({id, newColumn, column})
  }
  
  return (
    <article className='card'>

      {select ? 
        <SelectColumnForm 
          column={newColumn} 
          onChooseColumn={onChooseColumn}
          onSetColumn={onSetColumn}
          closeSelect={closeSelect} 
        /> 
        : 
        <ArrowButton onClickOpenSelect={onClickOpenSelect}/>}

      <img height="100px" width="auto" src={url} alt="card's cover" />
      <h5>{name}</h5>
      <p>{description}</p>
    </article>
  );
};

export default Card;