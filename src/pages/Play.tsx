import { Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';

import { Header } from "../components/Header";
import { MemoryContainer } from '../components/MemoryContainer';
import { ModalOfTheBestPlayer } from '../components/ModalOfTheBestPlayer';
import { PlayersContainer } from '../components/PlayersContainer';

import { useMemoryGame } from '../hooks/useMemoryGame';

export default function Play() {
  const { roundSetup, highestScorePlayer, playersWhoTied, restartGame, newGame } = useMemoryGame();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (highestScorePlayer) setModalIsOpen(true);

    if (!highestScorePlayer && playersWhoTied.length > 0) {
      setModalIsOpen(true);
    } 
  }, [highestScorePlayer, playersWhoTied]);

  return (
    <Flex
      bg="gray.50"
      w="100%"
      minH="100vh"
      direction="column"
      paddingTop={["120px", "100px"]}
      justify="center"
    >
      <ModalOfTheBestPlayer
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        highestScorePlayer={highestScorePlayer}
        playersWhoTied={playersWhoTied}
        restartGame={restartGame}
        newGame={newGame}
      />

      <Header />

      <MemoryContainer />

      <Flex
        maxW="900px"
        w="100%"
        mx="auto"
      >
        <PlayersContainer players={roundSetup.players} />
      </Flex>
    </Flex>
  );
}
