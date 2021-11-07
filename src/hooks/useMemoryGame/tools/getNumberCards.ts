import { Cards } from "../../../types/MemoryGameTypes";
import { v1 } from 'uuid';

type GetNumbersCardsCB = (
  gridSize: string,
  shuffleCards: (cardsArray: Cards) => Cards,
) => Cards;

export const getNumberCardsCB: GetNumbersCardsCB = (gridSize, shuffleCards) => {
  let numberCardsArray: Cards = [];

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  
  if (gridSize === '4x4') numbers = numbers.slice(0, 8);

  numbers.forEach((number) => {
    numberCardsArray.push({
      icon: number,
      status: 'hidden',
      id: v1(),
    });

    numberCardsArray.push({
      icon: number,
      status: 'hidden',
      id: v1(),
    });
  });

  const shuffledCards = shuffleCards(numberCardsArray);

  return shuffledCards;
};
