import { Cards } from '../../../types/MemoryGameTypes';

export function allCardsAreHighlightedCB(cards: Cards) {
  let allInHighlighted = true;

  cards.forEach((card) => {
    if (card.status !== 'highlighted') allInHighlighted = false;
  });

  return allInHighlighted;
}
