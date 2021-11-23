import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ArrowIcon } from '../../../../UI/arrow-icon';
import { SelectColumnForm } from '../select-column-form';
import styles from './Card.module.scss';
import { moveCard } from '../../../../../store/reducers/tracker/actions';

export const Card = ({ card, columnType }) => {
  const [showSelect, setShowSelect] = useState(false);
  const [newColumnType, setNewColumnType] = useState(columnType);

  const { url, name, description, id } = card;

  const dispatch = useDispatch();

  const handleSelectToggle = () => {
    setShowSelect(!showSelect);
  };

  const handlerChangeColumnType = (event) => {
    setNewColumnType(event.target.value);
  };

  const handlerSubmitColumnType = (event) => {
    event.preventDefault();
    handleSelectToggle();

    if (newColumnType === columnType) {
      return;
    }

    dispatch(moveCard({ id, newColumnType }));
  };

  return (
    <article className={styles.card}>
      {showSelect ? (
        <SelectColumnForm
          column={newColumnType}
          handlerSubmitColumnType={handlerSubmitColumnType}
          handlerChangeColumnType={handlerChangeColumnType}
          handleSelectToggle={handleSelectToggle}
        />
      ) : (
        <ArrowIcon handleSelectToggle={handleSelectToggle} />
      )}

      <img height="100px" width="auto" src={url} alt="card's cover" />
      <h5>{name}</h5>
      <p>{description}</p>
    </article>
  );
};
