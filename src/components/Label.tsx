import { Flex, Text, HStack } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface ChooseOneProps {
  children: ReactNode;
  text: string;
};

export function Label({ children, text }: ChooseOneProps) {
  return (
    <Flex
      direction="column"
      w="100%"
    >
      <Text color="pink.500" fontWeight="600" mb="3">{text}</Text>

      <HStack
        w="100%"
        spacing="25px"
      >
        {children}
      </HStack>
    </Flex>
  );
}
