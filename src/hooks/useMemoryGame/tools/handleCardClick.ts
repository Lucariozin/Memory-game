import { Dispatch, SetStateAction } from "react";

type HandleCardClickCB = (
  setMoves: Dispatch<SetStateAction<number>>,
  setStatusCard: (id: string, status: 'hidden' | 'highlighted' | 'default') => void,
  cardId: string,
) => void;

export const handleCardClickCB: HandleCardClickCB = (setMoves, setStatusCard, cardId) => {
  setMoves((moves) => {
    if (moves + 1 > 2) return moves;
    return moves + 1;
  });
  
  setStatusCard(cardId, 'default');
};
