import { ReactElement } from "react";

interface IIconProps {
  icon: ReactElement;
  click?: () => void;
}
export default function Icon({ icon, click }: IIconProps): React.ReactNode {
  return (
    <span
      onClick={click}
      className="hover:bg-[var(--color-gray-light-02)] p-2 rounded-[var(--border-radius-min)] cursor-pointer border border-[var(--color-gray-light-02)] hover:border-[var(--border-gray)]"
    >
      {icon}
    </span>
  );
}
