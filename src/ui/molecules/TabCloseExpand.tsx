"use client";
import { IconClose, IconMinus, IconExpand } from "../../../public/icons";

interface ITabCloseExpandProps {
  setOpenModalWindow: () => void;
  setOpenModalExpand: () => void;
}
export default function TabCloseExpand({
  setOpenModalWindow,
  setOpenModalExpand,
}: ITabCloseExpandProps): React.ReactNode {
  return (
    <div className="flex items-center gap-2">
      <span
        onClick={() => setOpenModalWindow()}
        className="hover:bg-[var(--color-gray-light-02)] p-2 cursor-pointer rounded-[var(--border-radius-min)] transition-colors duration-200"
      >
        <IconMinus />
      </span>
      <span
        onClick={() => setOpenModalExpand()}
        className="hover:bg-[var(--color-gray-light-02)] p-2 cursor-pointer rounded-[var(--border-radius-min)] transition-colors duration-200"
      >
        <IconExpand />
      </span>
      <span
        onClick={() => setOpenModalWindow()}
        className="hover:bg-[var(--color-red)] p-2 cursor-pointer rounded-[var(--border-radius-min)] transition-colors duration-200"
      >
        <IconClose />
      </span>
    </div>
  );
}
