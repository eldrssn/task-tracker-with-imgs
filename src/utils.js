const MIN_ID = 1;
const MAX_ID = 5000;

export const stateName = 'tracker';
export const URL = 'https://jsonplaceholder.typicode.com/photos/';
export const DEBOUNCE_DELAY = 200;

export const getStateFromLocalStorage = (defaultState) => {
  return (localStorage.getItem(stateName)) ?
    JSON.parse(localStorage.getItem(stateName)) : defaultState;
}

const getRandomId = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

export const getIdsFromState = (state) => {
  return state.reduce((arr, col) => {
    return [...arr, col.cards.map(card => card.id)];  
  }, []).flat();
}

export const getUniqId = (ids) => { 
  const id = getRandomId(MIN_ID, MAX_ID);

  if (!ids.includes(id)) {
    return id;
  };

  getUniqId(ids);
}

export const checkOnlySpace = (input) => {

  const onInputChange = () => {
    if (!input.value.trim().length) {
      input.setCustomValidity('Поле не должно содержать только пробелы');
    } else {
      input.setCustomValidity('');
    }
    input.reportValidity();
    input.removeEventListener('input', onInputChange)
  }

  if (input) {
    input.addEventListener('input', onInputChange)
  }
}