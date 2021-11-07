import { createContext, useRef, useContext, useCallback, useEffect } from 'react';

import { MemoryGameContextType } from '../../types/MemoryGameTypes';

import { getIconCardsCB } from './tools/getIconCards';
import { getNumberCardsCB } from './tools/getNumberCards';

export const MemoryGameContext = createContext({} as MemoryGameContextType);

export const useMemoryGame = () => {
  const { setCards, roundSetup, shuffleCards, ...rest } = useContext(MemoryGameContext);

  const roundThemeRef = useRef(roundSetup.theme);


  const getIconCards = useCallback(() => {
    return getIconCardsCB(roundSetup.gridSize, shuffleCards);
  }, [roundSetup.gridSize, shuffleCards]);

  const getNumberCards = useCallback(() => {
    return getNumberCardsCB(roundSetup.gridSize, shuffleCards);
  }, [roundSetup.gridSize, shuffleCards]);


  useEffect(() => {
    const shuffledCards = roundThemeRef.current === 'Icons' ? getIconCards() : getNumberCards();

    setCards(shuffledCards);
  }, [setCards, getIconCards, getNumberCards]);

  return { setCards, roundSetup, ...rest };
};
