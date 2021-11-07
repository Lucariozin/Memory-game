import { Dispatch, SetStateAction } from "react";
import { Cards } from "../../../types/MemoryGameTypes";

type HideCardsCB = (
  cards: Cards,
  activeCards: { id: string }[],
  setMoves: Dispatch<SetStateAction<number>>,
  setCards: Dispatch<SetStateAction<Cards>>
) => void;

export const hideCardsCB: HideCardsCB = (cards, activeCards, setMoves, setCards) => {
  const newCards: Cards = cards.map((cardObj) => {
    if (cardObj.id === activeCards[0].id || cardObj.id === activeCards[1].id) {
      return { ...cardObj, status: 'hidden' };
    }

    return cardObj;
  });
  
  setMoves(0);
  setCards(newCards);
}
