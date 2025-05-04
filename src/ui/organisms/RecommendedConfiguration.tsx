import { IconLanguage, IconList, IconSpeaker } from "../../../public/icons";
import ItemList from "../molecules/ItemList";

export default function RecommendedConfiguration(): React.ReactNode {
  return (
    <div className="flex flex-col justify-between h-full gap-4 ">
      <div>
        <h4 className="font-medium text-[1.1rem]">Recommended Configuration</h4>
        <p className="text-[.9rem] text-[var(--color-text)]">
          Recent configuration and used
        </p>
      </div>
      <div className="w-full bg-[var(--border-gray)] h-[0.9px]"></div>
      <div className="flex flex-col gap-2">
        <ItemList icon={<IconList />} text="Installed Apps" isArrow />
        <ItemList icon={<IconSpeaker />} text="Sound" isArrow />
        <ItemList icon={<IconLanguage />} text="Lenguage" isArrow />
      </div>
    </div>
  );
}
