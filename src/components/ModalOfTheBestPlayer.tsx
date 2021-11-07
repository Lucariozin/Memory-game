import { Text, HStack, Modal, ModalOverlay, ModalContent, ModalBody, ModalHeader, ModalFooter, IconButton } from '@chakra-ui/react';
import { VscDebugRestart } from 'react-icons/vsc';

import { Player } from '../types/MemoryGameTypes';
import { NewGameButton } from './NewGameButton';

interface ModalOfTheBestPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  highestScorePlayer: Player | undefined;
  restartGame: () => void;
  newGame: () => void;
}

export function ModalOfTheBestPlayer({ isOpen, onClose, highestScorePlayer, restartGame, newGame }: ModalOfTheBestPlayerProps) {
  function handleNewGame() {
    onClose();
    newGame();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent bg="gray.50">
        <ModalHeader>
          <HStack justifyContent="center">
            <Text
              fontWeight="700"
              fontSize="30px"
              color="pink.500"
            >
              {highestScorePlayer?.playerName}
            </Text>
            <Text fontSize="20px" paddingLeft="10px" paddingRight="10px">the</Text>
            <Text
              fontWeight="700"
              fontSize="40px"
              color="red.600"
              transform="rotate(-10deg)"
            >
              BEST
            </Text>
          </HStack>
        </ModalHeader>

        <ModalBody>
          <HStack color="red.600" fontWeight="700" justifyContent="center">
            <Text fontSize="50px">Score:</Text>
            <Text fontSize="70px" transform="rotate(15deg)" paddingLeft="10px">{highestScorePlayer ? highestScorePlayer.score : ''}</Text>
          </HStack>
        </ModalBody>

        <ModalFooter>
          <HStack spacing="6" w="100%" justify="center" align="center">
            <IconButton
              aria-label="restart game"
              icon={<VscDebugRestart />}
              bg="transparent"
              fontSize="50px"
              color="red.600"

              _hover= {{
                bg: "transparent",
              }}

              onClick={() => {
                restartGame();
                onClose();
              }}
            />

            <NewGameButton handleNewGame={handleNewGame} />
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
