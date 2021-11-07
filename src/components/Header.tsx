import { Flex, Heading, HStack, Button } from '@chakra-ui/react';
import { useMemoryGame } from '../hooks/useMemoryGame';

import { NewGameButton } from './NewGameButton';

export function Header() {
  const { restartGame } = useMemoryGame();

  return (
    <Flex 
      as="header"
      w="100%"
      h="80px"
      bg="gray.50"
    >
      <Flex
        w="900px"
        mx="auto"
        align="center"
        justify="space-between"
      >
        <Heading
          as="h1"
          fontSize="25"
          color="red.600"
        >
          Memory
        </Heading>

        <HStack spacing="3">
          <Button
            borderRadius="100"
            color="white"
            bg="pink.500"
            fontWeight="700"
            paddingX="6"
            transition=".2s ease-in-out"

            _hover={{
              filter: 'brightness(0.9)',
            }}

            onClick={restartGame}
          >
            Restart
          </Button>
          
          <NewGameButton />
          {/* <Button
            borderRadius="100"
            bg="gray.200"
            color="red.600"
            fontWeight="700"
            transition=".3s ease-in-out"

            _hover={{
              bg: 'red.600',
              color: 'white',
            }}

            onClick={handleNewGame}
          >
            New Game
          </Button> */}
        </HStack>
      </Flex>
    </Flex>
  );
}
