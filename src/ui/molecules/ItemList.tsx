import { ReactElement } from "react";
import { IconArrowRightV2, IconPin } from "../../../public/icons";

interface IItemListProps {
  text: string;
  icon: ReactElement;
  click?: () => void;
  isPin?: boolean;
  isArrow?: boolean;
}
export default function ItemList({
  text,
  icon,
  click,
  isPin,
  isArrow,
}: IItemListProps): React.ReactNode {
  return (
    <li
      onClick={click}
      className="flex items-center justify-between gap-2 cursor-pointer border border-[var(--color-gray-light-02)] hover:border-[var(--border-gray)] p-1 pl-2 pr-2 rounded-[var(--border-radius-min)]"
    >
      <div className="flex items-center gap-2">
        <span>{icon}</span>
        {text}
      </div>
      {isPin && (
        <span>
          <IconPin />
        </span>
      )}
      {isArrow && (
        <span>
          <IconArrowRightV2 />
        </span>
      )}
    </li>
  );
}
