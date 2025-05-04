import { useOpenModalCustom } from "@/app/core/application/state-global/modalCustom";
import HeaderModalConfig from "../molecules/HeaderModalConfig";
import MenuConfiguration from "./MenuConfiguration";
import { useTitleViewConfig } from "@/app/core/application/state-global/titleViewConfig";

export default function ConfigSectionConfiguration(): React.ReactNode {
  const { setOpenModalCustom, openModalCustom } = useOpenModalCustom(
    (state) => state
  );

  const { titleViewConfig } = useTitleViewConfig((state) => state);
  return (
    <div className="flex flex-col gap-2">
      <HeaderModalConfig
        title="Configuration"
        setExpand={() => {
          setOpenModalCustom({
            ...openModalCustom,
            state: !openModalCustom.state,
          });
        }}
        setWindow={() => {
          setOpenModalCustom({
            ...openModalCustom,
            state: !openModalCustom.state,
          });
        }}
      />
      <div className="flex gap-6">
        <MenuConfiguration />
        <div className="w-full flex flex-col gap-2">
          <h4 className="text-[1.1rem] font-medium">
            {titleViewConfig.titleView}
          </h4>
          {titleViewConfig.section}
        </div>
      </div>
    </div>
  );
}
