"use client";
import { ReactElement } from "react";

interface IContentIconProps {
  icon: ReactElement;
  text: string;
  click: () => void;
}
export default function ContentIcon({
  icon,
  text,
  click,
}: IContentIconProps): React.ReactNode {
  return (
    <div
      className="flex flex-col justify-center items-center gap-2 p-2 hover:bg-white/20 border border-transparent hover:border-white/40 rounded-[var(--border-radius-min)] text-white cursor-pointer"
      onClick={click}
    >
      <span className="text-[1.2rem]">{icon}</span>
      <span className="text-[.9rem]">{text}</span>
    </div>
  );
}
