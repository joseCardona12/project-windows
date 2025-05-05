"use client";
import { useSection } from "@/app/core/application/state-global/section";
import ItemListV2 from "../../molecules/ItemListV2";
import ActiveContent from "../ActiveContent";
import { DATA_TAB_MENU } from "@/utils/constants/dataTabMenu";
import { ITabMenuData } from "@/interfaces/TabMenudData";

export default function HomeSection(): React.ReactNode {
  const { setStateSection } = useSection((state) => state);

  return (
    <section className="bg-[var(--color-gray-light-02)] rounded-[var(--border-radius-min)] p-6 pt-2 w-full">
      <ActiveContent text="Fast Access">
        <div>
          <ul className="grid grid-cols-4 gap-2">
            {DATA_TAB_MENU.map((item: ITabMenuData, index: number) => (
              <ItemListV2
                description="Local saved"
                icon={item.icon}
                title={item.text}
                isPine={item.isPin}
                click={() => {
                  setStateSection({
                    name: item.text,
                    section: item.section,
                  });
                }}
                key={index}
              />
            ))}
          </ul>
        </div>
      </ActiveContent>
      <ActiveContent text="Favorites">
        <p>
          After marking some file as favorites, the files are displayed here.
        </p>
      </ActiveContent>
      <ActiveContent text="Recent">
        <p>No data recent.</p>
      </ActiveContent>
    </section>
  );
}
