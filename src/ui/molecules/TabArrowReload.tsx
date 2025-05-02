import {
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconReload,
} from "../../../public/icons";

export default function TabArrowReload(): React.ReactNode {
  return (
    <div className="flex items-center gap-6">
      <span className="p-2 hover:bg-[var(--color-gray-light-02)] cursor-pointer rounded-[var(--border-radius-min)]">
        <IconArrowLeft />
      </span>
      <span className="p-2 hover:bg-[var(--color-gray-light-02)] cursor-pointer rounded-[var(--border-radius-min)]">
        <IconArrowRight />
      </span>
      <span className="p-2 hover:bg-[var(--color-gray-light-02)] cursor-pointer rounded-[var(--border-radius-min)]">
        <IconArrowUp />
      </span>
      <span className="p-2 hover:bg-[var(--color-gray-light-02)] cursor-pointer rounded-[var(--border-radius-min)]">
        <IconReload />
      </span>
    </div>
  );
}
