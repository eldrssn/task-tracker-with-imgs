import React, { useState } from 'react';
import { Button } from '../../../../UI/button';
import { NewCardForm } from '../new-card-form';

export const AddingCard = ({ columnType }) => {
  const [showNewCardForm, setShowNewCardForm] = useState(false);

  const handlerShowCardForm = () => {
    setShowNewCardForm(true);
  };

  return showNewCardForm ? (
    <NewCardForm
      columnType={columnType}
      setShowNewCardForm={setShowNewCardForm}
    />
  ) : (
    <Button onClick={handlerShowCardForm} title="+ добавить карточку" />
  );
};
