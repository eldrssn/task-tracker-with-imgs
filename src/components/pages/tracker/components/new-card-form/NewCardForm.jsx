import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from '../../../../../hooks/useDebounce';
import { Button } from '../../../../UI/button';
import { Spinner } from '../../../../UI/spinner';
import styles from './New-card-form.module.scss';
import {
  DEBOUNCE_DELAY,
  defaultCard,
} from '../../../../../utils/helpers/constants';
import { ErrorPopup } from '../../../../UI/error-popup';
import { addCard } from '../../../../../store/reducers/tracker/actions';
import { request } from '../../../../../utils/api';
import { selectCardIds } from '../../../../../store/reducers/tracker/selectors';
import { checkValidInput } from './helpers/checkValidInput';
import { getUniqId } from '../../../../../utils/helpers/getUniqId';

export const NewCardForm = ({ columnType, setShowNewCardForm }) => {
  const [newCard, setNewCard] = useState(defaultCard);
  const [errorMessage, setErrorMessage] = useState(null);
  const ids = useSelector(selectCardIds);
  const inputRef = useRef(null);
  const newCardStyle = styles['new-card'];
  const formRef = useRef();

  const dispatch = useDispatch();

  const handleSuccess = (response) => {
    setNewCard({
      ...defaultCard,
      id: response.data.id,
      url: response.data.url,
      type: columnType,
    });
  };

  const handleError = (error) => {
    setErrorMessage(error.message);
  };

  const getImgUrl = () => {
    const id = getUniqId(ids);

    request({
      url: id,
      handleSuccess,
      handleError,
    });
  };

  const handleResetForm = (event) => {
    if (event.target.classList.contains(newCardStyle)) {
      event.target.reset();
    }
    setNewCard(defaultCard);
    setShowNewCardForm(false);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(addCard(newCard));
    handleResetForm(event);
  };

  useEffect(() => {
    getImgUrl();
  }, []);

  const handleGetPhotoDebounced = useDebounce(getImgUrl, DEBOUNCE_DELAY);

  checkValidInput(inputRef.current);

  const handlerNewCardInput = (event) => {
    setNewCard({ ...newCard, [event.target.name]: event.target.value });
  };

  return (
    <form
      className={newCardStyle}
      onSubmit={handleSubmitForm}
      autoComplete="off"
      ref={formRef}
    >
      <Button
        onClick={handleGetPhotoDebounced}
        title="Выбрать другое изображение"
      />

      {newCard.url ? <img src={newCard.url} alt="cards cover" /> : <Spinner />}

      <input
        ref={inputRef}
        value={newCard.name}
        name="name"
        onChange={handlerNewCardInput}
        minLength="1"
        type="text"
        placeholder="Введите название"
        required
      />
      <textarea
        name="description"
        value={newCard.description}
        onChange={handlerNewCardInput}
        placeholder="Введите описание"
      />
      <div className={styles['new-card_buttons']}>
        <Button type="submit" title="Ок" />
        <Button onClick={handleResetForm} title="Отмена" />
      </div>

      {errorMessage && <ErrorPopup errorMessage={errorMessage} />}
    </form>
  );
};
