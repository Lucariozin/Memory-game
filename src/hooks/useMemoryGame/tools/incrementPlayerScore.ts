import { Dispatch, SetStateAction } from "react";
import { Player, RoundSetup } from "../../../types/MemoryGameTypes";

type IncrementPlayerScoreCB = (
  setRoundSetup: Dispatch<SetStateAction<RoundSetup>>,
  players: Player[],
  currentPlayer: Player,
  currentPlayerHits: number,
  currentPlayerRef: { current: Player }
) => void;

export const incrementPlayerScoreCB: IncrementPlayerScoreCB = (setRoundSetup, players, currentPlayer, currentPlayerHits, currentPlayerRef) => {
  setRoundSetup((state) => {
    const playersCopy = [ ...players ];

    const newPlayers = playersCopy.map((player) => {
      if (player.playerName === currentPlayer.playerName) {
        const currentPlayerIncremented = {
          ...currentPlayer,
          score: currentPlayerHits > 0 ? currentPlayer.score + 2 : currentPlayer.score + 1,
        };

        currentPlayerRef.current = currentPlayerIncremented;

        return currentPlayerIncremented;
      }

      return player;
    });

    return {
      ...state,
      players: newPlayers,
    };
  });
};
