import { ReactElement } from "react";

interface IIconTextProps {
  icon: ReactElement;
  text: string;
  click?: () => void;
  isBorder?: boolean;
}
export default function IconText({
  icon,
  text,
  click,
  isBorder = true,
}: IIconTextProps): React.ReactNode {
  return (
    <div
      onClick={click}
      className={`flex flex-col gap-1 justify-center items-center cursor-pointer p-2 ${
        isBorder && "border border-[var(--border-gray)]"
      } rounded-[var(--border-radius-min)] hover:bg-[var(--color-gray-light-03)]`}
    >
      <span className="text-[1.4rem]">{icon}</span>
      {text}
    </div>
  );
}
