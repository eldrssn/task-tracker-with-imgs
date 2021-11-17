import React from 'react';
import classNames from 'classnames/bind';
import Button from '../button';
import styles from './select-column-form.module.scss';

const cx = classNames.bind(styles);

const SelectColumnForm = ({
  column,
  handlerSubmitColumnLabel,
  handlerChangeColumnLabel,
  handleSelectToggle,
}) => {
  return (
    <form className={cx('card_mover')} onSubmit={handlerSubmitColumnLabel}>
      <select name="type" value={column} onChange={handlerChangeColumnLabel}>
        <option value="" disabled>
          Куда переместить?
        </option>
        <option value="todo">Сделать</option>
        <option value="inprogress">В процессе</option>
        <option value="done">Сделано</option>
      </select>

      <Button type="submit" title="Ok" />
      <Button onClick={handleSelectToggle} title="Отмена" />
    </form>
  );
};

export default SelectColumnForm;
