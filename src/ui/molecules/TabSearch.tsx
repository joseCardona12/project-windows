import { ReactElement } from "react";
import { IconArrowRightV2 } from "../../../public/icons";

interface ITabSearchProps {
  iconStart: ReactElement;
  text: string;
}
export default function TabSearch({
  iconStart,
  text,
}: ITabSearchProps): React.ReactNode {
  return (
    <div className="bg-[var(--color-gray-light-02)] p-2 rounded-[var(--border-radius-min)] flex items-center gap-4 w-full">
      <span>{iconStart}</span>
      <span>
        <IconArrowRightV2 />
      </span>
      <p>{text}</p>
      <span>
        <IconArrowRightV2 />
      </span>
    </div>
  );
}
