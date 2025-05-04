import { useOpenModalCustom } from "@/app/core/application/state-global/modalCustom";
import HeaderModalConfig from "../molecules/HeaderModalConfig";
import Icon from "../atoms/Icon";
import { useModalSmall } from "@/app/core/application/state-global/ModalSmall";
import ItemList from "../molecules/ItemList";
import { IconSave } from "../../../public/icons";
import { useFileState } from "@/app/core/application/state-global/files";
import { useState } from "react";
import { useMessage } from "@/app/core/application/state-global/messge";

export default function NotePadSection(): React.ReactNode {
  const { setOpenModalCustom, openModalCustom } = useOpenModalCustom(
    (state) => state
  );
  const [contentNotepad, setContentNotepad] = useState<string>("");
  const { setFileState, fileState } = useFileState((state) => state);
  const { setModalSmall, modalSmall } = useModalSmall((state) => state);
  const { setMessage, message } = useMessage();
  const date = Date.now().toString().split("");
  return (
    <div className="flex flex-col gap-4">
      <HeaderModalConfig
        title="NotePad"
        setExpand={() => {
          setOpenModalCustom({
            nameIcon: "notepad",
            state: !openModalCustom.state,
          });
        }}
        setWindow={() => {
          setOpenModalCustom({
            nameIcon: "notepad",
            state: !openModalCustom.state,
          });
        }}
      />
      <div className="flex items-center gap-2">
        <Icon
          icon={<>File</>}
          click={() => {
            setModalSmall({
              state: !modalSmall.state,
              children: (
                <div
                  onClick={() => {
                    setFileState([
                      ...fileState,
                      {
                        content: contentNotepad,
                        key: `file_${date[9]}${date[10]}${date[11]}_${date[12]}${date[12]}`,
                      },
                    ]);
                    setMessage({
                      description: "Saved file",
                      state: !message.state,
                      variant: "success",
                    });
                  }}
                >
                  <ItemList icon={<IconSave />} text="Save" />
                </div>
              ),
              width: "20%",
              height: "100px",
              position: { x: 30, y: 110 },
            });
          }}
        />
        <Icon icon={<>Edit</>} />
        <Icon icon={<>View</>} />
      </div>
      <div className="w-full bg-[var(--border-gray)] h-[.9px]"></div>
      <div className="h-[480px] w-full ">
        <textarea
          className="w-full h-full outline-none scroll-custom"
          onChange={(e) => {
            setContentNotepad(e.target.value);
          }}
        ></textarea>
      </div>
    </div>
  );
}
