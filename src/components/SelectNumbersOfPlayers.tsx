import { ActiveButton } from "./ActiveButton";
import { Label } from "./Label";

type Player = {
  id: number;
  playerName: string;
  score: number;
  isCurrent: boolean;
};

type RoundSetup = {
  theme: string;
  players: Player[];
  numberOfPlayers: number;
  gridSize: string;
};

interface SelectNumbersOfPlayersProps {
  roundSetup: RoundSetup;
  setRoundSetup: (fn: (state: RoundSetup) => RoundSetup) => void;
};

export function SelectNumbersOfPlayers({ roundSetup, setRoundSetup }: SelectNumbersOfPlayersProps) {
  return (
    <Label text="Numbers of Players">
      <ActiveButton
        isActive={roundSetup.numberOfPlayers === 1}
        onClick={() => setRoundSetup((state) => {
          return {
            ...state,
            numberOfPlayers: 1,
          };
        })}
      >
        1
      </ActiveButton>

      <ActiveButton
        isActive={roundSetup.numberOfPlayers === 2}
        onClick={() => setRoundSetup((state) => {
          return {
            ...state,
            numberOfPlayers: 2,
          };
        })}
      >
        2
      </ActiveButton>

      <ActiveButton
        isActive={roundSetup.numberOfPlayers === 3}
        onClick={() => setRoundSetup((state) => {
          return {
            ...state,
            numberOfPlayers: 3,
          };
        })}
      >
        3
      </ActiveButton>

      <ActiveButton
        isActive={roundSetup.numberOfPlayers === 4}
        onClick={() => setRoundSetup((state) => {
          return {
            ...state,
            numberOfPlayers: 4,
          };
        })}
      >
        4
      </ActiveButton>
    </Label>
  );
}
