import { IColumn, State, ICard } from "./types";

const MIN_ID = 1;
const MAX_ID = 5000;

export const stateName: string = 'tracker';
export const URL = 'https://jsonplaceholder.typicode.com/photos/';
export const DEBOUNCE_DELAY = 200;

type getStateFromLocalStorageType = (defaultState: State) => State;

export const getStateFromLocalStorage: getStateFromLocalStorageType = (defaultState: State) => {
  const state = localStorage.getItem(stateName);
  return (state) ? JSON.parse(state) : defaultState;
}

type GetRandomIdType = (min: number, max: number) => number;

const getRandomId: GetRandomIdType = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

export const getIdsFromState = (state: State): (number | null)[] => {
  return state.reduce((arr: (number | null)[], col: IColumn): (number | null)[] => {
    return [...arr, ...col.cards.map((card: ICard) => card.id)];  
  }, []);
}

export const getUniqId = (ids: (number | null)[]) => { 
  const id: number = getRandomId(MIN_ID, MAX_ID);

  if (!ids.includes(id)) {
    return id;
  };

  getUniqId(ids);
}

export const checkOnlySpace = (input: HTMLInputElement | null) => { 

  if (input) {
    const onInputChange = () => {
      if (!input.value.trim().length) {
        input.setCustomValidity('Поле не должно содержать только пробелы');
      } else {
        input.setCustomValidity('');
      }
      input.reportValidity();
      input.removeEventListener('input', onInputChange)
    }

    input.addEventListener('input', onInputChange)
  }
}