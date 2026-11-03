import { useEffect, useMemo, useRef, useState } from "react";
import Dice, { type DiceData } from "./Dice";

export default function DiceBoard() {
  const [dice, setDice] = useState<DiceData[]>([]);
  const nextDiceId = useRef(0);
  const totalSum = useMemo(
    () => dice.reduce((total, currentDice) => total + currentDice.sum, 0),
    [dice],
  );

  const removeDiceById = (id: number) => {
    setDice((currentDice) =>
      currentDice.filter((CurrentDice) => CurrentDice.id !== id),
    );
  };

  const addDice = () => {
    setDice((currentDice) => [
      ...currentDice,
      { id: nextDiceId.current++, results: [], sum: 0 },
    ]);
  };

  const updateDiceResults = (id: number, results: number[], sum: number) => {
    setDice((currentDice) =>
      currentDice.map((CurrentDice) =>
        CurrentDice.id === id ? { ...CurrentDice, results, sum } : CurrentDice,
      ),
    );
  };

  const removeDice = () => {
    setDice((currentDice) => currentDice.slice(0, -1));
  };

  const removeAllDice = () => {
    setDice([]);
  };

  useEffect(() => {
    window.addEventListener("add-dice", addDice);
    window.addEventListener("remove-dice", removeDice);
    window.addEventListener("remove-all-dice", removeAllDice);

    return () => {
      window.removeEventListener("add-dice", addDice);
      window.removeEventListener("remove-dice", removeDice);
      window.removeEventListener("remove-all-dice", removeAllDice);
    };
  }, []);

  return (
    <div className="mt-6 flex flex-col items-center gap-4">
      {dice.map((CurrentDice) => (
        <Dice
          key={CurrentDice.id}
          dice={CurrentDice}
          onRemove={() => removeDiceById(CurrentDice.id)}
          onRoll={(results, sum) =>
            updateDiceResults(CurrentDice.id, results, sum)
          }
        />
      ))}
      {totalSum != 0 && (
        <p className="text-lg font-bold">Soma total {totalSum}</p>
      )}
    </div>
  );
}
