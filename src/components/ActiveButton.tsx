import { Button } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface ActiveButtonProps {
  children: ReactNode;
  isActive: boolean;
  onClick?: () => void;
};

export function ActiveButton({ children, isActive, onClick = () => {} }: ActiveButtonProps) {
  if (isActive) {
    return (
      <Button
        bg="pink.500"
        color="white"
        borderRadius="100"
        fontSize={["16", "20"]}
        fontWeight="700"
        w="100%"

        _hover={{}}
      >
        {children}
      </Button>
    );
  } else {
    return (
      <Button
        bg="gray.300"
        color="white"
        borderRadius="100"
        fontSize={["16", "20"]}
        transition=".2s ease-in-out"
        fontWeight="700"
        w="100%"

        onClick={onClick}
        _hover={{
          filter: "brightness(0.9)",
        }}
      >
        {children}
      </Button>
    );
  }
}
