import React, { useState } from 'react';
import Button from '../../../../UI/button';
import NewCardForm from '../new-card-form';

const AddingCard = ({id, tracker}) => {

	const [showCardForm, setShowCardForm] = useState(false);

  return (
    <>
    {showCardForm ? 
        <NewCardForm columnId={id} tracker={tracker} setShowCardForm={setShowCardForm} />
        :
        <Button onClick={() => setShowCardForm(true)} text='+ добавить карточку'/>
      }
    </>
  );
};

export default AddingCard;