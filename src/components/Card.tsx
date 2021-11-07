import { Flex, Icon, Box } from '@chakra-ui/react';
// import { useState } from 'react';

interface CardProps {
  status?: 'hidden' | 'highlighted' | 'default',
  icon?: any;
  onClick?: () => void;
};

export function Card({ status = 'hidden', icon, onClick = () => {} }: CardProps) {
  const color = status === 'hidden' ? "red.700" : status === 'highlighted' ? "pink.500" : "gray.300";

  return (
    <Flex
      w={["55px", "65px", "70px"]}
      h={["55px", "65px", "70px"]}
      borderRadius="50%"
      bg={color}
      align="center"
      justify="center"

      onClick={onClick}
    >
      {icon && status !== 'hidden' ? typeof icon === 'number' ? (
        <Box
          fontSize={["30", "40px"]}
          fontWeight={"bold"}
          color={status === 'default' ? "white" : "gray.200"}
        >
          {icon}
        </Box>
      ) : (
        <Icon
          as={icon}
          fontSize="40"
          color={status === 'default' ? "white" : "gray.200"}
        />
      ) : ""}
    </Flex>
  );
}
