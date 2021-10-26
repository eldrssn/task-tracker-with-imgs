import { types } from "../types"

export const addCard = (data) => {
  return (dispatch) => {
    dispatch({
      type: types.addCard,
      payload: data
    })
  }
}

export const moveCard = (data) => {
  return (dispatch) => {
    dispatch({
      type: types.moveCard,
      payload: data
    })
  }
}