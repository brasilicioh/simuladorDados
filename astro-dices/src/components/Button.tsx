interface Props {
  text: string;
  bgColor?: string;
  bgHoverColor?: string;
  size?: string;
  onClick?: () => void;
}

export default function Button({
  text,
  bgColor = "bg-gray-500",
  bgHoverColor = "hover:bg-gray-700",
  size = "basis-1/4 py-2",
  onClick,
}: Props) {
  const style = `${bgColor} ${bgHoverColor} text-white rounded cursor-pointer ${size} transition duration-300`;

  function handleClick() {
    onClick?.();
  }

  return (
    <button type="button" className={style} onClick={handleClick}>
      {text}
    </button>
  );
}
