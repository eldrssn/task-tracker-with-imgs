import { TRACKER_KEY } from '../../../utils/helpers/constants';
import { getValueFromLocalStorage } from '../../../utils/helpers/localStorageHelpers';
import { initialReduxState } from '../../initialReduxState';
import { types } from './types';

const initialState = getValueFromLocalStorage(
  TRACKER_KEY,
  initialReduxState.tracker
);

const ACTION_HANDLERS = {
  [types.addCard]: (state, action) => {
    const newCard = action.payload;

    return {
      ...state,
      cards: {
        ...state.cards,
        [newCard.id]: newCard,
      },
      ids: [...state.ids, newCard.id],
    };
  },

  [types.moveCard]: (state, action) => {
    const { id, newColumnType } = action.payload;

    const currentCard = state.cards[id];

    return {
      ...state,
      cards: {
        ...state.cards,
        [id]: {
          ...currentCard,
          type: newColumnType,
        },
      },
    };
  },
};

export const tracker = (state = initialState, action) => {
  return ACTION_HANDLERS[action.type]
    ? ACTION_HANDLERS[action.type](state, action)
    : state;
};
