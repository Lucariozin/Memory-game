import { SimpleGrid } from '@chakra-ui/react';
import { useMemoryGame } from '../hooks/useMemoryGame';

import { Card } from './Card';

export function MemoryContainer() {
  const { cards, handleCardClick, roundSetup } = useMemoryGame();
  
  return (
    <SimpleGrid
      mx="auto"
      mt="20px"
      mb="50px"
      spacing={["5px", "8px", "10px"]}
      paddingX={["1"]}
      gridTemplateColumns={roundSetup.gridSize === "4x4" ? "1fr 1fr 1fr 1fr" : ["1fr 1fr 1fr 1fr 1fr 1fr"]}
    >
      
      {cards.map((card) => (
        <Card
          key={card.id}
          icon={card.icon}
          status={card.status}
          onClick={() => handleCardClick(card.id)}
        />
      ))}

    </SimpleGrid>
  );
}
