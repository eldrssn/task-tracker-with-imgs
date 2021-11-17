export const getIdsFromState = (state) => {
  // !TODO: переписать

  const stateKeysToArray = Object.keys(state);

  const collectIdsFromColumn = (column) => {
    return column.cards.map((card) => {
      return card.id;
    });
  };

  const idsFromState = stateKeysToArray.reduce((result, column) => {
    return [...result, ...collectIdsFromColumn(state[column])];
  }, []);

  return idsFromState;
};
