import { types } from "./types"

export const addCard = (payload = {}) => {
  return {
    type: types.addCard,
    payload,
  }
}

export const moveCard = (payload = {}) => {
  return {
    type: types.moveCard,
    payload,
  }
}