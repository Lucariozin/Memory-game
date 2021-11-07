import { Cards } from "../../../types/MemoryGameTypes";

type SetStatusCardCB = (
  moves: number,
  cards: Cards,
  id: string,
  status: 'hidden' | 'highlighted' | 'default',
  setCards: (newState: Cards) => void,
) => void;

export const setStatusCardCB: SetStatusCardCB = (moves, cards, id, status, setCards) => {
  if (moves < 2) {
    const cardsDefault = cards.filter((cardObj) => {
      if (cardObj.status === 'default') return cardObj;
      return null;
    });

    if (cardsDefault.length > 1) return;

    const [ card ] = cards.filter((cardObj) => {
      if (cardObj.id === id) return cardObj;
      return null;
    });
    
    if (card.status === 'highlighted') return;

    const newCards = cards.map((cardObj) => {
      if (cardObj.id === card.id) return { ...cardObj, status };
      return cardObj;
    });
  
    setCards(newCards);
  }
}
