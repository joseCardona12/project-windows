import { ButtonHTMLAttributes } from "react";

type Variant = "red" | "blue";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  addClass?: string;
  variant?: Variant;
}
export default function Button({
  variant,
  children,
  addClass,
  ...props
}: IButtonProps): React.ReactNode {
  const classVariant = {
    red: "bg-[var(--color-red)] text-white hover:bg-[var(--color-red)]/90 transition-colors duration-200",
    blue: "",
    default: "",
  };
  return (
    <button
      {...props}
      className={`${addClass} ${
        classVariant[variant || "default"]
      } flex items-center gap-2 p-1 pl-2 pr-2 border border-[var(--border-gray)] rounded-[var(--border-radius-min)] cursor-pointer hover:bg-[var(--color-gray-light-03)]`}
    >
      {children}
    </button>
  );
}
