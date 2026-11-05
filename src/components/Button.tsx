import type { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "className" | "type"
> {
  text?: string;
  children?: ReactNode;
  bgColor?: string;
  bgHoverColor?: string;
  size?: string;
  className?: string;
}

export default function Button({
  text,
  bgColor = "bg-gray-500",
  bgHoverColor = "hover:bg-gray-700",
  size = "basis-1/4 py-2",
  className,
  children,
  ...buttonProps
}: Props) {
  const style = `${bgColor} ${bgHoverColor} text-white rounded cursor-pointer ${size} transition duration-300 ${className ?? ""}`;

  return (
    <button type="button" className={style} {...buttonProps}>
      {children}
      {text}
    </button>
  );
}
