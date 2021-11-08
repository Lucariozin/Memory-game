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
      paddingX="2"
      position="absolute"
      top="0"
      left="0"
      paddingTop={["20px", "0"]}
    >
      <Flex
        w="900px"
        mx="auto"
        align="center"
        justify="space-between"
        flexDirection={["column", "row"]}
      >
        <Heading
          as="h1"
          fontSize="25"
          color="red.600"
          marginBottom={["20px", "0"]}
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

        </HStack>
      </Flex>
    </Flex>
  );
}
