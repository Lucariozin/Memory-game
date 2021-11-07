import { Button } from "@chakra-ui/react";
import { useHistory } from 'react-router-dom';

interface NewGameButtonProps {
  handleNewGame?: () => void;
}

export function NewGameButton({ handleNewGame = () => {} }: NewGameButtonProps) {
  const { push } = useHistory();

  return (
    <Button
      borderRadius="100"
      bg="gray.200"
      color="red.600"
      fontWeight="700"
      transition=".3s ease-in-out"

      _hover={{
        bg: 'red.600',
        color: 'white',
      }}

      onClick={() => {
        push('/');
        handleNewGame();
      }}
    >
      New Game
    </Button>
  );
}
