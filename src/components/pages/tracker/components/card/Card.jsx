import React, { useState } from 'react';
import ArrowButton from '../../../../UI/arrow-button';
import SelectColumnForm from '../../../../UI/select-column-form';
import styles from './card.scss';
import * as actionCreators from '../../../../../store/action-creators';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';


const Card = ({card}) => {

  const { url, name, description, column, id } = card;

  const dispatch = useDispatch();
  const { moveCard } = bindActionCreators(actionCreators, dispatch); 

  const [select, setSelect] = useState(false);
  const [newColumn, setNewColumn] = useState(column);

  const onClickOpenSelect = () => {
    setSelect(true);
  }

  const closeSelect = () => {
    setSelect(false);
  }

  const onSetColumn = (evt) => {
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
        <ArrowButton onClickOpenSelect={onClickOpenSelect}/>
      }

      <img height="100px" width="auto" src={url} alt="card's cover" />
      <h5>{name}</h5>
      <p>{description}</p>
    </article>
  );
};

export default Card;