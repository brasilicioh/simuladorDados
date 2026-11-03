import { useState, useEffect } from "react";
import Button from "./Button";

interface Props {
  onRemove: () => void;
  dice: DiceData;
  onRoll: (results: number[], sum: number) => void;
}

export interface DiceData {
  id: number;
  results: number[];
  sum: number;
}

export default function Dice({ onRemove, dice, onRoll }: Props) {
  const [sides, setSides] = useState<string>("6");
  const [quantity, setQuantity] = useState<string>("1");

  function handleRoll() {
    const sidesNumber = Number(sides);
    const quantityNumber = Number(quantity);

    const results: number[] = [];
    let sum = 0;
    for (let i = 0; i < quantityNumber; i++) {
      const roll = Math.floor(Math.random() * sidesNumber) + 1;
      results.push(roll);
      sum += roll;
    }
    onRoll(results, sum);
  }

  useEffect(() => {
    if (
      isNaN(Number(sides)) ||
      Number(sides) < 0 ||
      !Number.isInteger(Number(sides))
    ) {
      setSides("");
    }

    if (
      isNaN(Number(quantity)) ||
      Number(quantity) < 0 ||
      !Number.isInteger(Number(quantity))
    ) {
      setQuantity("");
    }
  }, [sides, quantity]);

  return (
    <div className="w-full max-w-lg rounded-2xl border border-stone-200 bg-white p-4 text-stone-800 white:border-stone-700 white:bg-stone-950 white:text-stone-100">
      <div className="flex items-center justify-between border-b border-stone-200 pb-3 white:border-stone-700">
        <h2 className="text-base font-semibold">Configurar dado</h2>
        <button
          type="button"
          aria-label="Fechar dado"
          onClick={onRemove}
          className="flex h-8 w-8 justify-center text-xl transition text-stone-500 hover:text-red-600 white:text-stone-400 white:hover:text-red-300"
        >
          ×
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 py-4">
        <label className="flex flex-col gap-1 text-sm font-medium">
          <span>Lados do dado</span>
          <input
            type="text"
            id="side-input"
            min="1"
            step="1"
            className="w-full rounded-lg border border-stone-300 bg-stone-50 px-3 py-2 text-center text-base text-stone-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 white:border-stone-600 white:bg-stone-900 white:text-white"
            value={sides}
            onChange={(e) => setSides(e.target.value)}
          />
        </label>

        <label className="flex flex-col gap-1 text-sm font-medium">
          <span>Quantidade</span>
          <input
            type="text"
            id="side-input"
            min="1"
            step="1"
            className="w-full rounded-lg border border-stone-300 bg-stone-50 px-3 py-2 text-center text-base text-stone-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 white:border-stone-600 white:bg-stone-900 white:text-white"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
      </div>

      <div className="border-t border-stone-200 pt-3 white:border-stone-700">
        <Button
          text="Jogar Dado"
          action="rollDice"
          onClick={handleRoll}
          bgColor="bg-blue-600"
          bgHoverColor="hover:bg-blue-700"
          size="w-full py-2.5"
        />
      </div>

      {dice.results.length > 0 && (
        <div className="mt-4">
          <p className="text-sm text-stone-500 white:text-stone-400">
            Resultados: {dice.results.join(", ")}
          </p>
          <p className="text-sm text-stone-500 white:text-stone-400">
            Soma: {dice.sum}
          </p>
        </div>
      )}
    </div>
  );
}
