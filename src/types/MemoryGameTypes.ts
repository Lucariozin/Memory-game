import { Dispatch, SetStateAction } from 'react';

export type CardType = {
  status: 'hidden' | 'highlighted' | 'default',
  icon: any;
  id: string;
};

export type Cards = CardType[];

export type Player = {
  id: number;
  playerName: string;
  score: number;
  isCurrent: boolean;
};

export type RoundSetup = {
  theme: string;
  players: Player[];
  numberOfPlayers: number;
  gridSize: string;
};

export type MemoryGameContextType = {
  cards: Cards;
  handleCardClick: (cardId: string) => void;
  setCards: Dispatch<SetStateAction<Cards>>;
  roundSetup: RoundSetup;
  setRoundSetup: Dispatch<SetStateAction<RoundSetup>>;
  currentPlayer: Player;
  shuffleCards: (cardsArray: Cards) => Cards;
  restartGame: () => void;
  highestScorePlayer: Player | undefined;
  newGame: () => void;
  playersWhoTied: Player[];
};
