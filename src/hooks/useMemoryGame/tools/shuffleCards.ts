import { Cards } from "../../../types/MemoryGameTypes";

export function shuffleCardsCB(cardsArray: Cards) {
  let shuffledCards = cardsArray;

  for (let i = 0; i < shuffledCards.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
  }

  return shuffledCards;
}
