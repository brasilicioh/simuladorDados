import { useState } from "react";
import Button from "./Button";
import { playSelectedSound } from "./SoundSelector";

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
  const [error, setError] = useState("");

  function handleRoll() {
    const sidesNumber = Number(sides);
    const quantityNumber = Number(quantity);

    if (
      !Number.isInteger(sidesNumber) ||
      sidesNumber < 2 ||
      !Number.isInteger(quantityNumber) ||
      quantityNumber < 1
    ) {
      setError("Informe lados (mínimo 2) e quantidade (mínimo 1).");
      return;
    }

    setError("");
    const results: number[] = [];
    let sum = 0;
    for (let i = 0; i < quantityNumber; i++) {
      const roll = Math.floor(Math.random() * sidesNumber) + 1;
      results.push(roll);
      sum += roll;
    }
    onRoll(results, sum);
    playSelectedSound();
  }

  return (
    <div className="w-full max-w-lg rounded-2xl border white:border-stone-200 white:bg-white p-4 white:text-stone-800 border-stone-700 bg-stone-950 text-stone-100">
      <div className="flex items-center justify-between border-b border-stone-200 pb-3 white:border-stone-700">
        <h2 className="text-base font-semibold">Configurar dado</h2>
        <button
          type="button"
          aria-label="Fechar dado"
          onClick={onRemove}
          className="flex h-8 w-8 justify-center text-xl transition text-stone-500 hover:text-red-600 white:text-stone-400 white:hover:text-red-300"
        >
          X
        </button>
      </div>

      <div className="grid grid-cols-2 gap-3 py-4">
        <label className="flex flex-col gap-1 text-sm font-medium">
          <span>Lados do dado</span>
          <input
            type="number"
            id={`sides-${dice.id}`}
            min="1"
            step="1"
            className="w-full rounded-lg border white:border-stone-300 white:bg-stone-50 px-3 py-2 text-center text-base white:text-stone-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 border-stone-600 bg-stone-900 text-white"
            value={sides}
            onChange={(e) => setSides(e.target.value)}
          />
        </label>

        <label className="flex flex-col gap-1 text-sm font-medium">
          <span>Quantidade</span>
          <input
            type="number"
            id={`quantity-${dice.id}`}
            min="1"
            step="1"
            className="w-full rounded-lg border white:border-stone-300 white:bg-stone-50 px-3 py-2 text-center text-base white:text-stone-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 border-stone-600 bg-stone-900 text-white"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
      </div>

      <div className="border-t border-stone-200 pt-3 white:border-stone-700">
        <Button
          text="Jogar Dado"
          bgColor="bg-blue-600"
          bgHoverColor="hover:bg-blue-700"
          size="w-full py-2.5"
          onClick={handleRoll}
        />
      </div>

      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}

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
