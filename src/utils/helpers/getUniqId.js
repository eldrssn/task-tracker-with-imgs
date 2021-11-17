import { getIdsFromState } from './getIdsFromState';

const getRandomId = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getUniqId = (state, min, max) => {
  const ids = getIdsFromState(state);
  const id = getRandomId(min, max);

  if (!ids.includes(id)) {
    return String(id);
  }

  getUniqId(ids, min, max);
};
