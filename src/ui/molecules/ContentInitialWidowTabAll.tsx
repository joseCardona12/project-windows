import { DATA_TAB_WINDOW_HOME } from "@/utils/constants/dataTabWindowHome";

import IconText from "../atoms/IconText";
import { ITabWindowHome } from "@/interfaces/tabWindowHome";
import { useModalSmall } from "@/app/core/application/state-global/ModalSmall";
import { useOpenModalCustom } from "@/app/core/application/state-global/modalCustom";

export default function ContentInitialWindowTabAll(): React.ReactNode {
  const { setModalSmall, modalSmall } = useModalSmall((state) => state);
  const { setOpenModalCustom, openModalCustom } = useOpenModalCustom(
    (state) => state
  );
  return (
    <div className="grid grid-cols-5 gap-2">
      {DATA_TAB_WINDOW_HOME.map((item: ITabWindowHome, index: number) => (
        <IconText
          icon={item.icon}
          text={item.name}
          key={index}
          click={() => {
            setOpenModalCustom({
              nameIcon: "NOTEPAD",
              state: !openModalCustom.state,
              section: item.sectionModal,
            });
            setModalSmall({
              ...modalSmall,
              state: !modalSmall.state,
            });
          }}
        />
      ))}
    </div>
  );
}
