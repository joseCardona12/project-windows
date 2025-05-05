import HeaderModalConfig from "@/ui/molecules/HeaderModalConfig";
import GoogleSection from "./GoogleSection";
import { useOpenModalCustom } from "@/app/core/application/state-global/modalCustom";

export default function Youtube(): React.ReactNode {
  const { setOpenModalCustom } = useOpenModalCustom((state) => state);
  return (
    <div>
      <HeaderModalConfig
        setExpand={() => {}}
        setWindow={() => {}}
        title="Youtube"
        clickLeft={() => {
          setOpenModalCustom({
            nameIcon: "youtube",
            state: true,
            section: <GoogleSection />,
          });
        }}
      />
      Youtube
    </div>
  );
}
