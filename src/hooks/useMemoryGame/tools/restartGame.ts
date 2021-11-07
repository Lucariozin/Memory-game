import { Dispatch, SetStateAction } from 'react';

import { shuffleCardsCB } from './shuffleCards';
import { hideAllCardsCB } from './hideAllCards';

import { Cards, RoundSetup, Player } from "../../../types/MemoryGameTypes";

type RestartGameCB = (
  setRoundSetup: Dispatch<SetStateAction<RoundSetup>>,
  setCards: Dispatch<SetStateAction<Cards>>,
  setHighestScorePlayer: Dispatch<SetStateAction<Player | undefined>>,
) => void;

export const restartGameCB: RestartGameCB = (setRoundSetup, setCards, setHighestScorePlayer) => {
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

  hideAllCardsCB(setCards);

  setCards((state) => {
    return shuffleCardsCB(state);
  });
}
