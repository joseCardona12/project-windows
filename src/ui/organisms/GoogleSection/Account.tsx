import { useOpenModalCustom } from "@/app/core/application/state-global/modalCustom";
import HeaderModalConfig from "@/ui/molecules/HeaderModalConfig";
import GoogleSection from "./GoogleSection";

export default function Account(): React.ReactNode {
  const { setOpenModalCustom, openModalCustom } = useOpenModalCustom(
    (state) => state
  );
  return (
    <div>
      <HeaderModalConfig
        clickLeft={() => {
          setOpenModalCustom({
            ...openModalCustom,
            state: true,
            section: <GoogleSection />,
          });
        }}
        setExpand={() => {}}
        setWindow={() => {
          setOpenModalCustom({
            ...openModalCustom,
            state: true,
            section: <GoogleSection />,
          });
        }}
        title="Account"
      />
      account
    </div>
  );
}
