import { ReactElement } from "react";
import { IconPin } from "../../../public/icons";

interface IItemListV2Props {
  icon: ReactElement;
  title: string;
  description: string;
  isPine?: boolean;
  click?: () => void;
}
export default function ItemListV2({
  icon,
  title,
  description,
  isPine,
  click,
}: IItemListV2Props): React.ReactNode {
  return (
    <li
      onClick={click}
      className="flex gap-4 items-start hover:bg-[var(--color-gray-light-03)] p-2 cursor-pointer rounded-[var(--border-radius-min)] transition-colors duration-200 border border-[var(--color-gray-light-02)] hover:border-[var(--border-gray)]"
    >
      <span className="text-[1.8rem]">{icon}</span>
      <div className="flex flex-col">
        <h5 className="m-0 p-0">{title}</h5>
        <p className="text-[var(--color-text)]">{description}</p>
        {isPine && (
          <span>
            <IconPin />
          </span>
        )}
      </div>
    </li>
  );
}
