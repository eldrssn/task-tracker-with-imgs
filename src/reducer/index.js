import { types } from "../types"
import { defaultState } from "../data";

export const reducer = (state = defaultState, action ) => {
  switch (action.type) {

    case types.addCard:
      const {columnId, newCard} = action.payload;

      return state.map(col => {
        if (col.id === columnId) {
        col.cards = [newCard, ...col.cards ];
        }
        return col;
      });

    case types.moveCard:
      const {id, newColumn, column} = action.payload;

      let card;
      state.forEach(col => {
        if (col.id === column) {
          card = col.cards.find(card => card.id === id);
          card = { ...card, column: newColumn };
        }
      })
      
      return state.map(col => {
        if (col.id === column) {
          col.cards = col.cards.filter(card => card.id !== id);
        }
        if (col.id === newColumn) {
          col.cards = [card, ...col.cards]
        }
        return col;
      });
      
    default:
      return state;
  }
}