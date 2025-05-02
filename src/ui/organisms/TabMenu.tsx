"use client";
import { useSection } from "@/app/core/application/state-global/section";
import { IconDesktop } from "../../../public/icons";
import ItemList from "../molecules/ItemList";
import DesktopSection from "./DesktopSection";
import {
  DATA_TAB_MENU,
  DATA_TAB_MENU_DEFAULT,
} from "@/utils/constants/dataTabMenu";
import { ITabMenuData } from "@/interfaces/TabMenudData";

export default function TabMenu(): React.ReactNode {
  const { setStateSection } = useSection((state) => state);
  return (
    <div className="bg-[var(--color-gray-light-02)] rounded-[var(--border-radius-min)] p-2 w-[20%] h-full">
      <ul className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          {DATA_TAB_MENU_DEFAULT.map((item: ITabMenuData, index: number) => (
            <ItemList
              icon={item.icon}
              text={item.text}
              click={() =>
                setStateSection({
                  name: item.text,
                  section: item.section,
                  icon: item.icon,
                })
              }
              isPin={item.isPin}
              key={index}
            />
          ))}
        </div>
        <div className="w-full h-[1px] bg-[var(--border-gray)]"></div>
        <div className="flex flex-col gap-1">
          {DATA_TAB_MENU.map((item: ITabMenuData, index: number) => (
            <ItemList
              icon={item.icon}
              text={item.text}
              click={() =>
                setStateSection({
                  name: item.text,
                  section: item.section,
                  icon: item.icon,
                })
              }
              isPin={item.isPin}
              key={index}
            />
          ))}
        </div>
        <div className="w-full h-[1px] bg-[var(--border-gray)]"></div>
        <div>
          <ItemList
            icon={<IconDesktop />}
            text="Desktop"
            click={() =>
              setStateSection({
                name: "Desktop",
                section: <DesktopSection />,
                icon: <IconDesktop />,
              })
            }
          />
        </div>
      </ul>
    </div>
  );
}
