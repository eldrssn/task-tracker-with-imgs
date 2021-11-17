import React, { useState } from 'react';
import Button from '../../../../UI/button';
import NewCardForm from '../new-card-form';

const AddingCard = ({ columnLabel }) => {
  const [showNewCardForm, setShowNewCardForm] = useState(false);

  const handlerShowCardForm = () => {
    setShowNewCardForm(true);
  };

  return showNewCardForm ? (
    <NewCardForm
      columnLabel={columnLabel}
      setShowNewCardForm={setShowNewCardForm}
    />
  ) : (
    <Button onClick={handlerShowCardForm} title="+ добавить карточку" />
  );
};

export default AddingCard;
