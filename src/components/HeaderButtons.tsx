import Button from "./Button";
import { navigate } from "astro:transitions/client";
import { toggleTheme } from "../store/themeStore";

export default function HeaderButtons() {
  function removeDices() {
    window.dispatchEvent(new CustomEvent("remove-all-dice"));
  }

  function changeTheme() {
    toggleTheme();
    window.dispatchEvent(new Event("theme-changed"));
  }

  function openSoundPage() {
    const url_sound = import.meta.env.BASE_URL;
    void navigate(
      url_sound[url_sound.length - 1] === "/"
        ? `${url_sound}audio`
        : `${url_sound}/audio`,
    );
  }

  return (
    <div className="m-3 flex justify-around gap-3">
      <Button text="Limpar Página" onClick={removeDices} />
      <Button text="Mudar Tema" onClick={changeTheme} />
      <Button text="Configurar Sons" onClick={openSoundPage} />
    </div>
  );
}
