"use client";
import { useOpenModalWindow } from "@/app/core/application/state-global/modalWindow";
import { ReactElement } from "react";

interface IContentIconProps {
  icon: ReactElement;
  text: string;
}
export default function ContentIcon({
  icon,
  text,
}: IContentIconProps): React.ReactNode {
  const { openModalWindow, setOpenModalWindow } = useOpenModalWindow(
    (state) => state
  );
  return (
    <div
      className="flex flex-col justify-center items-center gap-2 p-2 hover:bg-white/20 border border-transparent hover:border-white/40 rounded-[var(--border-radius-min)] text-white cursor-pointer"
      onClick={() => {
        setOpenModalWindow(!openModalWindow);
      }}
    >
      <span className="text-[1.2rem]">{icon}</span>
      <span className="text-[.9rem]">{text}</span>
    </div>
  );
}
