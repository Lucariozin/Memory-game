import { Player } from '../../../types/MemoryGameTypes';

export function getHighestScorePlayerCB(players: Player[]) {
  let highestScorePlayer = {
    score: 0,
  } as Player;

  const playersWhoTied: Player[] = [];

  players.forEach((player) => {
    if (player.score > highestScorePlayer.score) {
      highestScorePlayer = player;
    }
  });

  if (highestScorePlayer.score !== 0) {
    players.forEach((player) => {
      if (player.score === highestScorePlayer.score && player.id !== highestScorePlayer.id) {
        playersWhoTied.push(player);
        playersWhoTied.push(highestScorePlayer);
      }
    });

    if (playersWhoTied.length > 0) {
      return playersWhoTied;
    }

    return [ highestScorePlayer ];
  }

  return [];
}
