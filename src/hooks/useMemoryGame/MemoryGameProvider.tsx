import { ReactNode, useState, useRef, useCallback, useEffect } from 'react';

import { Cards, Player, RoundSetup } from '../../types/MemoryGameTypes';

import { MemoryGameContext } from './index';

import { getHighestScorePlayerCB } from './tools/getHighestScorePlayer';
import { allCardsAreHighlightedCB } from './tools/allCardsAreHighlighted';
import { setStatusCardCB } from './tools/setStatusCard';
import { setNextCurrentPlayerCB } from './tools/setNextCurrentPlayer';
import { shuffleCardsCB } from './tools/shuffleCards';
import { restartGameCB } from './tools/restartGame';
import { hideCardsCB } from './tools/hideCards';
import { createPlayersCB } from './tools/createPlayers';
import { incrementPlayerScoreCB } from './tools/incrementPlayerScore';
import { handleCardClickCB } from './tools/handleCardClick';
import { newGameCB } from './tools/newGame';

interface MemoryGameProviderProps {
  children: ReactNode;
};

export function MemoryGameProvider({ children }: MemoryGameProviderProps) {
  const [gameIsOver, setGameIsOver] = useState(false);

  const [cards, setCards] = useState<Cards>([]);
  const [moves, setMoves] = useState(0);

  const [currentPlayerHits, setCurrentPlayerHits] = useState(0);
  
  const [currentPlayer, setCurrentPlayer] = useState<Player>({
    id: 1,
    playerName: 'Player 1',
    score: 0,
    isCurrent: true,
  });

  const currentPlayerRef = useRef(currentPlayer);

  const [highestScorePlayer, setHighestScorePlayer] = useState<Player>();
  const [playersWhoTied, setPlayersWhoTied] = useState<Player[]>([]);

  const [roundSetup, setRoundSetup] = useState<RoundSetup>({
    theme: 'Numbers',
    players: [
      {
        id: 1,
        playerName: 'Player 1',
        score: 0,
        isCurrent: true,
      },
    ],
    numberOfPlayers: 1,
    gridSize: '4x4',
  });


  const shuffleCards = useCallback((cardsArray: Cards) => shuffleCardsCB(cardsArray), []);

  const hideCards = useCallback((activeCards: { id: string }[]) => {
    hideCardsCB(cards, activeCards, setMoves, setCards)
  }, [cards]);
  
  const restartGame = useCallback(() => restartGameCB(setRoundSetup, setCards, setHighestScorePlayer, setPlayersWhoTied), []);
  
  const newGame = useCallback(() => newGameCB(setRoundSetup, setHighestScorePlayer, setPlayersWhoTied), []);

  const createPlayers = useCallback((numberOfPlayers: number) => {
    createPlayersCB(numberOfPlayers, setRoundSetup);
  }, []);

  const incrementPlayerScore = useCallback((currentPlayer: Player) => {
    incrementPlayerScoreCB(
      setRoundSetup, 
      roundSetup.players, 
      currentPlayer, 
      currentPlayerHits, 
      currentPlayerRef
    );

  }, [currentPlayerHits, roundSetup.players]);

  const setNextCurrentPlayer = () => setNextCurrentPlayerCB(setRoundSetup, currentPlayerRef.current);
  
  const setStatusCard = useCallback((id: string, status: 'hidden' | 'highlighted' | 'default') => {
    setStatusCardCB(moves, cards, id, status, setCards);
  }, [cards, moves]);
  
  const handleCardClick = useCallback((cardId: string) => {
    handleCardClickCB(setMoves, setStatusCard, cardId);
  }, [setStatusCard]);

  const allCardsAreHighlighted = useCallback(() => allCardsAreHighlightedCB(cards), [cards]);

  const getHighestScorePlayer = useCallback(() => getHighestScorePlayerCB(roundSetup.players), [roundSetup.players]);

  
  useEffect(() => {
    if (gameIsOver) {
      const highestScorePlayer = getHighestScorePlayer() as Player[];

      if (highestScorePlayer.length === 1) {
        setHighestScorePlayer(highestScorePlayer[0]);
      }

      if (highestScorePlayer.length > 1) {
        setPlayersWhoTied(highestScorePlayer);
      }
    }
  }, [gameIsOver, getHighestScorePlayer]);

  useEffect(() => {
    const allInHighlighted = allCardsAreHighlighted();

    if (allInHighlighted) {
      setGameIsOver(true);
    } else {
      setGameIsOver(false);
    }
  }, [cards, allCardsAreHighlighted]);

  useEffect(() => {
    roundSetup.players.forEach((player) => {
      if (player.isCurrent) {
        setCurrentPlayer(player);
        currentPlayerRef.current = player;
      }
    });

  }, [roundSetup.players])

  useEffect(() => {
    createPlayers(roundSetup.numberOfPlayers);
  }, [roundSetup.numberOfPlayers, createPlayers])

  useEffect(() => {
    if (moves === 2) {
      const activeCards = cards.filter((cardObj) => {
        if (cardObj.status === 'default') return cardObj;
        return null;
      });

      if (activeCards.length !== 2) {
        setMoves(0);
        return;
      };

      const cardsIsEqual = Object.is(activeCards[0].icon, activeCards[1].icon);

      if (cardsIsEqual) {
        setCurrentPlayerHits((state) => state + 1);
        incrementPlayerScore(currentPlayerRef.current);

        const newCards: Cards = cards.map((cardObj) => {
          if (cardObj.id === activeCards[0].id || cardObj.id === activeCards[1].id) {
            return { ...cardObj, status: 'highlighted' };
          }

          return cardObj;
        });

        setCards(newCards);
        setMoves(0);
      } else {
        setTimeout(() => {
          hideCards(activeCards);
          
          setCurrentPlayerHits(0);
          setNextCurrentPlayer();
        }, 1000);
      }
    }
  }, [moves, cards, incrementPlayerScore, hideCards]);

  return (
    <MemoryGameContext.Provider value={{
      cards,
      setCards,
      handleCardClick,
      roundSetup,
      setRoundSetup,
      currentPlayer,
      shuffleCards,
      restartGame,
      highestScorePlayer,
      newGame,
      playersWhoTied
    }}>
      {children}
    </MemoryGameContext.Provider>
  );
}
