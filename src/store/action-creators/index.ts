import { Dispatch } from "react"
import { Action, ActionTypes, AddCardActionPayload, MoveCardActionPayload } from "../../types"

export const addCard = (data: AddCardActionPayload) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.addCard,
      payload: data
    })
  }
}

export const moveCard = (data: MoveCardActionPayload) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.moveCard,
      payload: data
    })
  }
}