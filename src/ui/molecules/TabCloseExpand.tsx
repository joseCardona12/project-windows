"use client";
import { IconClose, IconMinus, IconExpand } from "../../../public/icons";
import { useOpenModalWindow } from "@/app/core/application/state-global/modalWindow";
import { useOpenModalExpand } from "@/app/core/application/state-global/modalExpand";

export default function TabCloseExpand(): React.ReactNode {
  const { setOpenModalWindow, openModalWindow } = useOpenModalWindow(
    (state) => state
  );
  const { setOpenModalExpand, openModalExpand } = useOpenModalExpand(
    (state) => state
  );

  return (
    <div className="flex items-center gap-2">
      <span
        onClick={() => setOpenModalWindow(!openModalWindow)}
        className="hover:bg-[var(--color-gray-light-02)] p-2 cursor-pointer rounded-[var(--border-radius-min)] transition-colors duration-200"
      >
        <IconMinus />
      </span>
      <span
        onClick={() => setOpenModalExpand(!openModalExpand)}
        className="hover:bg-[var(--color-gray-light-02)] p-2 cursor-pointer rounded-[var(--border-radius-min)] transition-colors duration-200"
      >
        <IconExpand />
      </span>
      <span
        onClick={() => setOpenModalWindow(!openModalWindow)}
        className="hover:bg-[var(--color-red)] p-2 cursor-pointer rounded-[var(--border-radius-min)] transition-colors duration-200"
      >
        <IconClose />
      </span>
    </div>
  );
}
