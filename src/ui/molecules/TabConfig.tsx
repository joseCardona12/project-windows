"use client";
import { useOpenModalWindow } from "@/app/core/application/state-global/modalWindow";
import {
  IconArrowDownV2,
  IconBatteryFull,
  IconCloud,
  IconConfig,
  IconDesktop,
  IconFolder,
  IconSpeaker,
  IconWifi,
  IconWindow,
  IconWindowRestore,
} from "../../../public/icons";
import Icon from "../atoms/Icon";
import InputSearchV2 from "./InputSearchV2";
import { useView } from "@/app/core/application/state-global/view";
import { useSection } from "@/app/core/application/state-global/section";
import DesktopSection from "../organisms/DesktopSection";

export default function TabConfig(): React.ReactNode {
  const { setOpenModalWindow, openModalWindow } = useOpenModalWindow(
    (state) => state
  );

  const { setStateView } = useView((state) => state);
  const { setStateSection } = useSection((state) => state);

  return (
    <div className="flex items-center justify-between">
      <div>left</div>
      <div className="flex gap-2 items-center">
        <Icon icon={<IconWindow className="text-[1.4rem]" />} />
        <InputSearchV2 />
        <Icon icon={<IconWindowRestore />} />
        <Icon icon={<IconConfig />} />
        <Icon
          icon={<IconFolder />}
          click={() => {
            setStateView({
              view: "Desktop",
              icon: <IconDesktop />,
            });
            setStateSection({
              name: "Desktop",
              section: <DesktopSection />,
              icon: <IconDesktop />,
            });
            setOpenModalWindow(!openModalWindow);
          }}
        />
      </div>
      <div className="flex items-center gap-2">
        <Icon icon={<IconArrowDownV2 />} />
        <Icon icon={<IconCloud />} />
        <Icon icon={<>ESP</>} />
        <Icon icon={<IconWifi />} />
        <Icon icon={<IconSpeaker />} />
        <Icon icon={<IconBatteryFull />} />
      </div>
    </div>
  );
}
