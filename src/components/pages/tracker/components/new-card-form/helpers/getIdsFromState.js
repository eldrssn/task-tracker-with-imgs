export const getIdsFromState = (state) => {
    return Object.keys(state).reduce((arr, col) => {
      return [...arr, ...state[col].cards.map(card => card.id)];  
    }, []);
  }