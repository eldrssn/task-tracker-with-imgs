// import { Reducer } from "redux";
import { defaultState } from "../../data";
import { Action, ICard, State, ActionTypes } from "../../types";
import { getStateFromLocalStorage } from "../../utils";

const initialState: State  = getStateFromLocalStorage(defaultState);

const trackerReducer = (state: State = initialState, action: Action ): State => {
  // переделать стейт в объект
// const trackerReducer: Reducer<State, Action> = (state, action ) => {
  switch (action.type) {

    case ActionTypes.addCard:
      const {columnId, newCard} = action.payload;

      return state.map(col => {
        if (col.id === columnId) {
        col.cards = [newCard, ...col.cards ];
        }
        return col;
      });

    case ActionTypes.moveCard:
      const {id, newColumn, column} = action.payload;

      let card: ICard | undefined;
      state.forEach(col => {
        if (col.id === column) {
          card = col.cards.find((card) => card.id === id);
          if (card) {
            card = { ...card, column: newColumn };
          }
          
        }
      })
      
      return state.map(col => {
        if (col.id === column) {
          col.cards = col.cards.filter(card => card.id !== id);
        }
        if (col.id === newColumn && card) {
          col.cards = [card, ...col.cards]
        }
        return col;
      });
      
    default:
      return state;
  }
}

export default trackerReducer;
