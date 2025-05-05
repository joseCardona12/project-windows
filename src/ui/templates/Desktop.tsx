"use client";
import ContentIcon from "../atoms/CotentIcon";
import { IconFile, IconGoogle, IconTrash } from "../../../public/icons";
import Modal from "../organisms/Modal";
import Footer from "../organisms/Footer";
import ModalSmall from "../molecules/ModalSmall";
import { useState } from "react";
import { DATA_MODAL_CLICK_RIGHT } from "@/utils/constants/dataModalClickRight";
import { IModalClickRightData } from "@/interfaces/ModalClickRightData";
import ItemModalClickRight from "../molecules/ItemModalClickRight";
import { useView } from "@/app/core/application/state-global/view";
import { useSection } from "@/app/core/application/state-global/section";
import ModalCustom from "../organisms/ModalCustom";
import { useOpenModalCustom } from "@/app/core/application/state-global/modalCustom";
import { useDesktopBackground } from "@/app/core/application/state-global/desktopBackground";
import Message from "../molecules/Message";
import { useModalSmall } from "@/app/core/application/state-global/ModalSmall";
import Icon from "../atoms/Icon";
import { useFileState } from "@/app/core/application/state-global/files";
import { IFile } from "@/interfaces/files";
import HeaderModalConfig from "../molecules/HeaderModalConfig";
import { useOpenModalWindow } from "@/app/core/application/state-global/modalWindow";
import GoogleSection from "../organisms/GoogleSection/GoogleSection";

export default function Desktop(): React.ReactNode {
  const [positionModalClickRight, setPositionModalClickRight] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const { setStateView } = useView((state) => state);
  const { stateSection, setStateSection } = useSection((state) => state);
  const { openModalCustom, setOpenModalCustom } = useOpenModalCustom(
    (state) => state
  );
  const { desktopBackground } = useDesktopBackground((state) => state);
  const { setModalSmall, modalSmall } = useModalSmall((state) => state);
  const { fileState } = useFileState((state) => state);
  const { setOpenModalWindow, openModalWindow } = useOpenModalWindow(
    (state) => state
  );
  const [fileActive, setFileActive] = useState<IFile>({
    content: "",
    key: "",
  });

  return (
    <div
      onContextMenu={(e) => {
        console.log(fileActive, "file active...");
        e.preventDefault();
        setPositionModalClickRight({ x: e.clientX, y: e.clientY });
        setModalSmall({
          state: !modalSmall.state,
          children: (
            <ul>
              {DATA_MODAL_CLICK_RIGHT.map((item: IModalClickRightData) => (
                <ItemModalClickRight
                  text={item.text}
                  icon={item.icon}
                  isIconRight={item.isIconRight}
                  key={item.key}
                  isBorderBottom={item.isBorderBottom}
                />
              ))}
            </ul>
          ),
          position: positionModalClickRight,
        });
      }}
    >
      <main
        style={{
          backgroundImage: `url(${desktopBackground})`,
        }}
        className="relative w-[100%] h-[97vh] bg-gray-200 rounded-[var(--border-radius-min)] max-w-[1500px] m-auto p-2 bg-center bg-cover overflow-x-hidden overflow-y-hidden"
      >
        <div
          className="grid grid-cols-10 gap-2 absolute z-10"
          onClick={() => {
            setStateView({
              view: "Trash",
              icon: <IconTrash />,
            });
            setStateSection({
              name: "Trash",
              section: <>Section Trash</>,
            });
          }}
        >
          <ContentIcon
            text="Trash"
            icon={<IconTrash />}
            click={() => {
              setOpenModalWindow(!openModalWindow);
            }}
          />
          <ContentIcon
            text="Google"
            icon={<IconGoogle />}
            click={() => {
              setOpenModalCustom({
                nameIcon: "",
                state: !openModalCustom.state,
                section: <GoogleSection />,
              });
            }}
          />
          {fileState.map((file: IFile, index: number) => (
            <Icon
              icon={
                <div
                  className="flex flex-col gap-2 justify-center items-center"
                  onMouseEnter={() => {
                    setFileActive(file);
                  }}
                >
                  <IconFile />
                  <span>{file.key}.txt</span>
                </div>
              }
              variant="outline"
              click={() => {
                setOpenModalCustom({
                  nameIcon: file.key,
                  state: !openModalCustom.state,
                  section: (
                    <div className="flex flex-col gap-4">
                      <HeaderModalConfig
                        title="Saved Notepad"
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
                      />
                      <p>{file.content}</p>
                    </div>
                  ),
                });
              }}
              key={index}
            />
          ))}
        </div>
        <Modal section={stateSection.section} />
        <ModalCustom openModal={openModalCustom.state}>
          {openModalCustom.section}
        </ModalCustom>
        <ModalSmall />
        <Message />
        <Footer />
      </main>
    </div>
  );
}
