interface Props {
  text: string;
  action: "clear" | "theme" | "sounds" | "addDice" | "removeDice" | "rollDice";
  bgColor?: string;
  bgHoverColor?: string;
  size?: string;
  onClick?: () => void;
}

export default function Button({
  text,
  action,
  bgColor = "bg-gray-500",
  bgHoverColor = "hover:bg-gray-700",
  size = "basis-1/4 py-2",
  onClick,
}: Props) {
  const style = `${bgColor} ${bgHoverColor} text-white rounded cursor-pointer ${size} transition duration-300`;

  function handleClick() {
    if (action === "theme") {
      document.body.classList.toggle("white");
    }

    if (action === "addDice") {
      window.dispatchEvent(new CustomEvent("add-dice"));
    }

    if (action === "removeDice") {
      window.dispatchEvent(new CustomEvent("remove-dice"));
    }

    if (action === "clear") {
      window.dispatchEvent(new CustomEvent("remove-all-dice"));
    }

    if (action === "sounds") {
      window.location.href = "/audio";
    }

    onClick?.();
  }

  return (
    <button type="button" className={style} onClick={handleClick}>
      {text}
    </button>
  );
}
