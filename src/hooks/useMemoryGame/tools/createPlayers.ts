import { Dispatch, SetStateAction } from "react";
import { Player, RoundSetup } from "../../../types/MemoryGameTypes";

type CreatePlayersCB = (
  numberOfPlayers: number,
  setRoundSetup: Dispatch<SetStateAction<RoundSetup>>
) => void;

export const createPlayersCB: CreatePlayersCB = (numberOfPlayers, setRoundSetup) => {
  const players: Player[] = [];

  for (let c = 1; c <= numberOfPlayers; c++) {
    players.push({
      id: c,
      playerName: `Player ${c}`,
      score: 0,
      isCurrent: c === 1 ? true : false,
    });
  }

  setRoundSetup((state) => {
    return { ...state, players};
  });
};
