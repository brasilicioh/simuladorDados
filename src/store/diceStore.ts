import type { DiceData } from "../components/Dice";

type Listener = () => void;

let dice: DiceData[] = [];
let nextDiceId = 0;
const listeners = new Set<Listener>();

function notify() {
  listeners.forEach((listener) => listener());
}

export function getDice() {
  return dice;
}

export function subscribe(listener: Listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function addDice() {
  dice = [
    ...dice,
    {
      id: nextDiceId++,
      sides: "6",
      quantity: "1",
      error: "",
      results: [],
      sum: 0,
    },
  ];
  notify();
}

export function removeDiceById(id: number) {
  dice = dice.filter((currentDice) => currentDice.id !== id);
  notify();
}

export function removeAllDice() {
  nextDiceId = 0;
  dice = [];
  notify();
}

export function updateDiceResults(id: number, results: number[], sum: number) {
  dice = dice.map((currentDice) =>
    currentDice.id === id ? { ...currentDice, results, sum } : currentDice,
  );
  notify();
}

export function updateDiceConfig(
  id: number,
  config: Partial<Pick<DiceData, "sides" | "quantity" | "error">>,
) {
  dice = dice.map((currentDice) =>
    currentDice.id === id ? { ...currentDice, ...config } : currentDice,
  );
  notify();
}
