import { ReactElement } from "react";
import { IconClose } from "../../../public/icons";

interface ITabProps {
  icon: ReactElement;
  text: string;
}
export default function Tab({ icon, text }: ITabProps): React.ReactNode {
  return (
    <div className="bg-[var(--color-gray-light-02)] p-1 pl-2 pr-2 rounded-[var(--border-radius-min)] w-[150px] flex justify-between">
      <div className="flex items-center gap-2">
        <span className="text-[.8rem]">{icon}</span>
        <p>{text}</p>
      </div>
      <IconClose className="hover:text-[var(--color-red)] cursor-pointer" />
    </div>
  );
}
