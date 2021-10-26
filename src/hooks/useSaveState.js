import { useState } from "react";

export default function useSaveState(name, state) {
  const [isSaveChanges, setIsSaveChanges] = useState(false);

  const saveChanges = () => {
    localStorage.setItem(name, JSON.stringify(state));
    setIsSaveChanges(true);
  };

  return [isSaveChanges, setIsSaveChanges, saveChanges];
}
