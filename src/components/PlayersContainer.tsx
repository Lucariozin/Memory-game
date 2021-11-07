import { HStack } from '@chakra-ui/react';
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
    <HStack
      w="100%"
      spacing="6"
      marginBottom="30px"
      justify="center"
    >

      {players.map((player) => (
        <PlayerCard
          key={player.playerName}
          name={player.playerName}
          score={player.score}
          isActive={player.isCurrent}
        />
      ))}

    </HStack>
  );
}
