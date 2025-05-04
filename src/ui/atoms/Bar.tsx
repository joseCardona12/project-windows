interface IBarProps {
  width: string;
}
export default function Bar({ width }: IBarProps): React.ReactNode {
  return (
    <div className="flex flex-col gap-4">
      <p>Used {width} of 100%</p>
      <div className="w-full h-[5px] bg-[var(--color-gray-light-03)] rounded-[var(--border-radius-min)]">
        <div
          style={{ width }}
          className="bg-[var(--color-red)] h-[5px] rounded-[var(--border-radius-min)]"
        ></div>
      </div>
    </div>
  );
}
