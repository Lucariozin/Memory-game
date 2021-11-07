import { Dispatch, SetStateAction } from "react";
import { Cards } from "../../../types/MemoryGameTypes";

export function hideAllCardsCB(setCards: Dispatch<SetStateAction<Cards>>) {
  setCards((state) => {
    return state.map((card) => {
      return {
        ...card,
        status: 'hidden',
      };
    });
  });
}
