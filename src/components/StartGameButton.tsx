import { Button } from '@chakra-ui/react';

interface StartGameButtonProps {
  onClick: () => void;
};

export function StartGameButton({ onClick }: StartGameButtonProps) {
  return (
    <Button
      bg="red.600"
      color="white"
      fontWeight="700"
      fontSize="20"
      w="100%"
      h="60px"
      borderRadius="100"
      transition=".2s ease-in-out"
      onClick={onClick}

      _hover={{
        bg: "red.500",
      }}
    >
      Start Game
    </Button>
  );
}
