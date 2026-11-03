import Button from "./Button";

export default function HeaderButtons() {
  function removeDices() {
    window.dispatchEvent(new CustomEvent("remove-all-dice"));
  }

  function changeTheme() {
    document.body.classList.toggle("white");
  }

  function openSoundPage() {
    window.location.href = "/audio";
  }

  return (
    <div className="m-3 flex justify-around gap-3">
      <Button text="Limpar Página" onClick={removeDices} />
      <Button text="Mudar Tema" onClick={changeTheme} />
      <Button text="Configurar Sons" onClick={openSoundPage} />
    </div>
  );
}
