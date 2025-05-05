import { useOpenModalCustom } from "@/app/core/application/state-global/modalCustom";
import HeaderModalConfig from "@/ui/molecules/HeaderModalConfig";
import GoogleSection from "./GoogleSection";

export default function Gmail(): React.ReactNode {
  const { setOpenModalCustom } = useOpenModalCustom((state) => state);
  return (
    <div>
      <HeaderModalConfig
        setExpand={() => {}}
        setWindow={() => {}}
        title="Gmail"
        clickLeft={() => {
          setOpenModalCustom({
            nameIcon: "gmail",
            state: true,
            section: <GoogleSection />,
          });
        }}
      />
      Gmail
    </div>
  );
}
