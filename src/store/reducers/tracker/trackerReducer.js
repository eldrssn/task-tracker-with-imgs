import { initialReduxState } from '../../initialReduxState';
import { getStateFromLocalStorage } from './helpers/getStateFromLocalStorage';
import { types } from './types';

const initialState = getStateFromLocalStorage(initialReduxState.tracker);

const ACTION_HANDLERS = {
  [types.addCard]: (state, action) => {
    const { columnLabel, newCard } = action.payload;
    const currentColumn = state[columnLabel];
    currentColumn.cards.push(newCard);

    return {
      ...state,
      [columnLabel]: currentColumn,
    };
  },

  [types.moveCard]: (state, action) => {
    const { id, newColumnLabel, columnLabel } = action.payload;

    const oldColumn = state[columnLabel];
    const newColumn = state[newColumnLabel];

    const currentCard = oldColumn.cards.find((card) => {
      return card.id === id;
    });

    oldColumn.cards = oldColumn.cards.filter((card) => {
      return card.id !== id;
    });
    newColumn.cards.push(currentCard);

    return {
      ...state,
      [newColumnLabel]: newColumn,
      [columnLabel]: oldColumn,
    };
  },
};

export const tracker = (state = initialState, action) => {
  return ACTION_HANDLERS[action.type]
    ? ACTION_HANDLERS[action.type](state, action)
    : state;
};
