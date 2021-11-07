import { Player, RoundSetup } from "../../../types/MemoryGameTypes";

type SetNextCurrentPlayerCB = (
  setRoundSetup: (fn: (state: RoundSetup) => RoundSetup) => void,
  currentPlayer: Player,
) => void;

export const setNextCurrentPlayerCB: SetNextCurrentPlayerCB = (setRoundSetup, currentPlayer) => {
  setRoundSetup((state) => {
    const newPlayers = state.players.map((player) => {
      if (player.id === currentPlayer.id + 1) {
        return {
          ...player,
          isCurrent: true,
        };
      }

      if (player.id === 1 && currentPlayer.id === state.numberOfPlayers) {
        return {
          ...player,
          isCurrent: true,
        };
      }

      return {
        ...player,
        isCurrent: false,
      };
    });
      
    return {
      ...state,
      players: newPlayers,
    };
  });
}
