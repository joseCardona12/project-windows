import { useTitleViewConfig } from "@/app/core/application/state-global/titleViewConfig";
import ContentUser from "../atoms/ContentUser";
import InputSearch from "../molecules/InputSearch";
import ItemList from "../molecules/ItemList";
import { DATA_TAB_MENU_CONFIG } from "@/utils/constants/dataTabMenu";

export default function MenuConfiguration(): React.ReactNode {
  const { setTitleViewConfig } = useTitleViewConfig((state) => state);
  return (
    <div className="w-[30%] flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <ContentUser
          name="Jose Barreto Cardona"
          email="josesimonbarreto.design@gmail.com"
        />
        <InputSearch placeholder="Search option configuration..." />
      </div>
      <div className="flex flex-col gap-2">
        {DATA_TAB_MENU_CONFIG.map((item, index: number) => (
          <ItemList
            text={item.text || ""}
            icon={item.icon || <></>}
            click={() =>
              setTitleViewConfig({
                titleView: item.text || "",
                section: item.section,
              })
            }
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
