"use client";
import { useOpenModalWindow } from "@/app/core/application/state-global/modalWindow";
import {
  IconArrowDownV2,
  IconBatteryFull,
  IconCloud,
  IconConfig,
  IconDesktop,
  IconFolder,
  IconPower,
  IconSpeaker,
  IconTerminal,
  IconWifi,
  IconWindow,
  IconWindowRestore,
} from "../../../public/icons";
import Icon from "../atoms/Icon";
import InputSearchV2 from "./InputSearchV2";
import { useView } from "@/app/core/application/state-global/view";
import { useSection } from "@/app/core/application/state-global/section";
import DesktopSection from "../organisms/DesktopSection";
import ContentIconsWindow from "./ContentIconsWindow";
import ContentInitialWindowTabAll from "./ContentInitialWidowTabAll";
import ContentInitialWindowTabRecomme from "./ContentIntialWindowTabRecomme";
import ContentUser from "../atoms/ContentUser";
import { useOpenModalCustom } from "@/app/core/application/state-global/modalCustom";
import { useModalSmall } from "@/app/core/application/state-global/ModalSmall";
import { useEffect, useState } from "react";
import { IActiveIcon } from "@/interfaces/activeIcon";
import { ACTIVE_ICON } from "@/utils/constants/activeIcon";
import HeaderModalConfig from "./HeaderModalConfig";
import Terminal from "./Terminal";
import ConfigSectionConfiguration from "../organisms/ConfigSectionConfiguration";
import getDateFormat from "@/utils/getDateFormat";
import NotificationSection from "../organisms/NotificationSection";

export default function TabConfig(): React.ReactNode {
  const { setOpenModalWindow, openModalWindow } = useOpenModalWindow(
    (state) => state
  );
  const { openModalCustom, setOpenModalCustom } = useOpenModalCustom(
    (state) => state
  );
  const { setStateView } = useView((state) => state);
  const { setStateSection } = useSection((state) => state);
  const { setModalSmall, modalSmall } = useModalSmall((state) => state);
  const [activeClickIcon, setActiveClickIcon] =
    useState<IActiveIcon>(ACTIVE_ICON);
  const [currentTime, setCurrentTime] = useState<string>(
    getDateFormat(new Date())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getDateFormat(new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-between">
      <div>left</div>
      <div className="flex gap-2 items-center">
        <Icon
          icon={<IconWindow className="text-[1.4rem]" />}
          isActive={activeClickIcon.window.state}
          click={() => {
            setModalSmall({
              children: (
                <div className="flex flex-col gap-4 p-5 relative h-full">
                  <InputSearchV2 />
                  <ContentIconsWindow
                    title="Anchor"
                    textButton="All"
                    textButtonBack="Back"
                    contentInitial={<ContentInitialWindowTabAll />}
                    contentRight={<ContentInitialWindowTabRecomme />}
                  />
                  <div className="absolute bottom-0 left-0 w-full flex items-center justify-between pl-6 pr-6 pb-4">
                    <ContentUser name="Jose Barreto Cardona" />
                    <Icon icon={<IconPower />} />
                  </div>
                </div>
              ),
              state: !modalSmall.state,
              position: { x: 450, y: 160 },
              width: "50%",
              height: "450px",
            });
            setActiveClickIcon({
              ...activeClickIcon,
              window: {
                name: "window",
                state: !activeClickIcon.window.state,
              },
            });
          }}
        />
        <InputSearchV2 />
        <Icon icon={<IconWindowRestore />} />
        <Icon
          icon={<IconConfig />}
          isActive={openModalCustom.state}
          click={() => {
            console.log("click");
            setOpenModalCustom({
              nameIcon: "WINDOW",
              state: !openModalCustom.state,
              section: <ConfigSectionConfiguration />,
            });
          }}
        />
        <Icon
          icon={<IconTerminal />}
          isActive={activeClickIcon.terminal.state}
          click={() => {
            setModalSmall({
              children: (
                <div className="flex flex-col gap-4 relative h-full">
                  <HeaderModalConfig
                    title="JC PoweShell"
                    setExpand={() => {
                      setModalSmall({
                        ...modalSmall,
                        state: false,
                      });
                    }}
                    setWindow={() => {
                      setModalSmall({
                        ...modalSmall,
                        state: false,
                      });
                    }}
                  />
                  <Terminal />
                </div>
              ),
              state: !modalSmall.state,
              position: { x: 300, y: 110 },
              width: "60%",
              height: "500px",
            });
            setActiveClickIcon({
              ...activeClickIcon,
              terminal: {
                name: "terminal",
                state: !activeClickIcon.terminal.state,
              },
            });
          }}
        />
        <Icon
          icon={<IconFolder />}
          isActive={openModalWindow}
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
        <Icon
          icon={<IconArrowDownV2 />}
          isActive={activeClickIcon.arrow.state}
          click={() => {
            setModalSmall({
              children: (
                <div className="flex flex-col gap-4 p-5 relative h-full">
                  Arrow...
                </div>
              ),
              state: !modalSmall.state,
              position: { x: 1010, y: 410 },
              width: "20%",
              height: "200px",
            });
            setActiveClickIcon({
              ...activeClickIcon,
              arrow: {
                name: "arrow",
                state: !activeClickIcon.arrow.state,
              },
            });
          }}
        />
        <Icon icon={<IconCloud />} />
        <Icon
          isActive={activeClickIcon.language.state}
          icon={<>ESP</>}
          click={() => {
            setModalSmall({
              children: (
                <div className="flex flex-col gap-4 p-5 relative h-full">
                  Language...
                </div>
              ),
              state: !modalSmall.state,
              position: { x: 1100, y: 410 },
              width: "20%",
              height: "200px",
            });
            setActiveClickIcon({
              ...activeClickIcon,
              language: {
                name: "language",
                state: !activeClickIcon.language.state,
              },
            });
          }}
        />
        <Icon
          icon={
            <div className="flex items-center gap-2 p-1">
              <IconWifi />
              <IconSpeaker />
              <IconBatteryFull />
            </div>
          }
          isActive={activeClickIcon.wifi.state}
          click={() => {
            setModalSmall({
              children: (
                <div className="flex flex-col gap-4 p-5 relative h-full">
                  Wifi...
                </div>
              ),
              state: !modalSmall.state,
              position: { x: 1205, y: 310 },
              width: "20%",
              height: "300px",
            });
            setActiveClickIcon({
              ...activeClickIcon,
              wifi: {
                name: "wifi",
                state: !activeClickIcon.wifi.state,
              },
            });
          }}
        />
        <Icon
          icon={<p>{currentTime}</p>}
          click={() => {
            setModalSmall({
              state: !modalSmall.state,
              children: <NotificationSection />,
              position: { x: 1205, y: 54 },
              width: "20%",
              height: "80vh",
            });
          }}
        />
      </div>
    </div>
  );
}
