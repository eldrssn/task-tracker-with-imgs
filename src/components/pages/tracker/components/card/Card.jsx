import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames/bind';
import ArrowButton from '../../../../UI/arrow-button';
import SelectColumnForm from '../../../../UI/select-column-form';
import styles from './card.module.scss';
import { moveCard } from '../../../../../store/reducers/tracker/actions';

const cx = classNames.bind(styles);

const Card = ({ card, columnLabel }) => {
  const { url, name, description, id } = card;

  const dispatch = useDispatch();

  const [showSelect, setShowSelect] = useState(false);
  const [newColumnLabel, setNewColumnLabel] = useState(columnLabel);

  const handleSelectToggle = () => {
    setShowSelect(!showSelect);
  };

  const handlerChangeColumnLabel = (event) => {
    setNewColumnLabel(event.target.value);
  };

  const handlerSubmitColumnLabel = (event) => {
    event.preventDefault();
    handleSelectToggle();

    if (newColumnLabel === columnLabel) {
      return;
    }

    dispatch(moveCard({ id, newColumnLabel, columnLabel }));
  };

  return (
    <article className={cx('card')}>
      {showSelect ? (
        <SelectColumnForm
          column={newColumnLabel}
          handlerSubmitColumnLabel={handlerSubmitColumnLabel}
          handlerChangeColumnLabel={handlerChangeColumnLabel}
          handleSelectToggle={handleSelectToggle}
        />
      ) : (
        <ArrowButton handleSelectToggle={handleSelectToggle} />
      )}

      <img height="100px" width="auto" src={url} alt="card's cover" />
      <h5>{name}</h5>
      <p>{description}</p>
    </article>
  );
};

export default Card;
