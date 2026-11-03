import Button from "./Button";

export default function AddDiceButton() {
  function addDice() {
    window.dispatchEvent(new CustomEvent("add-dice"));
  }

  return (
    <Button
      text="Adicionar Dado"
      bgColor="bg-blue-500"
      bgHoverColor="hover:bg-blue-700"
      size="px-6 py-2"
      onClick={addDice}
    />
  );
}
