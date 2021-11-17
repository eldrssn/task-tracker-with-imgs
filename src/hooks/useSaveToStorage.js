import { useState } from 'react';

export default function useSaveToStorage(name, state) {
  const [isSaveToStorage, setIsSaveToStorage] = useState(false);

  const handleSaveToStorage = () => {
    localStorage.setItem(name, JSON.stringify(state));
    setIsSaveToStorage(true);
  };

  return [isSaveToStorage, setIsSaveToStorage, handleSaveToStorage];
}
