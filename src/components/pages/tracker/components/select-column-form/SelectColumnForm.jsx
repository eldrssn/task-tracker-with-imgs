import React from 'react';
import { columns } from '../../../../../utils/helpers/constants';
import { Button } from '../../../../UI/button';
import styles from './Select-column-form.module.scss';

export const SelectColumnForm = ({
  column,
  handlerSubmitColumnType,
  handlerChangeColumnType,
  handleSelectToggle,
}) => {
  return (
    <form className={styles.card_mover} onSubmit={handlerSubmitColumnType}>
      <select name="type" value={column} onChange={handlerChangeColumnType}>
        <option value="" disabled>
          Куда переместить?
        </option>
        {columns.map(({ title, key }) => (
          <option key={key} value={key}>
            {title}
          </option>
        ))}
      </select>

      <Button type="submit" title="Ok" />
      <Button onClick={handleSelectToggle} title="Отмена" />
    </form>
  );
};
