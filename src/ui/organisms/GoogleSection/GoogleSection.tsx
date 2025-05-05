import { useOpenModalCustom } from "@/app/core/application/state-global/modalCustom";
import HeaderModalConfig from "../../molecules/HeaderModalConfig";
import InputSearchV2 from "../../molecules/InputSearchV2";
import ContentIconCircle from "../../atoms/ContentIconCircle";
import { DATA_APP_GOOGLE_HOME } from "@/utils/constants/dataAppGoogleHome";
import { useState } from "react";
import { IIcon } from "@/interfaces/icon";
import { useMessage } from "@/app/core/application/state-global/messge";
import { useModalSmall } from "@/app/core/application/state-global/ModalSmall";
import filterDataById from "@/utils/filterDataById";
import Icon from "../../atoms/Icon";
import IconCircle from "../../atoms/IconCircle";
import { IconAppFill } from "../../../../public/icons";
import GoogleAccount from "./GoogleAccount";
import GoogleApps from "./GoogleApps";
import ContentIcon from "@/ui/atoms/CotentIcon";
import ContentLetter from "@/ui/atoms/ContentLetter";

export default function GoogleSection(): React.ReactNode {
  const { setOpenModalCustom, openModalCustom } = useOpenModalCustom(
    (state) => state
  );
  const { setModalSmall, modalSmall } = useModalSmall((state) => state);
  const { setMessage } = useMessage((state) => state);
  const [dataAppGoogleHome, setDataAppGoogleHome] =
    useState<IIcon[]>(DATA_APP_GOOGLE_HOME);
  return (
    <section className="h-full flex flex-col gap-2">
      <HeaderModalConfig
        setExpand={() => {
          setOpenModalCustom({
            ...openModalCustom,
            state: false,
          });
        }}
        setWindow={() => {
          setOpenModalCustom({
            ...openModalCustom,
            state: false,
          });
        }}
        title="Google"
      />
      <div className="flex justify-end gap-2">
        <Icon icon={<>Gmail</>} />
        <Icon icon={<>Images</>} />
        <IconCircle
          icon={<IconAppFill />}
          tooltip={<p className="text-[.8rem]">Google Apps</p>}
          click={() => {
            console.log("click");
            setModalSmall({
              children: <GoogleApps />,
              state: !modalSmall.state,
              width: "25%",
              position: { x: 1060, y: 100 },
            });
          }}
        />
        <IconCircle
          icon={<ContentLetter letter="J" />}
          tooltip={<p className="text-[.8rem]">Google Account</p>}
          click={() => {
            console.log("click");
            setModalSmall({
              children: <GoogleAccount />,
              state: !modalSmall.state,
              width: "30%",
              position: { x: 1050, y: 100 },
            });
          }}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-8 h-[70%]">
        <h2 className="text-[3rem] font-medium">Google</h2>
        <div className="w-[40%]">
          <InputSearchV2 />
        </div>
        <div className="flex gap-6">
          {dataAppGoogleHome.map((item, index) => (
            <ContentIconCircle
              key={index}
              icon={item.icon}
              name={item.text}
              click={() => {
                const filteredData = filterDataById<IIcon>(
                  dataAppGoogleHome,
                  item.key
                );
                setDataAppGoogleHome(filteredData);
                setMessage({
                  description: "",
                  state: true,
                  variant: "success",
                  title: `Removed correctly ${item.text}`,
                });
                setModalSmall({
                  ...modalSmall,
                  state: false,
                });
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
