import React, { ChangeEvent, FC } from 'react';
import MyButton from './MyButton';

interface ISelectColumnForm {
  column: string | undefined;
  onChooseColumn: () => void;
  onSetColumn: (evt: ChangeEvent<HTMLSelectElement>) => void;
  closeSelect: () => void;
}

const SelectColumnForm: FC<ISelectColumnForm> = ({ column, onChooseColumn, onSetColumn, closeSelect }) => {

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