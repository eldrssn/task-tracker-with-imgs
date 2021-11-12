import React from 'react';
import Button from '../button/Button';
import styles from './select-column-form.scss';

const SelectColumnForm = ({ column, onChooseColumn, onSetColumn, closeSelect }) => {

  return (
    <form className='card_mover'>
      <select name='type' value={column} onChange={onSetColumn}>
        <option value='' disabled>Куда переместить?</option>
        <option value="todo">Сделать</option>
        <option value="inprogress">В процессе</option>
        <option value="done">Сделано</option>
      </select>
      <Button onClick={onChooseColumn} text="Ok" />
      <Button onClick={closeSelect} text="Отмена" />
    </form>
  );
};

export default SelectColumnForm;