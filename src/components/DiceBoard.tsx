import { useEffect, useMemo, useSyncExternalStore } from "react";
import Dice from "./Dice";
import {
  addDice,
  getDice,
  removeAllDice,
  removeDiceById,
  subscribe,
  updateDiceResults,
} from "../store/diceStore";

export default function DiceBoard() {
  const dice = useSyncExternalStore(subscribe, getDice, getDice);
  const totalSum = useMemo(
    () => dice.reduce((total, currentDice) => total + currentDice.sum, 0),
    [dice],
  );

  useEffect(() => {
    window.addEventListener("add-dice", addDice);
    window.addEventListener("remove-all-dice", removeAllDice);
    return () => {
      window.removeEventListener("add-dice", addDice);
      window.removeEventListener("remove-all-dice", removeAllDice);
    };
  }, []);

  // TODO: mover sides, quantity e error do estado local de Dice.tsx para o
  // store caso a configuração de cada dado também precise sobreviver à rota.
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
