import { Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

import { Header } from "../components/Header";
import { MemoryContainer } from '../components/MemoryContainer';
import { ModalOfTheBestPlayer } from '../components/ModalOfTheBestPlayer';
import { PlayersContainer } from '../components/PlayersContainer';

import { useMemoryGame } from '../hooks/useMemoryGame';

export default function Play() {
  const { roundSetup, highestScorePlayer, restartGame, newGame } = useMemoryGame();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (highestScorePlayer) setModalIsOpen(true);
  }, [highestScorePlayer]);

  return (
    <Flex
      bg="gray.50"
      w="100%"
      minH="100vh"
      direction="column"
    >
      <ModalOfTheBestPlayer
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        highestScorePlayer={highestScorePlayer}
        restartGame={restartGame}
        newGame={newGame}
      />

      <Header />

      <MemoryContainer />

      <Flex
        w="900px"
        mx="auto"
      >
        <PlayersContainer players={roundSetup.players} />
      </Flex>
    </Flex>
  );
}
