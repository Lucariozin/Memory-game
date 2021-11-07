import { Dispatch, SetStateAction } from "react";
import { Player, RoundSetup } from "../../../types/MemoryGameTypes";

type NewGameCB = (
  setRoundSetup: Dispatch<SetStateAction<RoundSetup>>,
  setHighestScorePlayer: Dispatch<SetStateAction<Player | undefined>>,
) => void;

export const newGameCB: NewGameCB = (setRoundSetup, setHighestScorePlayer) => {
  setRoundSetup((state) => {
    const newPlayers = state.players.map((player) => {
      if (player.id === 1) {
        return {
          ...player,
          score: 0,
          isCurrent: true,
        };
      }

      return {
        ...player,
        score: 0,
        isCurrent: false,
      };
    });

    return {
      ...state,
      players: newPlayers,
    };
  });

  setHighestScorePlayer(undefined);
};
