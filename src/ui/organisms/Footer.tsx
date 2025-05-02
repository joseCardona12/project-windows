import TabConfig from "../molecules/TabConfig";

export default function Footer(): React.ReactNode {
  return (
    <div className="absolute bottom-0 left-0 w-full p-1 z-200 ">
      <div className="bg-[var(--color-gray-light)] rounded-[var(--border-radius-min)] p-2 border border-[var(--border-gray)]">
        <TabConfig />
      </div>
    </div>
  );
}
