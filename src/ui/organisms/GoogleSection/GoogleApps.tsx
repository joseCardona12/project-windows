import IconText from "@/ui/atoms/IconText";
import { ITabWindowHome } from "@/interfaces/tabWindowHome";
import { DATA_GOOGLE_APPS } from "@/utils/constants/dataGoogleApps";
import { useOpenModalCustom } from "@/app/core/application/state-global/modalCustom";
import { useModalSmall } from "@/app/core/application/state-global/ModalSmall";

export default function GoogleApps(): React.ReactNode {
  const { setOpenModalCustom } = useOpenModalCustom((state) => state);
  const { setModalSmall } = useModalSmall((state) => state);
  return (
    <div className="grid grid-cols-3 gap-2 p-4">
      {DATA_GOOGLE_APPS.map((item: ITabWindowHome, index) => (
        <IconText
          key={index}
          icon={item.icon}
          text={item.name}
          click={() => {
            setOpenModalCustom({
              nameIcon: item.name,
              state: true,
              section: item.sectionModal,
            });
            setModalSmall({
              state: false,
              children: <></>,
            });
          }}
          isBorder={false}
        />
      ))}
    </div>
  );
}
