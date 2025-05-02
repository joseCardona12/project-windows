"use client";
import { ReactElement } from "react";
import { IconArrowRightV2 } from "../../../public/icons";

interface IItemModalClickRightProps {
  icon: ReactElement;
  text: string;
  isIconRight?: boolean;
  isBorderBottom?: boolean;
}
export default function ItemModalClickRight({
  icon,
  text,
  isIconRight,
  isBorderBottom,
}: IItemModalClickRightProps): React.ReactNode {
  return (
    <div className="flex flex-col gap-1 cursor-pointer">
      <li
        className={`flex ${
          isBorderBottom && "flex-col items-start"
        } items-center gap-2 justify-between w-full p-1 pl-3 pr-3 hover:bg-[var(--color-gray-light-02)] border border-[var(--color-gray-light)] hover:border-[var(--border-gray)] rounded-[var(--border-radius-min)] transition-colors duration-200
      `}
      >
        <div className={`flex  items-center gap-2`}>
          <span>{icon}</span>
          <p>{text}</p>
        </div>
        {isIconRight && (
          <span>
            <IconArrowRightV2 />
          </span>
        )}
      </li>
      {isBorderBottom && (
        <div className="w-full h-[.8px] bg-[var(--border-gray)]"></div>
      )}
    </div>
  );
}
