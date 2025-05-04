import { DATA_TAB_WINDOW_HOME } from "@/utils/constants/dataTabWindowHome";
import ItemList from "./ItemList";
import { ITabWindowHome } from "@/interfaces/tabWindowHome";

export default function ContentInitialWindowTabRecomme(): React.ReactNode {
  return (
    <div
      className="flex flex-col gap-2 overflow-y-auto h-[85%] scroll-custom "
      style={{ overflowY: "scroll", maxHeight: "300px" }}
    >
      {DATA_TAB_WINDOW_HOME.map((item: ITabWindowHome, index: number) => (
        <ItemList icon={item.icon} key={index} text={item.name} />
      ))}
    </div>
  );
}
