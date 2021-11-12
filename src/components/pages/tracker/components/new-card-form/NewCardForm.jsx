import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import useDebounce from '../../../../../hooks/useDebounce';
import Button from '../../../../UI/button';
import Spinner from '../../../../UI/spinner';
import styles from './new-card-form.scss';
import { DEBOUNCE_DELAY, defaultCard, URL } from './constants';
import { getUniqId } from './helpers/getUniqId';
import { getIdsFromState } from './helpers/getIdsFromState';
import { checkOnlySpace } from './helpers/checkOnlySpace';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../../../store/action-creators';

const NewCardForm = ({columnId, setShowCardForm, tracker}) => {

  const [newCard, setNewCard] = useState(defaultCard);  

  const dispatch = useDispatch();
  const { addCard } = bindActionCreators(actionCreators, dispatch); 

  const getPhoto = () => {
    const id = getUniqId(getIdsFromState(tracker));

    try {
      axios.get(URL + id)
        .then((res) => {
          setNewCard({
            ...newCard, 
            id: res.data.id, 
            url: res.data.url, 
            column: columnId
          })
        });
    } catch (err) {
      throw new Error(err);
    }
  }

  const onReset = (evt) => {
    if (evt.target.classList.contains('new-card')) {
      evt.target.reset(); 
    }
    setNewCard(defaultCard);
    setShowCardForm(false);
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    addCard({columnId, newCard});
    onReset(evt);
  }

  useEffect(() => {
    getPhoto();
  }, [])  

  const getPhotoDebounsed = useDebounce(getPhoto, DEBOUNCE_DELAY);

  const ref = useRef(null);
  checkOnlySpace(ref.current);

  return (
    <form className='new-card' onSubmit={onSubmit} autoComplete="off" >
      <Button onClick={getPhotoDebounsed} text='Выбрать другое изображение'/>

      {newCard.url ? <img src={newCard.url} alt="cards cover"/> : <Spinner />}

      <input 
        ref={ref}
        value={newCard.name}
        onChange={evt => setNewCard({...newCard, name: evt.target.value})}
        minLength='1'
        type="text"
        placeholder='Введите название' 
        required
      />
      <textarea 
        value={newCard.description}
        onChange={evt => setNewCard({...newCard, description: evt.target.value})}
        type="text"
        placeholder='Введите описание'
      />
      <div className='new-card_buttons'>
        <Button type='submit' text='Ок'/>  
        <Button onClick={onReset} text='Отмена'/>
      </div>
    </form>
  );
};

export default NewCardForm;