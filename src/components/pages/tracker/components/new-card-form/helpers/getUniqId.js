import { MAX_ID, MIN_ID } from "../constants";

const getRandomId = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

export const getUniqId = (ids) => { 
  const id = getRandomId(MIN_ID, MAX_ID);

  if (!ids.includes(id)) {
    return id;
  };

  getUniqId(ids);
}
