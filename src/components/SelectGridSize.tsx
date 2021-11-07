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

interface SelectGridSizeProps {
  roundSetup: RoundSetup;
  setRoundSetup: (fn: (state: RoundSetup) => RoundSetup) => void;
};

export function SelectGridSize({ roundSetup, setRoundSetup }: SelectGridSizeProps) {
  return (
    <Label text="Grid Size">
      <ActiveButton
        isActive={roundSetup.gridSize === '4x4'}
        onClick={() => setRoundSetup((state) => {
          return {
            ...state,
            gridSize: '4x4',
          };
        })}
      >
        4x4
      </ActiveButton>

      <ActiveButton
        isActive={roundSetup.gridSize === '6x6'}
        onClick={() => setRoundSetup((state) => {
          return {
            ...state,
            gridSize: '6x6',
          };
        })}
      >
        6x6
      </ActiveButton>
    </Label>
  );
}
