import { ReactElement } from "react";

interface IContentIconV2Props {
  icon: ReactElement;
  text: string;
  iconFinal?: ReactElement;
  click?: () => void;
}
export default function ContentIconV2({
  icon,
  text,
  iconFinal,
  click,
}: IContentIconV2Props): React.ReactNode {
  return (
    <div
      onClick={click}
      className="cursor-pointer p-2 rounded-[var(--border-radius-min)] flex items-center gap-2 border border-[var(--color-gray-light-02)] hover:border-[var(--border-gray)]"
    >
      <span>{icon}</span>
      <p>{text}</p>
      {iconFinal && <span>{iconFinal}</span>}
    </div>
  );
}
