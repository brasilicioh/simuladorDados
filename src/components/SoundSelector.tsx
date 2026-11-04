import { useEffect, useState } from "react";
import { navigate } from "astro:transitions/client";
import audioIcon from "../assets/whiteAudio.png";
import sound1 from "../assets/audio/sound1.mp4";
import sound2 from "../assets/audio/sound2.mp4";
import sound3 from "../assets/audio/sound3.mp4";
import sound4 from "../assets/audio/sound4.mp4";
import sound5 from "../assets/audio/sound5.mp4";
import sound6 from "../assets/audio/sound6.mp4";
import sound7 from "../assets/audio/sound7.mp4";
import sound8 from "../assets/audio/sound8.mp4";
import sound9 from "../assets/audio/sound9.mp4";
import sound10 from "../assets/audio/sound10.mp4";
import sound11 from "../assets/audio/sound11.mp4";
import sound12 from "../assets/audio/sound12.mp4";
import sound13 from "../assets/audio/sound13.mp4";

const sounds = [
  ["Som 1", "Pumm", sound1],
  ["Som 2", "Tarann", sound2],
  ["Som 3", "TuamTan", sound3],
  ["Som 4", "Ahhhh", sound4],
  ["Som 5", "Miguel O'Hara", sound5],
  ["Som 6", "Gatuno", sound6],
  ["Som 7", "Venom", sound7],
  ["Som 8", "WhatsApp", sound8],
  ["Som 9", "Cano caindo", sound9],
  ["Som 10", "Ahh uiuiui", sound10],
  ["Som 11", "Harrial", sound11],
  ["Som 12", "Poinoinoin", sound12],
  ["Som 13", "Honhonhoin", sound13],
] as const;

const SOUND_KEY = "selected-dice-sound";

export default function SoundSelector() {
  const [selectedSound, setSelectedSound] = useState("");

  useEffect(() => {
    setSelectedSound(localStorage.getItem(SOUND_KEY) ?? "");
  }, []);

  function selectSound(sound: string) {
    localStorage.setItem(SOUND_KEY, sound);
    setSelectedSound(sound);
  }

  function goBack() {
    void navigate(import.meta.env.BASE_URL);
  }

  return (
    <main className="mx-auto max-w-3xl">
      <h2 className="mb-5 text-2xl font-bold">
        Escolha o som ao jogar os dados
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {sounds.map(([label, title, source]) => (
          <button
            key={source}
            type="button"
            title={title}
            className={`flex items-center justify-center gap-2 rounded px-3 py-2 ${
              selectedSound === source ? "bg-blue-800" : "bg-blue-500"
            } hover:bg-blue-700 text-white`}
            onClick={() => selectSound(source)}
          >
            <img src={audioIcon.src} alt="" title={title} className="h-5 w-5" />
            {label}
          </button>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          title="Não tocar nenhum som"
          className="rounded bg-stone-500 px-3 py-2 text-white"
          onClick={() => selectSound("")}
        >
          Nenhum som
        </button>
        <button
          type="button"
          title="Escolher um som aleatório a cada rolagem"
          className="rounded bg-blue-500 px-3 py-2 text-white"
          onClick={() => selectSound("random")}
        >
          Som aleatório
        </button>
        <button
          type="button"
          className="rounded bg-amber-500 px-3 py-2 text-black"
          onClick={goBack}
        >
          Voltar
        </button>
      </div>
    </main>
  );
}

export function playSelectedSound() {
  const selectedSound = localStorage.getItem(SOUND_KEY);
  if (!selectedSound) return;

  const source =
    selectedSound === "random"
      ? sounds[Math.floor(Math.random() * sounds.length)][2]
      : selectedSound;
  const audio = new Audio(source);
  void audio.play();
}
