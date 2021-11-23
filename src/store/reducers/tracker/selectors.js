import { createSelector } from 'reselect';

export const selectTracker = (state) => state.tracker;

export const selectCards = (state) => state.tracker.cards;

export const selectCardIds = (state) => state.tracker.ids;

export const selectCardsByType = createSelector(
  selectCards,
  selectCardIds,
  (cards, cardsIds) => {
    return cardsIds.reduce((accumulator, cardId) => {
      const currentCard = cards[cardId];

      if (!accumulator[currentCard.type]) {
        accumulator[currentCard.type] = [];
      }

      accumulator[currentCard.type].push(currentCard);

      return accumulator;
    }, {});
  }
);
