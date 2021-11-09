import { useState } from "react";
import { State } from "../types";

type useSaveStateType = (name: string, state: State) => [
    isSaveChanges: boolean,
    setIsSaveChanges: React.Dispatch<React.SetStateAction<boolean>>,
    saveChanges: () => void
  ];

const useSaveState: useSaveStateType = (name, state) => {
  const [isSaveChanges, setIsSaveChanges] = useState(false);

  const saveChanges = () => {
    localStorage.setItem(name, JSON.stringify(state));
    setIsSaveChanges(true);
  };

  return [isSaveChanges, setIsSaveChanges, saveChanges];
}

export default useSaveState;