"use client";
import ContentIcon from "../atoms/CotentIcon";
import { IconTrash } from "../../../public/icons";
import Modal from "../organisms/Modal";
import Footer from "../organisms/Footer";
import ModalSmall from "../molecules/ModalSmall";
import { useState } from "react";
import { DATA_MODAL_CLICK_RIGHT } from "@/utils/constants/dataModalClickRight";
import { IModalClickRightData } from "@/interfaces/ModalClickRightData";
import ItemModalClickRight from "../molecules/ItemModalClickRight";
import { useView } from "@/app/core/application/state-global/view";
import { useSection } from "@/app/core/application/state-global/section";

export default function Desktop(): React.ReactNode {
  const [openModalClickRight, setOpenModalClickRight] =
    useState<boolean>(false);
  const [positionModalClickRight, setPositionModalClickRight] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  const { setStateView } = useView((state) => state);
  const { stateSection, setStateSection } = useSection((state) => state);

  return (
    <div
      onContextMenu={(e) => {
        e.preventDefault();
        setPositionModalClickRight({ x: e.clientX, y: e.clientY });
        setOpenModalClickRight(!openModalClickRight);
      }}
    >
      <main
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/753325/pexels-photo-753325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`,
        }}
        className="relative w-[100%] h-[100vh] bg-gray-200 rounded-[var(--border-radius-min)] max-w-[1500px] m-auto p-2 bg-center bg-cover"
      >
        <div
          className="flex gap-2 absolute z-10"
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
          <ContentIcon text="Trash" icon={<IconTrash />} />
        </div>
        <Modal section={stateSection.section} />
        <ModalSmall
          openModal={openModalClickRight}
          setOpenModal={setOpenModalClickRight}
          position={positionModalClickRight}
        >
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
        </ModalSmall>
        <Footer />
      </main>
    </div>
  );
}
