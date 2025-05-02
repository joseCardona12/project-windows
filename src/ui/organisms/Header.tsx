"use client";
import { useView } from "@/app/core/application/state-global/view";
import { IconHome } from "../../../public/icons";
import Tab from "../atoms/Tab";
import InputSearch from "../molecules/InputSearch";
import TabArrowReload from "../molecules/TabArrowReload";
import TabCloseExpand from "../molecules/TabCloseExpand";
import TabSearch from "../molecules/TabSearch";
import { useSection } from "@/app/core/application/state-global/section";

export default function Header(): React.ReactNode {
  const { stateView } = useView((state) => state);
  const { stateSection } = useSection((state) => state);
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Tab
            text={stateSection.name || stateView.view}
            icon={stateSection.icon || stateView.icon}
          />
        </div>
        <TabCloseExpand />
      </div>
      <div className="flex items-center gap-2 w-full">
        <TabArrowReload />
        <TabSearch
          iconStart={stateSection.icon || <IconHome />}
          text={stateSection.name}
        />
        <InputSearch />
      </div>
    </div>
  );
}
