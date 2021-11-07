import { Flex, Heading, VStack } from "@chakra-ui/react";
import { SelectGridSize } from "../components/SelectGridSize";
import { SelectNumbersOfPlayers } from "../components/SelectNumbersOfPlayers";
import { SelectTheme } from "../components/SelectTheme";
import { StartGameButton } from "../components/StartGameButton";
import { useMemoryGame } from "../hooks/useMemoryGame";

import { useHistory } from 'react-router-dom';

export default function Home() {
  const { roundSetup, setRoundSetup, newGame } = useMemoryGame();
  const { push } = useHistory();

  return (
    <Flex
      as="main"
      w="100%"
      h="100vh"
      align="center"
      justify="center"
      direction="column"
      bg="red.600"
      paddingX="3"
    >
      <Heading
        as="h1"
        mb="5"
        fontSize="25"
        color="white"
      >
        Memory
      </Heading>

      <VStack
        maxW="550px"
        w="100%"
        bg="gray.50"
        p={["6", "12"]}
        borderRadius="15"
        spacing="30px"
        boxShadow="5px 5px 5px rgba(0, 0, 0, 0.3)"
      >
        <SelectTheme roundSetup={roundSetup} setRoundSetup={setRoundSetup} />

        <SelectNumbersOfPlayers roundSetup={roundSetup} setRoundSetup={setRoundSetup} />

        <SelectGridSize roundSetup={roundSetup} setRoundSetup={setRoundSetup} />

        <StartGameButton onClick={() => {
          newGame();
          push('/play');
        }} />

      </VStack>
    </Flex>
  );
}
