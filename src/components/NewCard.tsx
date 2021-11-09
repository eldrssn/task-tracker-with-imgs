import axios from 'axios';
import React, { useState, useEffect, useRef, Dispatch, SetStateAction, FC, ChangeEvent } from 'react';
import { defaultCard } from '../data';
import useDebounce from '../hooks/useDebounce';
import { Action, AddCardActionPayload, State } from '../types';
import { checkOnlySpace, DEBOUNCE_DELAY, getIdsFromState, getUniqId, URL } from '../utils';
import MyButton from './UI/MyButton';
import Spinner from './UI/Spinner';

interface INewCard {
  columnId: string;
  addCard: (data: AddCardActionPayload) => (dispatch: Dispatch<Action>) => void;
  setShowCardForm: Dispatch<SetStateAction<boolean>>;
  tracker: State;
}

const NewCard: FC<INewCard> = ({columnId, addCard, setShowCardForm, tracker}) => {

  const [newCard, setNewCard] = useState(defaultCard);  

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
    } catch (err: any) {
      throw new Error(err);
    }
  }

  const onReset = (evt: ChangeEvent<HTMLFormElement>) => {
    if (evt.target.classList.contains('new-card')) {
      evt.target.reset(); 
    }
    setNewCard(defaultCard);
    setShowCardForm(false);
  }

  const onSubmit = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    addCard({columnId, newCard});
    onReset(evt);
  }

  useEffect(() => {
    getPhoto();
  }, [])  

  const getPhotoDebounsed = useDebounce(getPhoto, DEBOUNCE_DELAY);

  const ref = useRef<HTMLInputElement>(null);
  checkOnlySpace(ref.current);

  return (
    <form className='new-card' onSubmit={onSubmit} autoComplete="off" >
      <MyButton onClick={getPhotoDebounsed} text='Выбрать другое изображение'/>

      {newCard.url ? <img src={newCard.url} alt="cards cover"/> : <Spinner />}

      <input 
        ref={ref}
        value={newCard.name}
        onChange={evt => setNewCard({...newCard, name: evt.target.value})}
        minLength={1}
        type="text"
        placeholder='Введите название' 
        required
      />
      <textarea 
        value={newCard.description}
        onChange={evt => setNewCard({...newCard, description: evt.target.value})}
        // type="text"
        placeholder='Введите описание'
      />
      <div className='new-card_buttons'>
        <MyButton submit='submit' text='Ок'/>  
        <MyButton onClick={onReset} text='Отмена'/>
      </div>
    </form>
  );
};

export default NewCard;