import { Flex, Text } from '@chakra-ui/react';

interface PlayerCardProps {
  name: string;
  score: number;
  isActive?: boolean;
};

export function PlayerCard({ name, score, isActive = false }: PlayerCardProps) {
  return (
    <Flex
      maxW="210px"
      w="100%"
      direction="column"
      align="center"
    >
      <Flex
        bg={isActive ? "pink.500" : "gray.200"}
        borderRadius="10"
        px="4"
        align="center"
        justify="space-between"
        w="100%"
        h="14"
        marginBottom={isActive ? "" : "17px"}
      >
        <Text
          fontSize="14"
          fontWeight="600"
          color={isActive ? "white" : "red.600"}
        >
          {name}
        </Text>

        <Text
          fontWeight="700"
          fontSize="25"
          color={isActive ? "white" : "red.600"}
        >
          {score}
        </Text>
      </Flex>
      
      <Text
        mt="4"
        textTransform="uppercase"
        fontSize="13"
        fontWeight="700"
        color="red.600"
        letterSpacing="2px"
      >
        {isActive ? "current turn" : ""}
      </Text>
    </Flex>
  );
}
