import { Text, HStack, Modal, ModalOverlay, ModalContent, ModalBody, ModalHeader, ModalFooter, IconButton } from '@chakra-ui/react';
import { VscDebugRestart } from 'react-icons/vsc';

import { Player } from '../types/MemoryGameTypes';
import { NewGameButton } from './NewGameButton';

interface ModalOfTheBestPlayerProps {
  isOpen: boolean;
  onClose: () => void;
  highestScorePlayer: Player | undefined;
  playersWhoTied: Player[];
  restartGame: () => void;
  newGame: () => void;
}

export function ModalOfTheBestPlayer({ isOpen, onClose, highestScorePlayer, playersWhoTied, restartGame, newGame }: ModalOfTheBestPlayerProps) {
  function handleNewGame() {
    onClose();
    newGame();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />

      <ModalContent bg="gray.50" marginX="1">
        <ModalHeader>
          <HStack justifyContent="center">
            {highestScorePlayer ? (
              <>
                <Text
                  fontWeight="700"
                  fontSize={["20px", "30px"]}
                  color="pink.500"
                >
                  {highestScorePlayer.playerName}
                </Text>
                <Text fontSize="20px" paddingLeft="10px" paddingRight="10px">the</Text>
                <Text
                  fontWeight="700"
                  fontSize={["30px", "40px"]}
                  color="red.600"
                  transform="rotate(-10deg)"
                >
                  BEST
                </Text>
              </>
            ) : (
              <Text fontWeight="700" color="red.600" fontSize="50px">DRAW</Text>
            )}
          </HStack>
        </ModalHeader>

        <ModalBody>
          {highestScorePlayer ? (
            <HStack color="red.600" fontWeight="700" justifyContent="center">
              <Text fontSize="50px">Score:</Text>
              <Text fontSize="70px" transform="rotate(15deg)" paddingLeft="10px">{highestScorePlayer ? highestScorePlayer.score : ''}</Text>
            </HStack>
          ) : playersWhoTied.length > 1 && (
            <HStack justify="center">
              <Text fontSize="30px" fontWeight="600" color="pink.500">{playersWhoTied[0].playerName}</Text>
              <Text fontWeight="600" fontSize="40px" color="red.600" paddingX="10px">|</Text>
              <Text fontSize="30px" fontWeight="600" color="pink.500">{playersWhoTied[1].playerName}</Text>
            </HStack>
          )}
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
