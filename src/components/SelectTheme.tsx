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

interface SelectThemeProps {
  roundSetup: RoundSetup;
  setRoundSetup: (fn: (state: RoundSetup) => RoundSetup) => void;
};

export function SelectTheme({ roundSetup, setRoundSetup }: SelectThemeProps) {
  return (
    <Label text="Select Theme">
      <ActiveButton
        isActive={roundSetup.theme === 'Numbers'}
        onClick={() => setRoundSetup((state) => {
          return {
            ...state,
            theme: 'Numbers',
          };
        })}
      >
        Numbers
      </ActiveButton>

      <ActiveButton
        isActive={roundSetup.theme === 'Icons'}
        onClick={() => setRoundSetup((state) => {
          return {
            ...state,
            theme: 'Icons',
          };
        })}
      >
        Icons
      </ActiveButton>
    </Label>
  );
}
