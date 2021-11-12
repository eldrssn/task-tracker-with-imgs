import { initialReduxState } from "../../initialReduxState";
import { getStateFromLocalStorage } from "./helpers/getStateFromLocalStorage";
import { types } from "./types";

const initialState = getStateFromLocalStorage(initialReduxState);

const ACTION_HANDLERS = {
  [types.addCard]: (state, action) => {
    const { columnId, newCard } = action.payload;
    const currentColumn = state[columnId];
    currentColumn.cards.push(newCard);

    return {
      ...state,
      [columnId]: currentColumn,
    };
  },

  [types.moveCard]: (state, action) => {
    const { id, newColumn, column: oldColumn } = action.payload;

    const oldCol = state[oldColumn];
    const newCol = state[newColumn];

    const card = oldCol.cards.find((card) => card.id === id);
    oldCol.cards = oldCol.cards.filter((card) => card.id !== id);
    newCol.cards.push({ ...card, column: newColumn })

    return {
      ...state,
      [oldColumn]: oldCol,
      [newCol]: newCol,
    };
  }
}

export const tracker = (state = initialState, action) => {
  return ACTION_HANDLERS[action.type] ? ACTION_HANDLERS[action.type](state, action) : state;
}
