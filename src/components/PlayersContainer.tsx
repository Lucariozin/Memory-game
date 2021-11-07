import { SimpleGrid, Flex } from '@chakra-ui/react';
import { PlayerCard } from './PlayerCard';

type Player = {
  playerName: string;
  score: number;
  isCurrent: boolean;
};

interface PlayersContainerProps {
  players: Player[];
};

export function PlayersContainer({ players }: PlayersContainerProps) {
  return (
    <SimpleGrid
      gridTemplateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"]}
      w="100%"
      paddingX="2"
      spacing={["2", "4", "6"]}
      marginBottom="30px"
    >

      {players.map((player) => (
        <Flex w="100%" justify="center">
          <PlayerCard
            key={player.playerName}
            name={player.playerName}
            score={player.score}
            isActive={player.isCurrent}
          />
        </Flex>
      ))}

    </SimpleGrid>
  );
}
