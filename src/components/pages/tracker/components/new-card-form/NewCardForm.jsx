import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames/bind';
import useDebounce from '../../../../../hooks/useDebounce';
import Button from '../../../../UI/button';
import Spinner from '../../../../UI/spinner';
import styles from './new-card-form.module.scss';
import { DEBOUNCE_DELAY, defaultCard } from './constants';
import { checkOnlySpace, getId } from './helpers';
import ErrorPopup from '../../../../UI/error-popup';
import { addCard } from '../../../../../store/reducers/tracker/actions';
import { request } from '../../../../../utils/api';
import { selectTracker } from '../../../../../store/reducers/tracker/selectors';

const cx = classNames.bind(styles);

const NewCardForm = ({ columnLabel, setShowNewCardForm }) => {
  const [newCard, setNewCard] = useState(defaultCard);
  const [errorMessage, setErrorMessage] = useState(null);
  const tracker = useSelector(selectTracker);
  const ref = useRef(null);

  const dispatch = useDispatch();

  const handleSuccess = (response) => {
    setNewCard({
      ...defaultCard,
      id: response.data.id,
      url: response.data.url,
    });
  };

  const handleError = (error) => {
    setErrorMessage(error.message);
  };

  const getImgUrl = () => {
    const id = getId(tracker);

    request({
      url: id,
      handleSuccess,
      handleError,
    });
  };

  const handleResetForm = (event) => {
    if (event.target.classList.contains(cx('new-card'))) {
      event.target.reset();
    }
    setNewCard(defaultCard);
    setShowNewCardForm(false);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(addCard({ columnLabel, newCard }));
    handleResetForm(event);
  };

  useEffect(() => {
    getImgUrl();
  }, []);

  const handleGetPhotoDebounced = useDebounce(getImgUrl, DEBOUNCE_DELAY);

  // !TODO: проверить что за магия
  checkOnlySpace(ref.current);

  const handlerNewCardName = (event) => {
    setNewCard({ ...newCard, name: event.target.value });
  };

  const handlerNewCardDescription = (event) => {
    setNewCard({ ...newCard, description: event.target.value });
  };

  return (
    <form
      className={cx('new-card')}
      onSubmit={handleSubmitForm}
      autoComplete="off"
    >
      <Button
        onClick={handleGetPhotoDebounced}
        title="Выбрать другое изображение"
      />

      {newCard.url ? <img src={newCard.url} alt="cards cover" /> : <Spinner />}

      <input
        ref={ref}
        value={newCard.name}
        onChange={handlerNewCardName}
        minLength="1"
        type="text"
        placeholder="Введите название"
        required
      />
      <textarea
        value={newCard.description}
        onChange={handlerNewCardDescription}
        placeholder="Введите описание"
      />
      <div className={cx('new-card_buttons')}>
        <Button type="submit" title="Ок" />
        <Button onClick={handleResetForm} title="Отмена" />
      </div>

      {errorMessage && <ErrorPopup errorMessage={errorMessage} />}
    </form>
  );
};

export default NewCardForm;
