import { useOpenModalCustom } from "@/app/core/application/state-global/modalCustom";
import HeaderModalConfig from "@/ui/molecules/HeaderModalConfig";
import GoogleSection from "./GoogleSection";
import SpinnerLoading from "@/ui/atoms/SpinnerLoading";
import { useState } from "react";

export default function Drive(): React.ReactNode {
  const { setOpenModalCustom } = useOpenModalCustom((state) => state);
  const [loading, setLoading] = useState<boolean>(true);
  return (
    <div>
      <HeaderModalConfig
        setExpand={() => {}}
        setWindow={() => {}}
        title="Drive"
        clickLeft={() => {
          setOpenModalCustom({
            nameIcon: "drive",
            state: true,
            section: <GoogleSection />,
          });
        }}
      />
      Drive
      <SpinnerLoading loading={loading} setLoading={setLoading} />
    </div>
  );
}
