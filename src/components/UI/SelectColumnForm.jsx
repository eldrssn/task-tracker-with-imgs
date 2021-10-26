import React from 'react';
import MyButton from './MyButton';

const SelectColumnForm = ({ column, onChooseColumn, onSetColumn, closeSelect }) => {

  return (
    <form className='card_mover'>
      <select name='type' value={column} onChange={onSetColumn}>
        <option value='' disabled>Куда переместить?</option>
        <option value="todo">Сделать</option>
        <option value="inprogress">В процессе</option>
        <option value="done">Сделано</option>
      </select>
      <MyButton onClick={onChooseColumn} text="Ok" />
      <MyButton onClick={closeSelect} text="Отмена" />
    </form>
  );
};

export default SelectColumnForm;