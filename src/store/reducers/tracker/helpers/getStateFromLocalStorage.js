export const stateName = 'tracker';

export const getStateFromLocalStorage = (defaultState) => {
  return (localStorage.getItem(stateName)) ?
    JSON.parse(localStorage.getItem(stateName)) : defaultState;
}