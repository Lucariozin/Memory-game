import { Player } from '../../../types/MemoryGameTypes';

export function getHighestScorePlayerCB(players: Player[]) {
  let highestScorePlayer = {
    score: 0,
  };

  players.forEach((player) => {
    if (player.score > highestScorePlayer.score) {
      highestScorePlayer = player;
    }
  });

  if (highestScorePlayer.score !== 0) {
    return highestScorePlayer;
  }

  return null;
}
